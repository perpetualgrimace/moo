export default function ToolsSection(props) {
  const {sectionTitle, children} = props;
  return (
    <section className="tools-section">
      <h2 className="tools-heading">{ sectionTitle }</h2>
      <ul className="tools-list">
        {children}
      </ul>
    </section>
  )
}