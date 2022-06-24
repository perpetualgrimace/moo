export default function ProgressPill(props) {
  const { children } = props;

  return (
    <span className="progress-pill">
      <span
        className="progress-pill-bar u-spring-darker-bg"
        style={{ width: children }}
      />
      <span className="progress-pill-text">{children}</span>
    </span>
  );
}
