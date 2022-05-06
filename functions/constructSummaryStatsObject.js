import getServerStatAverage from "/functions/getServerStatAverage";
import getServerStatSum from "/functions/getServerStatSum";

export default function constructSummaryStatsObject(servers) {
  const firstUptime = servers[0].uptime;
  const averageUtilization = getServerStatAverage(servers, "utilization");
  const totalDiskUsage = getServerStatSum(servers, "diskUsage");
  const totalCapacity = getServerStatSum(servers, "capacity");
  const totalRam = getServerStatSum(servers, "ram");

  return {
    serverCount: servers.length,
    uptime: firstUptime,
    utilization: averageUtilization,
    diskUsage: totalDiskUsage,
    capacity: totalCapacity,
    ram: totalRam,
  };
}
