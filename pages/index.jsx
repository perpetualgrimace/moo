import DefaultLayout from "/components/DefaultLayout";
import ToolsSection from "/components/ToolsSection";
import ToolsItem from "/components/ToolsItem";

export default function Tools() {
  return (
    <DefaultLayout title="Welcome" slug="tools">
      <ToolsSection sectionTitle="Manage data">
        <ToolsItem
          href="#"
          outbound={true}
          imgSrc="jupyterhub-logo"
          altText="Jupyter Hub"
        />
      </ToolsSection>

      <ToolsSection sectionTitle="Browse assets">
        <ToolsItem
          href="/assets/servers"
          imgSrc="business-intelligence-icon"
          label="Servers"
          altText=""
        />
        <ToolsItem
          href="/assets/data"
          imgSrc="data-viewer-icon"
          label="Data"
          altText=""
        />
        <ToolsItem
          href="/assets/engines"
          imgSrc="prediction-engines-icon"
          label="Engines"
          altText=""
        />
        <ToolsItem
          href="/assets/engagements"
          imgSrc="graph-view-icon"
          label="Engagements"
          altText=""
        />
      </ToolsSection>
    </DefaultLayout>
  );
}
