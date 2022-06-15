const salmon = "#FC8793";
const sun = "#FFCF5C";
const spring = "#3DFF80";

const innerLineColor = "rgba(255, 255, 255, 0.333)";
const innerLineWidth = "0.5px";

const backgroundFill = "rgba(42, 51, 60, 0.4)";
const outerLineColor = "#B8BCC7";

function getPercentage(val) {
  return (val * 20) / 100;
}

// horizontal helpers
const horizontalHalf = 36.5;

function calculateLeft(percentage) {
  const x = horizontalHalf - percentage * horizontalHalf;
  const xOffset = x + 5 * percentage;
  return xOffset;
}
function calculateRight(percentage) {
  const x = horizontalHalf * percentage + horizontalHalf;
  const xOffset = x - 4 * percentage;
  return xOffset;
}

// vertical helpers
const verticalUpper = 19;
const verticalHalf = 37;

function calculateTop(percentage) {
  return verticalHalf - percentage * verticalHalf;
}
function calculateUpper(percentage) {
  return verticalHalf - percentage * verticalUpper;
}
function calculateLower(percentage) {
  return verticalHalf + percentage * verticalUpper;
}
function calculateBottom(percentage) {
  return verticalHalf + percentage * verticalHalf;
}

// coordinate helpers
function getCoord1(percentage) {
  return `${verticalHalf}, ${calculateTop(percentage)}`; // 37, 1
}
function getCoord2(percentage) {
  return `${calculateRight(percentage)}, ${calculateUpper(percentage)}`; // 68, 19
}
function getCoord3(percentage) {
  return `${calculateRight(percentage)}, ${calculateLower(percentage)}`; // 68, 55
}
function getCoord4(percentage) {
  return `${verticalHalf}, ${calculateBottom(percentage)}`; // 36.5, 73
}
function getCoord5(percentage) {
  return `${calculateLeft(percentage)}, ${calculateLower(percentage)}`; // 5, 55
}
function getCoord6(percentage) {
  return `${calculateLeft(percentage)}, ${calculateUpper(percentage)}`; // 5, 55
}

export default function RadarChart(props) {
  const { keys, values, id } = props;

  const coords = `
    ${getCoord1(getPercentage(values[keys[0]]))}
    ${getCoord2(getPercentage(values[keys[1]]))}
    ${getCoord3(getPercentage(values[keys[2]]))}
    ${getCoord4(getPercentage(values[keys[3]]))}
    ${getCoord5(getPercentage(values[keys[4]]))}
    ${getCoord6(getPercentage(values[keys[5]]))}
  `;

  return (
    <div className="radar-chart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="90"
        height="98"
        viewBox="0 0 90 98"
      >
        <defs>
          <radialGradient id={`${id}-prism-gradient`}>
            <stop offset="0%" stopColor={salmon} />
            <stop offset="33%" stopColor={sun} />
            <stop offset="100%" stopColor={spring} />
          </radialGradient>
        </defs>

        <g fill="none" fillRule="evenodd" transform="translate(8 11)">
          <polygon points={coords} fill={`url(#${id}-prism-gradient)`} />

          <path
            fill={backgroundFill}
            stroke={outerLineColor}
            strokeLinejoin="square"
            d="M37 .577 68.543 18.79V55.21L37 73.423 5.457 55.21V18.79L37 .577Z"
          />

          <path
            stroke={innerLineColor}
            strokeWidth={innerLineWidth}
            d="m37 8.289 24.865 14.355v28.712L37 65.71 12.135 51.356V22.644L37 8.29Z"
          />
          <path
            stroke={innerLineColor}
            strokeWidth={innerLineWidth}
            d="m37 15.289 18.803 10.855v21.712L37 58.71 18.197 47.856V26.144L37 15.29Z"
          />
          <path
            stroke={innerLineColor}
            strokeWidth={innerLineWidth}
            d="m37 22.289 12.74 7.355v14.712L37 51.71l-12.74-7.355V29.644L37 22.29Z"
          />
          <path
            stroke={innerLineColor}
            strokeWidth={innerLineWidth}
            d="m37 29.289 6.678 3.855v7.712L37 44.71l-6.678-3.855v-7.712L37 29.29Z"
          />
        </g>
      </svg>
    </div>
  );
}
