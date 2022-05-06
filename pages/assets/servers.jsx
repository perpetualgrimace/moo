import { useState } from "react";

import servers from "/consts/servers.json";

import DefaultLayout from "/components/DefaultLayout";
import ServerTile from "/components/ServerTile";

export default function Servers() {
  const { muthalath, mudavar, muraba } = servers;

  const [currServer, setCurrServer] = useState("Mudavar");

  return (
    <DefaultLayout title="Servers" slug="servers">
      <h2 className="u-mt-0">Server flow</h2>

      <div className="servers-grid">
        <ServerTile
          label="Muthalath"
          remote={muthalath.remote}
          servers={muthalath.servers}
          isSelected={currServer === "Muthalath"}
          onClick={() => setCurrServer("Muthalath")}
        />
        <ServerTile
          label="Mudavar"
          remote={mudavar.remote}
          servers={mudavar.servers}
          isSelected={currServer === "Mudavar"}
          onClick={() => setCurrServer("Mudavar")}
        />
        <ServerTile
          label="Muraba"
          remote={muraba.remote}
          servers={muraba.servers}
          isSelected={currServer === "Muraba"}
          onClick={() => setCurrServer("Muraba")}
        />
      </div>
    </DefaultLayout>
  );
}
