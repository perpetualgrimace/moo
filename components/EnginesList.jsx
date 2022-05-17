import { useState } from "react";

import sortArrayByObjKey from "functions/sortArrayByObjKey";
import toPercentage from "functions/toPercentage";

import Accordion from "/components/Accordion";
import AccordionPanel from "/components/AccordionPanel";

export default function EnginesList(props) {
  const { data, sortKey } = props;
  const sortedData = sortArrayByObjKey(data, sortKey);

  const [openPanelId, setOpenPanelId] = useState(false);

  return (
    <Accordion>
      {sortedData.map((engine) => (
        <AccordionPanel
          key={engine.id}
          headingLabel={engine.name}
          isOpen={openPanelId === engine.id}
          onClick={() =>
            setOpenPanelId(engine.id !== openPanelId ? engine.id : false)
          }
          meta={[
            {
              label: "Created",
              value: engine.created,
            },
            {
              label: "Predictiveness",
              value: toPercentage(engine.predictiveness),
            },
          ]}
        >
          <div className="accordion-panel-column">
            <h3 className="u-font-md">Description</h3>
            <p className="u-font-xs">{engine.description}</p>
          </div>
        </AccordionPanel>
      ))}
    </Accordion>
  );
}
