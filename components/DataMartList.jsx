import { useState } from "react";
import Link from "next/link";
import moment from "moment";

import { dateFormat } from "/consts";

import uppercaseFirst from "/helpers/uppercaseFirst";
import slugify from "/helpers/slugify";
import getTheme from "/helpers/getTheme";
import sortArrayByObjKey from "/helpers/sortArrayByObjKey";

import Stat from "/components/Stat";
import Accordion from "/components/Accordion";
import AccordionPanel from "/components/AccordionPanel";
import AccordionPanelColumn from "/components/AccordionPanelColumn";
import RadarChart from "/components/vis/RadarChart";

function isPanelOpen(openId, currentId) {
  if (openId === currentId) return true;
  return false;
}

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
          isOpen={isPanelOpen(openPanelId, mart.id)}
          onClick={() =>
            setOpenPanelId(mart.id !== openPanelId ? mart.id : false)
          }
          meta={[
            {
              label: "Created",
              value: moment(mart.created).format(dateFormat),
            },
            {
              label: "Quality",
              value: mart.quality.overall,
              theme: getTheme(
                mart.quality.overall,
                isPanelOpen(openPanelId, mart.id)
              ),
            },
          ]}
        >
          <AccordionPanelColumn>
            <h3 className="u-font-md">Description</h3>
            <p className="u-font-xs">{mart.description}</p>
          </AccordionPanelColumn>

          <AccordionPanelColumn>
            <h3 className="u-font-md">Metadata</h3>

            {metaKeys.map((meta) => (
              <Stat
                key={`${mart.id}-${meta}`}
                label={uppercaseFirst(meta)}
                value={mart[[meta]]}
              />
            ))}
          </AccordionPanelColumn>

          {/* <AccordionPanelColumn>
            <h3 className="u-font-md">Tables included</h3>
            <ul>
              {mart.tables.map((table) => (
                <li key={table.id}>
                  <Link href={`/assets/data/${slugify(table.id)}`}>
                    <a>{table.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionPanelColumn> */}

          <AccordionPanelColumn>
            <h3 className="u-font-md">Quality breakdown</h3>

            <RadarChart
              keys={qualityKeys}
              values={mart.quality}
              id={mart.id}
            >
              {qualityKeys.map((quality) => (
                <Stat
                  key={`${mart.id}-${quality}`}
                  label={uppercaseFirst(quality)}
                  value={mart.quality[[quality]]}
                  theme={getTheme(mart.quality[[quality]])}
                />
              ))}
            </RadarChart>
          </AccordionPanelColumn>
        </AccordionPanel>
      ))}
    </Accordion>
  );
}
