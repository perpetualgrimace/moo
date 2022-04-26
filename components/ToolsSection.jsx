export default function ToolsSection(props) {
  const {sectionTitle, children} = props;
  return (
    <section className="tools-section u-mb-lg">
      <h2 className="tools-heading">{ sectionTitle }</h2>
      <ul className="tools-list">
        {children}
      </ul>
    </section>
  )
}