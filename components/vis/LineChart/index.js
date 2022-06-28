// https://www.headway.io/blog/building-a-svg-line-chart-in-react

import { Fragment } from "react";
import moment from "moment";

import { chartDateFormat } from "/consts";

import toPercentage from "/helpers/toPercentage";

import * as styles from "/styles/1-utils/_variables.module.scss";

const spring = styles.springMd;

const innerLineColor = styles.visInnerLineColor;
const innerLinechartWidth = styles.visInnerLinechartWidth;

const outerLineColor = styles.visOuterLineColor;
const outerLinechartWidth = styles.visOuterLinechartWidth;

const labelColor = styles.visLabelColor;
const labelFont = styles.labelFont;

const precision = 2;
const horizontalGuideCount = 2;
const chartHeight = 225;
const chartWidth = 500;

function formatXLabel(val) {
  return moment(val).format(chartDateFormat);
}
function formatYLabels(max, index, PARTS) {
  return toPercentage(
    parseFloat(max * (index / PARTS)).toFixed(precision)
  );
}

const LineChart = ({ data }) => {
  const FONT_SIZE = chartWidth / 33.333;
  const labelTextStyle = {
    fill: labelColor,
    fontSize: FONT_SIZE,
    fontFamily: labelFont,
  };

  const maximumXFromData = Math.max(...data.map((e) => e.x));
  const maximumYFromData = Math.max(...data.map((e) => e.y));

  const digits =
    parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;

  const padding = (FONT_SIZE + digits) * 3;
  const chartWidthOffset = chartWidth - padding * 2;
  const chartHeightOffset = chartHeight - padding * 2;

  const points = data.map((element) => {
    const x = (element.x / maximumXFromData) * chartWidthOffset + padding;
    const y =
      chartHeightOffset -
      (element.y / maximumYFromData) * chartHeightOffset +
      padding;

    return { x, y };
  });

  const pointsJoined = points
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  const Axis = ({ coords }) => (
    <polyline
      fill="none"
      stroke={outerLineColor}
      strokechartWidth={outerLinechartWidth}
      points={coords}
    />
  );

  const XAxis = () => (
    <Axis
      coords={`${padding},${chartHeight - padding} ${
        chartWidth - padding
      },${chartHeight - padding}`}
    />
  );

  const YAxis = () => (
    <Axis
      coords={`${padding},${padding} ${padding},${chartHeight - padding}`}
    />
  );

  const VerticalGuides = () => {
    const guideCount = data.length - 1;

    const startY = padding;
    const endY = chartHeight - padding;

    return new Array(guideCount).fill(0).map((_, index) => {
      const ratio = (index + 1) / guideCount;

      const xCoordinate = padding + ratio * (chartWidth - padding * 2);

      return (
        <Fragment key={index}>
          <polyline
            fill="none"
            stroke={innerLineColor}
            strokechartWidth={innerLinechartWidth}
            points={`${xCoordinate},${startY} ${xCoordinate},${endY}`}
          />
        </Fragment>
      );
    });
  };

  const HorizontalGuides = () => {
    const startX = padding;
    const endX = chartWidth - padding;

    return new Array(horizontalGuideCount).fill(0).map((_, index) => {
      const ratio = (index + 1) / horizontalGuideCount;

      const yCoordinate =
        chartHeightOffset - chartHeightOffset * ratio + padding;

      return (
        <Fragment key={index}>
          <polyline
            fill="none"
            stroke={innerLineColor}
            strokechartWidth={innerLinechartWidth}
            points={`${startX},${yCoordinate} ${endX},${yCoordinate}`}
          />
        </Fragment>
      );
    });
  };

  const XAxisLabels = () => {
    const y = chartHeight - padding + FONT_SIZE * 2;

    return data.map((element, index) => {
      const x =
        (element.x / maximumXFromData) * chartWidthOffset +
        padding / 2 -
        FONT_SIZE / 2;

      return (
        <text key={index} x={x} y={y} style={labelTextStyle}>
          {formatXLabel(element.label)}
        </text>
      );
    });
  };

  const YAxisLabels = () => {
    const PARTS = horizontalGuideCount;

    return new Array(PARTS + 1).fill(0).map((_, index) => {
      const x = FONT_SIZE;
      const ratio = index / horizontalGuideCount;

      const yCoordinate =
        chartHeightOffset -
        chartHeightOffset * ratio +
        padding +
        FONT_SIZE / 2;

      return (
        <text key={index} x={x} y={yCoordinate} style={labelTextStyle}>
          {formatYLabels(maximumYFromData, index, PARTS)}
        </text>
      );
    });
  };

  const Dots = () =>
    points.map((dot) => (
      <circle cx={dot.x} cy={dot.y} r="5" fill={spring} />
    ));

  const Line = () => (
    <polyline
      fill="none"
      stroke={spring}
      strokechartWidth={outerLinechartWidth}
      points={pointsJoined}
    />
  );

  return (
    <svg
      viewBox={`0 0 ${chartWidth} ${chartHeight}`}
      style={{ marginTop: -(padding / 2) }}
    >
      <XAxis />
      <XAxisLabels />
      <VerticalGuides />

      <YAxis />
      <YAxisLabels />
      <HorizontalGuides />

      <Dots />
      <Line />
    </svg>
  );
};

export default LineChart;
