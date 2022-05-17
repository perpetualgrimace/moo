import Link from "next/link";

export default function DataLakeTable(props) {
  const { data } = props;

  return (
    <table className="data-lake-table">
      <thead className="data-lake-thead">
        <tr className="data-lake-tr">
          <th className="data-lake-th">Name</th>
          <th className="data-lake-th">Created</th>
          <th className="data-lake-th">Size</th>
          <th className="data-lake-th">Data mart</th>
        </tr>
      </thead>
      <tbody>
        {data.map((table) => (
          <tr className="data-lake-tr" key={table.id}>
            <td className="data-lake-td">
              <Link href={`/assets/data/table/${table.id}`}>
                <a className="data-lake-link">{table.name}</a>
              </Link>
            </td>
            <td className="data-lake-td">{table.created}</td>
            <td className="data-lake-td">{table.size}</td>
            <td className="data-lake-td">{table.mart}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
