import { useState } from "react";
import Link from "next/link";

import uppercaseFirst from "/functions/uppercaseFirst";
import sortArrayByObjKey from "functions/sortArrayByObjKey";

import Stat from "/components/Stat";
import Accordion from "/components/Accordion";
import AccordionPanel from "/components/AccordionPanel";

export default function DataMartList(props) {
  const metaKeys = ["source"];

  const qualityKeys = [
    "completeness",
    "uniqueness",
    "timeliness",
    "validity",
    "accuracy",
    "consistency",
  ];

  const { data, sortKey } = props;
  const sortedData = sortArrayByObjKey(data, sortKey);

  const [openPanelId, setOpenPanelId] = useState(false);

  return (
    <Accordion>
      {sortedData.map((mart) => (
        <AccordionPanel
          key={mart.id}
          headingLabel={mart.name}
          isOpen={openPanelId === mart.id}
          onClick={() =>
            setOpenPanelId(mart.id !== openPanelId ? mart.id : false)
          }
          meta={[
            {
              label: "Created",
              value: mart.created,
            },
            {
              label: "Quality",
              value: mart.quality.overall,
            },
          ]}
        >
          <div className="accordion-panel-column">
            <h3 className="u-font-md">Description</h3>
            <p className="u-font-xs">{mart.description}</p>
          </div>

          <div className="accordion-panel-column">
            <h3 className="u-font-md">Metadata</h3>

            {metaKeys.map((meta) => (
              <Stat
                key={`${mart.id}-${meta}`}
                label={uppercaseFirst(meta)}
                value={mart[[meta]]}
              />
            ))}
          </div>

          <div className="accordion-panel-column">
            <h3 className="u-font-md">Tables included</h3>
            <ul>
              {mart.tables.map((table) => (
                <li key={table.id}>
                  <Link href={`/assets/data/table/${table.id}`}>
                    <a>{table.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="accordion-panel-column">
            <h3 className="u-font-md">Quality breakdown</h3>
            {qualityKeys.map((quality) => (
              <Stat
                key={`${mart.id}-${quality}`}
                label={uppercaseFirst(quality)}
                value={mart.quality[[quality]]}
              />
            ))}
          </div>
        </AccordionPanel>
      ))}
    </Accordion>
  );
}
