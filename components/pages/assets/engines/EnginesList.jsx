import { useState } from "react";
import moment from "moment";

import { dateFormat } from "/consts";

import sortArrayByObjKey from "/helpers/sortArrayByObjKey";
import toPercentage from "/helpers/toPercentage";

import Accordion from "/components/common/Accordion";
import AccordionPanel from "/components/common/Accordion/AccordionPanel";
import AccordionPanelColumn from "/components/common/Accordion/AccordionPanelColumn";

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
          <AccordionPanelColumn title="Description">
            <p className="u-font-xs">{engine.description}</p>
          </AccordionPanelColumn>
        </AccordionPanel>
      ))}
    </Accordion>
  );
}
