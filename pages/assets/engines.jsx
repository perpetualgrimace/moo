import { useState } from "react";

import engines from "/data/engines.json";

import DefaultLayout from "/components/layout/DefaultLayout";
import Select from "/components/controls/Select";
import EnginesList from "/components/pages/assets/engines/EnginesList";

export default function Engines() {
  const sortOptions = [
    { value: "name", label: "Name" },
    { value: "created", label: "Date created" },
    { value: "predictiveness", label: "Predictiveness" },
  ];

  const [sortBy, setSortBy] = useState("one");

  function handleSortByChange(event) {
    setSortBy(event.target.value);
  }

  return (
    <DefaultLayout
      title="Engines"
      slug="engines"
      controls={
        <Select
          label="Sort by"
          options={sortOptions}
          selection={sortBy}
          onChange={handleSortByChange}
          inline
        />
      }
    >
      <EnginesList data={engines} sortKey={sortBy} />
    </DefaultLayout>
  );
}
