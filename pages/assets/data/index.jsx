import { useState } from "react";

import marts from "/data/marts.json";
import tables from "/data/tables.json";

import DefaultLayout from "/components/layout/DefaultLayout";
import Button from "/components/controls/Button";
import ButtonGroup from "/components/controls/ButtonGroup";
import Select from "/components/controls/Select";

import DataMartList from "/components/pages/assets/data/DataMartList";
import DataLakeTable from "/components/pages/assets/data/DataLakeTable";

export default function Data() {
  const lakeSortOptions = [
    { value: "name", label: "Name" },
    { value: "created", label: "Date created" },
    { value: "size", label: "Size" },
  ];
  const martSortOptions = [
    { value: "name", label: "Name" },
    { value: "created", label: "Date created" },
    { value: "quality", label: "Quality" },
  ];

  const [view, setView] = useState("lake");
  const [sortBy, setSortBy] = useState("name");

  const options = view === "lake" ? lakeSortOptions : martSortOptions;

  function handleSortByChange(event) {
    setSortBy(event.target.value);
  }

  return (
    <DefaultLayout
      title="Data"
      slug="data"
      controls={[
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
        </ButtonGroup>,

        <Select
          label="Sort by"
          options={options}
          selection={sortBy}
          onChange={handleSortByChange}
          inline
        />,
      ]}
    >
      {view === "lake" ? (
        <DataLakeTable data={tables} sortKey={sortBy} />
      ) : (
        <DataMartList data={marts} sortKey={sortBy} />
      )}
    </DefaultLayout>
  );
}
