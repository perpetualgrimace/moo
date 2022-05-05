import servers from "/consts/servers.json";

import DefaultLayout from "/components/DefaultLayout";
import ServerTile from "/components/ServerTile";

export default function Servers() {
  const { muthalath, mudavar, muraba } = servers;

  return (
    <DefaultLayout title="Servers" slug="servers">
      <h2 className="u-mt-0">Server flow</h2>

      <div className="servers-grid">
        <ServerTile
          label="Muthalath"
          remote={muthalath.remote}
          servers={muthalath.servers}
        />
        <ServerTile
          label="Mudavar"
          remote={mudavar.remote}
          servers={mudavar.servers}
        />
        <ServerTile
          label="Muraba"
          remote={muraba.remote}
          servers={muraba.servers}
        />
      </div>
    </DefaultLayout>
  );
}
