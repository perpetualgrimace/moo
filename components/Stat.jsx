export default function Stat(props) {
  const { label, value, fontSize } = props;

  return (
    <dl className={`stat u-font-${fontSize || "sm"}`}>
      <dt className="stat-label">{label}</dt>
      <dd className="stat-value">{value}</dd>
    </dl>
  );
}
