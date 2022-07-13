// https://www.headway.io/blog/building-a-svg-line-chart-in-react
import moment from "moment";

import { chartDateFormat } from "/consts";

import toPercentage from "/helpers/toPercentage";

import * as styles from "/styles/1-utils/_variables.module.scss";

const spring = styles.springMd;

const innerLineColor = styles.visInnerLineColor;
const innerLineWidth = styles.visInnerLineWidth;

const connectingLineColor = styles.gray;
const connectingLineWidth = "2px";

const outerLineColor = styles.visOuterLineColor;
const outerLineWidth = styles.visOuterLineWidth;

const labelColor = styles.visLabelColor;
const labelFont = styles.labelFont;

const precision = 2;
const horizontalGuideCount = 2;
const chartHeight = 225;
const chartWidth = 500;

function formatXLabel(val) {
  return moment(val).format(chartDateFormat);
}
function formatYLabels(max, i, PARTS) {
  return toPercentage(parseFloat(max * (i / PARTS)).toFixed(precision));
}

function filterOutEmptyKeys(arr) {
  return arr.filter((obj) => {
    if (typeof obj === "object" && Object.keys(obj).length !== 0) {
      return true;
    }
  });
}

export default function LineChart(props) {
  const { data, isComplete } = props;

  const fontSize = chartWidth / 33.333;
  const labelTextStyle = {
    fill: labelColor,
    fontSize: fontSize,
    fontFamily: labelFont,
  };

  const filteredData = filterOutEmptyKeys(data);

  const maximumXFromData = Math.max(...filteredData.map((e) => e.x));
  const maximumYFromData = Math.max(...filteredData.map((e) => e.y));

  const digits =
    parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;

  const padding = (fontSize + digits) * 3;
  const chartWidthOffset = chartWidth - padding * 2;
  const chartHeightOffset = chartHeight - padding * 2;

  const points = filteredData.map((element) => {
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
      strokeWidth={outerLineWidth}
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
    const guideCount = 2;

    const startY = padding;
    const endY = chartHeight - padding;

    return new Array(guideCount).fill(0).map((_, i) => {
      const ratio = (i + 1) / guideCount;

      const xCoordinate = padding + ratio * (chartWidth - padding * 2);

      return (
        <polyline
          key={`vertical-guide-${i}`}
          fill="none"
          stroke={innerLineColor}
          strokeWidth={innerLineWidth}
          points={`${xCoordinate},${startY} ${xCoordinate},${endY}`}
        />
      );
    });
  };

  const HorizontalGuides = () => {
    const startX = padding;
    const endX = chartWidth - padding;

    return new Array(horizontalGuideCount).fill(0).map((_, i) => {
      const ratio = (i + 1) / horizontalGuideCount;

      const yCoordinate =
        chartHeightOffset - chartHeightOffset * ratio + padding;

      return (
        <polyline
          key={`horizontal-guide-${i}`}
          fill="none"
          stroke={innerLineColor}
          strokeWidth={innerLineWidth}
          points={`${startX},${yCoordinate} ${endX},${yCoordinate}`}
        />
      );
    });
  };

  const XAxisLabels = () => {
    const y = chartHeight - padding + fontSize * 2;

    return filteredData.map((element, i) => {
      const x =
        (element.x / maximumXFromData) * chartWidthOffset +
        padding * 0.75 -
        fontSize / 2;

      return (
        (i === 0 || i === filteredData.length - 1) && (
          <text key={i} x={x} y={y} style={labelTextStyle}>
            {formatXLabel(element.label)}
          </text>
        )
      );
    });
  };

  const YAxisLabels = () => {
    const PARTS = horizontalGuideCount;

    return new Array(PARTS + 1).fill(0).map((_, i) => {
      const x = fontSize;
      const ratio = i / horizontalGuideCount;

      const yCoordinate =
        chartHeightOffset -
        chartHeightOffset * ratio +
        padding +
        fontSize / 2;

      return (
        <text
          key={`text-label-${i}`}
          x={x}
          y={yCoordinate}
          style={labelTextStyle}
        >
          {formatYLabels(maximumYFromData, i, PARTS)}
        </text>
      );
    });
  };

  const Dots = () =>
    points.map((dot, i) => (
      <circle
        key={`point-${i}`}
        cx={dot.x}
        cy={dot.y}
        r="5"
        fill={
          (i === points.length - 1 && isComplete === false) || i === 0
            ? connectingLineColor
            : spring
        }
      />
    ));

  const Line = () => (
    <polyline
      fill="none"
      stroke={connectingLineColor}
      strokeWidth={connectingLineWidth}
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

      <Line />
      <Dots />
    </svg>
  );
}
