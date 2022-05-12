import AccordionHeader from "/components/AccordionHeader";

export default function AccordionPanel(props) {
  const { isOpen, onClick, headingLabel, children } = props;

  return (
    <div className="accordion-panel">
      <AccordionHeader onClick={onClick} isOpen={isOpen}>
        {headingLabel || "missing `headingLabel` prop in AccordionPanel"}
      </AccordionHeader>
      <div className="accordion-panel-inner">{children}</div>
    </div>
  );
}
