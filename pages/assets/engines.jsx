import { useState } from "react";

import engines from "/data/engines.json";

import DefaultLayout from "/components/DefaultLayout";
import Button from "/components/Button";
import Select from "/components/Select";

import EnginesList from "../../components/EnginesList";

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
    <DefaultLayout title="Engines" slug="engines">
      <div className="controls u-mb-lg">
        <Select
          label="Sort by"
          options={sortOptions}
          selection={sortBy}
          onChange={handleSortByChange}
          inline
        />
      </div>
      <EnginesList data={engines} sortKey={sortBy} />
    </DefaultLayout>
  );
}
