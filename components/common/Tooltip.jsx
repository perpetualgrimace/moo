function generateClassList(props) {
  const { className } = props;

  let classList = "tooltip";

  if (className) classList += ` ${className}`;

  return classList;
}

export default function Tooltip(props) {
  const { children, label } = props;

  const filteredProps = {
    ...props,
    className: generateClassList(props),
  };

  return (
    <div {...filteredProps}>
      {label && <h2 className="tooltip-label u-font-lg">{label}</h2>}
      {children}
    </div>
  );
}
