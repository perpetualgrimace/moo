import { useState } from "react";

import engagements from "/data/engagements.json";

import DefaultLayout from "/components/DefaultLayout";
import Button from "/components/Button";
import Select from "/components/Select";

import EngagementsList from "../../components/EngagementsList";

export default function Engagements() {
  const sortOptions = [
    { value: "name", label: "Name" },
    { value: "eta", label: "ETA" },
    { value: "progress", label: "progress" },
  ];

  const [sortBy, setSortBy] = useState("one");

  function handleSortByChange(event) {
    setSortBy(event.target.value);
  }

  return (
    <DefaultLayout title="Engagements" slug="engagements">
      <div className="controls u-mb-lg">
        <Select
          label="Sort by"
          options={sortOptions}
          selection={sortBy}
          onChange={handleSortByChange}
          inline
        />
      </div>
      <EngagementsList data={engagements} sortKey={sortBy} />
    </DefaultLayout>
  );
}
