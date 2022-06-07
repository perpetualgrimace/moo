import slugify from "/helpers/slugify";

import tables from "/data/tables.json";

export const getStaticProps = async ({ params }) => {
  const currTable = tables.filter(
    (table) => slugify(table.id) === params.id
  )[0];
  return {
    props: {
      table: currTable,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = tables.map((table) => ({
    params: { id: slugify(table.id) },
  }));
  return { paths, fallback: false };
};

export default ({ table }) => (
  <div>
    {console.log(table)}
    <h1>{table.id}</h1>
  </div>
);
