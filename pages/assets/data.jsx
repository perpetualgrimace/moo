import { useEffect, useState } from "react";
import Link from "next/link";

import marts from "/data/marts.json";
import tables from "/data/tables.json";

import uppercaseFirst from "/functions/uppercaseFirst";

import DefaultLayout from "/components/DefaultLayout";
import Button from "/components/Button";
import ButtonGroup from "/components/ButtonGroup";
import Select from "/components/Select";
import Stat from "/components/Stat";
import Accordion from "/components/Accordion";
import AccordionPanel from "/components/AccordionPanel";

export default function Servers() {
  const metaKeys = ["source"];

  const qualityKeys = [
    "completeness",
    "uniqueness",
    "timeliness",
    "validity",
    "accuracy",
    "consistency",
  ];

  const [view, setView] = useState("lake");

  const [sortBy, setSortBy] = useState("one");
  const options = [
    { value: "name", label: "Name" },
    { value: "creationDate", label: "Date created" },
    { value: "quality", label: "Quality" },
  ];

  function handleSortByChange(event) {
    setSortBy(event.target.value);
  }

  useEffect(() => {
    console.log("Eventually sorting by: ", sortBy);
  }, [sortBy]);

  const [openPanelId, setOpenPanelId] = useState(false);

  return (
    <DefaultLayout title="Data" slug="data">
      <div className="controls u-mb-lg">
        <ButtonGroup toggle label="select view">
          <Button
            aria-pressed={view === "lake"}
            onClick={() => setView("lake")}
            fontSize="md"
          >
            Data lake
          </Button>
          <Button
            aria-pressed={view === "marts"}
            onClick={() => setView("marts")}
            fontSize="md"
          >
            Data marts
          </Button>
        </ButtonGroup>

        <Select
          label="Sort by"
          options={options}
          selection={sortBy}
          onChange={handleSortByChange}
          inline
        />
      </div>

      {view === "lake" ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Created</th>
              <th>Size</th>
              <th>Data mart</th>
            </tr>
          </thead>
          <tbody>
            {tables.map((table) => (
              <tr key={table.id}>
                <td>
                  <Link href={`/assets/data/table/${table.id}`}>
                    <a>{table.name}</a>
                  </Link>
                </td>
                <td>{table.created}</td>
                <td>{table.size}</td>
                <td>{table.mart}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Accordion>
          {marts.map((mart) => (
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
      )}
    </DefaultLayout>
  );
}
