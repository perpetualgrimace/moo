import DefaultLayout from "/components/DefaultLayout";
import ToolsSection from "/components/ToolsSection";
import ToolsItem from "/components/ToolsItem";

export default function Manage() {
  return (
    <DefaultLayout title="Manage data" slug="manage">
      <ToolsSection>
        <ToolsItem
          href="/manage/jupyterhub"
          imgSrc="jupyterhub-logo"
          altText="Jupyter Hub"
          outbound="true"
        />
        <ToolsItem
          href="/manage/data-integration"
          imgSrc="data-integration-icon"
          label="Data integration"
          altText=""
          outbound="true"
        />
        <ToolsItem
          href="/manage/business-intelligence"
          imgSrc="visualizations-icon"
          label="Business intelligence"
          altText=""
          outbound="true"
        />
      </ToolsSection>
    </DefaultLayout>
  );
}
