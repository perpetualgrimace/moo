import ChevronDownIcon from "/components/icons/ChevronDownIcon";

export default function AccordionHeader(props) {
  const { children, meta, onClick, isOpen } = props;

  return (
    <button
      className="accordion-header button"
      onClick={onClick}
      aria-pressed={isOpen}
    >
      <div className="accordion-header-icon">
        <ChevronDownIcon />
      </div>

      <h2 className="accordion-header-title u-subhead u-font-md u-mb-0">
        {children}
        <span className="u-visually-hidden">
          {" "}
          ({isOpen ? "hide" : "show"} details)
        </span>
      </h2>

      {meta &&
        meta.map((stat) => (
          <dl
            className="accordion-header-meta u-font-sm"
            key={`${children}-${stat.label}-stat`}
          >
            <dt className="accordion-header-meta-label">{stat.label}</dt>
            <dd className="accordion-header-meta-value">{stat.value}</dd>
          </dl>
        ))}
    </button>
  );
}
