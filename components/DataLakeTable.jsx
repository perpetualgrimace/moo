import Link from "next/link";
import moment from "moment";

import { dateFormat } from "/consts";

import slugify from "/helpers/slugify";
import sortArrayByObjKey from "/helpers/sortArrayByObjKey";

export default function DataLakeTable(props) {
  const { data, sortKey } = props;

  const sortedData = sortArrayByObjKey(data, sortKey);

  return (
    <table className="data-lake-table table">
      <thead className="data-lake-thead table-thead">
        <tr className="data-lake-tr table-tr">
          <th className="data-lake-th table-th">Name</th>
          <th className="data-lake-th table-th">Created</th>
          <th className="data-lake-th table-th">Size</th>
          <th className="data-lake-th table-th">Data mart</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((table) => (
          <tr className="data-lake-tr table-tr" key={table.id}>
            <td className="data-lake-td table-td">
              <Link href={`/assets/data/${slugify(table.id)}`}>
                <a className="data-lake-link table-table-link">
                  {table.name}
                </a>
              </Link>
            </td>
            <td className="data-lake-td table-td">
              {moment(table.created).format(dateFormat)}
            </td>
            <td className="data-lake-td table-td">{table.size}</td>
            <td className="data-lake-td table-td">{table.mart}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
