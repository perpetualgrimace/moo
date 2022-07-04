import IframeLayout from "/components/layout/IframeLayout";

export default function Jupyterhub() {
  return (
    <IframeLayout
      title="Manage data"
      slug="manage"
      src="http://averroes.andal.us:8003/"
      loading="lazy"
    />
  );
}
