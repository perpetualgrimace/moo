import DefaultLayout from "/components/DefaultLayout";
import ServerTile from "/components/ServerTile";

export default function Servers() {
  return (
    <DefaultLayout title="Servers" slug="servers">
      <h2 className="u-mt-0">Server flow</h2>

      <ServerTile label="Muthalath" />
    </DefaultLayout>
  );
}
