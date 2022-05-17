import Link from "next/link";

export default function DataLakeTable(props) {
  const { data } = props;

  return (
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
        {data.map((table) => (
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
  );
}
