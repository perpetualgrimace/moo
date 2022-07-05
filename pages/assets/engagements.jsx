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
  const filterOptions = [
    { value: "all", label: "All engagements" },
    { value: "incomplete", label: "In progress" },
    { value: "complete", label: "Completed" },
    { value: "not yet started", label: "Not yet started" },
  ];

  const [sortBy, setSortBy] = useState("one");
  const [filterBy, setFilterBy] = useState("all");

  function handleSortByChange(event) {
    setSortBy(event.target.value);
  }
  function handleFilterByChange(event) {
    setFilterBy(event.target.value);
  }

  return (
    <DefaultLayout
      title="Engagements"
      slug="engagements"
      controls={[
        <Select
          label="Sort by"
          options={sortOptions}
          selection={sortBy}
          onChange={handleSortByChange}
          inline
        />,
        <Select
          label="View"
          options={filterOptions}
          selection={filterBy}
          onChange={handleFilterByChange}
          inline
        />,
      ]}
    >
      <EngagementsList
        data={engagements}
        sortKey={sortBy}
        filterKey={filterBy}
      />
    </DefaultLayout>
  );
}
