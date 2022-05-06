import { useState } from "react";

import servers from "/consts/servers.json";

import constructSummaryStatsObject from "/functions/constructSummaryStatsObject";

import DefaultLayout from "/components/DefaultLayout";
import ServerTile from "/components/ServerTile";
import ServerCard from "/components/ServerCard";

export default function Servers() {
  const { Muthalath, Mudavar, Muraba } = servers;

  const [currServer, setCurrServer] = useState("Muthalath");

  const summary = constructSummaryStatsObject(
    servers[[currServer]].servers
  );

  return (
    <DefaultLayout title="Servers" slug="servers">
      <h2 className="u-mt-0">Server flow</h2>

      <div className="servers-grid">
        <ServerTile
          label="Muthalath"
          remote={Muthalath.remote}
          servers={Muthalath.servers}
          isSelected={currServer === "Muthalath"}
          onClick={() => setCurrServer("Muthalath")}
        />
        <ServerTile
          label="Mudavar"
          remote={Mudavar.remote}
          servers={Mudavar.servers}
          isSelected={currServer === "Mudavar"}
          onClick={() => setCurrServer("Mudavar")}
        />
        <ServerTile
          label="Muraba"
          remote={Muraba.remote}
          servers={Muraba.servers}
          isSelected={currServer === "Muraba"}
          onClick={() => setCurrServer("Muraba")}
        />
      </div>

      <div className="server-details tooltip">
        <ServerCard
          label={currServer}
          remote={servers[[currServer]].remote}
          servers={servers[[currServer]].servers}
          summary={summary}
        />
      </div>
    </DefaultLayout>
  );
}
