import { useState } from "react";

import engagements from "/data/engagements.json";

import DefaultLayout from "/components/layout/DefaultLayout";
import Select from "/components/controls/Select";
import EngagementsList from "/components/pages/assets/engagements/EngagementsList";

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
    <DefaultLayout
      title="Engagements"
      slug="engagements"
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
      <EngagementsList data={engagements} sortKey={sortBy} />
    </DefaultLayout>
  );
}
