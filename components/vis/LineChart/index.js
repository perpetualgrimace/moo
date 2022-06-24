// https://www.headway.io/blog/building-a-svg-line-chart-in-react

import { Fragment } from "react";

import toPercentage from "/helpers/toPercentage";

import * as styles from "/styles/1-utils/_variables.module.scss";

const salmon = styles.salmonMd;
const sun = styles.sunMd;
const spring = styles.springMd;

const innerLineColor = styles.visInnerLineColor;
const innerLineWidth = styles.visInnerLineWidth;

const outerLineColor = styles.visOuterLineColor;
const outerLineWidth = styles.visOuterLineWidth;
const backgroundFill = styles.visBackground;

const labelColor = styles.visLabelColor;
const labelFont = styles.labelFont;

function defaultFormat(val) {
  return val;
}

const LineChart = ({
  data,
  height,
  width,
  horizontalGuides: numberOfHorizontalGuides,
  precision,
  xFormat = (x) => defaultFormat(x),
  yFormat = (y) => defaultFormat(y),
}) => {
  const FONT_SIZE = width / 33.333;
  const maximumXFromData = Math.max(...data.map((e) => e.x));
  const maximumYFromData = Math.max(...data.map((e) => e.y));

  const digits =
    parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;

  const padding = (FONT_SIZE + digits) * 3;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const points = data.map((element) => {
    const x = (element.x / maximumXFromData) * chartWidth + padding;
    const y =
      chartHeight -
      (element.y / maximumYFromData) * chartHeight +
      padding;
    return { x, y };
  });

  const pointsJoined = points
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  console.log(pointsJoined);

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
      coords={`${padding},${height - padding} ${width - padding},${
        height - padding
      }`}
    />
  );

  const YAxis = () => (
    <Axis
      coords={`${padding},${padding} ${padding},${height - padding}`}
    />
  );

  const VerticalGuides = () => {
    const guideCount = data.length - 1;

    const startY = padding;
    const endY = height - padding;

    return new Array(guideCount).fill(0).map((_, index) => {
      const ratio = (index + 1) / guideCount;

      const xCoordinate = padding + ratio * (width - padding * 2);

      return (
        <Fragment key={index}>
          <polyline
            fill="none"
            stroke={innerLineColor}
            strokeWidth={innerLineWidth}
            points={`${xCoordinate},${startY} ${xCoordinate},${endY}`}
          />
        </Fragment>
      );
    });
  };

  const HorizontalGuides = () => {
    const startX = padding;
    const endX = width - padding;

    return new Array(numberOfHorizontalGuides).fill(0).map((_, index) => {
      const ratio = (index + 1) / numberOfHorizontalGuides;

      const yCoordinate = chartHeight - chartHeight * ratio + padding;

      return (
        <Fragment key={index}>
          <polyline
            fill="none"
            stroke={innerLineColor}
            strokeWidth={innerLineWidth}
            points={`${startX},${yCoordinate} ${endX},${yCoordinate}`}
          />
        </Fragment>
      );
    });
  };

  const LabelsXAxis = () => {
    const y = height - padding + FONT_SIZE * 2;

    return data.map((element, index) => {
      const x =
        (element.x / maximumXFromData) * chartWidth +
        padding / 2 -
        FONT_SIZE / 2;
      return (
        <text
          key={index}
          x={x}
          y={y}
          style={{
            fill: labelColor,
            fontSize: FONT_SIZE,
            fontFamily: labelFont,
          }}
        >
          {element.label}
        </text>
      );
    });
  };

  const LabelsYAxis = () => {
    const PARTS = numberOfHorizontalGuides;
    return new Array(PARTS + 1).fill(0).map((_, index) => {
      const x = FONT_SIZE;
      const ratio = index / numberOfHorizontalGuides;

      const yCoordinate =
        chartHeight - chartHeight * ratio + padding + FONT_SIZE / 2;
      return (
        <text
          key={index}
          x={x}
          y={yCoordinate}
          style={{
            fill: labelColor,
            fontSize: FONT_SIZE,
            fontFamily: labelFont,
          }}
        >
          {toPercentage(
            parseFloat(maximumYFromData * (index / PARTS)).toFixed(
              precision
            )
          )}
        </text>
      );
    });
  };

  const Dots = () =>
    points.map((dot) => (
      <circle cx={dot.x} cy={dot.y} r="5" fill={spring} />
    ));
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ marginTop: -(padding / 2) }}
    >
      <XAxis />
      <LabelsXAxis />
      <YAxis />
      <LabelsYAxis />
      <VerticalGuides />
      <HorizontalGuides />
      <Dots />

      <polyline
        fill="none"
        stroke={spring}
        strokeWidth={outerLineWidth}
        points={pointsJoined}
      />
    </svg>
  );
};

LineChart.defaultProps = {
  height: 225,
  width: 500,
  horizontalGuides: 2,
  verticalGuides: true,
  precision: 2,
};

// LineChart.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.number,
//       label: PropTypes.string,
//     })
//   ).isRequired,
//   height: PropTypes.number,
//   width: PropTypes.number,
//   horizontalGuides: PropTypes.number,
//   verticalGuides: PropTypes.number,
//   precision: PropTypes.number,
// };

export default LineChart;
