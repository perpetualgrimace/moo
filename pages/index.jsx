import DefaultLayout from '/components/DefaultLayout';
import ToolsSection from '/components/ToolsSection';
import ToolsItem from '/components/ToolsItem';

export default function Home() {
  return (
    <DefaultLayout
      title="Data Science Toolkit"
      slug="tools"
    >
      <ToolsSection sectionTitle="Data science">
        <ToolsItem
          href="#"
          outbound={true}
          imgSrc="jupyterhub-logo"
          altText="Jupyter Hub"
        />
      </ToolsSection>

      <ToolsSection sectionTitle="Data analysis">
        <ToolsItem
          href="#"
          outbound={true}
          imgSrc="business-intelligence-icon"
          label="Business intelligence view"
          altText=""
        />
        <ToolsItem
          href="#"
          outbound={true}
          imgSrc="graph-view-icon"
          label="Graph view"
          altText=""
        />
      </ToolsSection>

      <ToolsSection sectionTitle={<>
        Browse & manage <span className="u-visually-hidden">data</span>
      </>}>
        <ToolsItem
          href="#"
          outbound={true}
          imgSrc="data-viewer-icon"
          label="Data viewer"
          altText=""
        />
        <ToolsItem
          href="#"
          outbound={true}
          imgSrc="prediction-engines-icon"
          label="Engines"
          altText=""
        />
      </ToolsSection>
    </DefaultLayout>
  )
}
