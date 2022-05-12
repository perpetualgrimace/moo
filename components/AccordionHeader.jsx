export default function AccordionHeader(props) {
  const { children, onClick, isOpen } = props;

  return (
    <button
      className="accordion-header"
      onClick={onClick}
      aria-pressed={isOpen}
    >
      {children}
    </button>
  );
}
