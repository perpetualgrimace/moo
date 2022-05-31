import { useState } from "react";
import moment from "moment";

import { dateFormat } from "/consts.js";

import sortArrayByObjKey from "/helpers/sortArrayByObjKey";
import toPercentage from "/helpers/toPercentage";

import Accordion from "/components/Accordion";
import AccordionPanel from "/components/AccordionPanel";
import AccordionPanelColumn from "/components/AccordionPanelColumn";

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
              value: moment(engine.created).format(dateFormat),
            },
            {
              label: "Predictiveness",
              value: toPercentage(engine.predictiveness),
            },
          ]}
        >
          <AccordionPanelColumn>
            <h3 className="u-font-md">Description</h3>
            <p className="u-font-xs">{engine.description}</p>
          </AccordionPanelColumn>
        </AccordionPanel>
      ))}
    </Accordion>
  );
}
