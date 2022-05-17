import { useEffect, useState } from "react";

import marts from "/data/marts.json";
import tables from "/data/tables.json";

import DefaultLayout from "/components/DefaultLayout";
import Button from "/components/Button";
import ButtonGroup from "/components/ButtonGroup";
import Select from "/components/Select";

import DataMartList from "../../components/DataMartList";
import DataLakeTable from "../../components/DataLakeTable";

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
        <DataLakeTable data={tables} />
      ) : (
        <DataMartList data={marts} />
      )}
    </DefaultLayout>
  );
}
