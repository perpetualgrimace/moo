import { useEffect, useState } from "react";
import Link from "next/link";

import marts from "/data/marts.json";
import tables from "/data/tables.json";

import DefaultLayout from "/components/DefaultLayout";
import Button from "/components/Button";
import ButtonGroup from "/components/ButtonGroup";
import Select from "/components/Select";
import Accordion from "/components/Accordion";
import AccordionPanel from "/components/AccordionPanel";

export default function Servers() {
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
      <ButtonGroup toggle label="hi">
        <Button
          aria-pressed={view === "lake"}
          onClick={() => setView("lake")}
        >
          Data lake
        </Button>
        <Button
          aria-pressed={view === "marts"}
          onClick={() => setView("marts")}
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
              onClick={() => setOpenPanelId(mart.id)}
            >
              <h3 className="u-font-sm">description</h3>
              {mart.description}

              <h3 className="u-font-sm">tables included</h3>
              <ul>
                {mart.tables.map((table) => (
                  <li key={table.id}>
                    <Link href={`/assets/data/table/${table.id}`}>
                      <a>{table.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionPanel>
          ))}
        </Accordion>
      )}
    </DefaultLayout>
  );
}
