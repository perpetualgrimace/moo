import uppercaseFirst from "/functions/uppercaseFirst";
import formatTime from "/functions/formatTime";
import gbToTb from "/functions/gbToTb";
import toPercentage from "/functions/toPercentage";

import StatusIcon from "/components/StatusIcon";

export default function ServerStatTable(props) {
  const {
    serverCount,
    status,
    uptime,
    utilization,
    diskUsage,
    capacity,
    ram,
  } = props.server;

  return (
    <table className="server-card-table u-font-md">
      {serverCount ? (
        <tr>
          <th>Servers:</th>
          <td>{serverCount}</td>
        </tr>
      ) : (
        <tr>
          <th>Status:</th>
          <td>
            {uppercaseFirst(status)} <StatusIcon status={status} />
          </td>
        </tr>
      )}

      <tr>
        <th>Uptime:</th>
        <td>{formatTime(uptime)}</td>
      </tr>

      <tr>
        <th>Utilization:</th>
        <td>{toPercentage(utilization)}</td>
      </tr>

      <tr>
        <th>Capacity:</th>
        <td>
          {gbToTb(diskUsage)} / {gbToTb(capacity)}
          <span className="capacity-percentage u-font-xxs">
            ({toPercentage((capacity - diskUsage) / capacity)} available)
          </span>
        </td>
      </tr>

      <tr>
        <th>Ram:</th>
        <td>{ram} GB</td>
      </tr>
    </table>
  );
}
