import moment from "moment";

import { dateFormat } from "/consts";

import toPercentage from "/helpers/toPercentage";

function getTimestamp(date) {
  return moment(date).unix();
}

export default function tasksToLineChartObj(engagement) {
  const { tasks, startDate, eta } = engagement;

  const totalTasksCount = tasks.length;

  const completedTasks = tasks.filter((task) => task.completionDate);
  const completedTasksCount = completedTasks.length;

  const completedTasksPercentage = toPercentage(
    completedTasksCount / totalTasksCount
  );

  let startDateTimestamp, latestTaskTimestamp, etaTimestamp;
  if (startDate) {
    startDateTimestamp = getTimestamp(startDate);
  }
  if (completedTasks && completedTasks.length > 0) {
    latestTaskTimestamp = getTimestamp(
      completedTasks[completedTasks.length - 1].completionDate
    );
  }
  if (eta) {
    etaTimestamp = getTimestamp(eta);
  }

  const data = tasks.map((task, i) =>
    task.completionDate
      ? {
          label: task.completionDate,
          x: getTimestamp(task.completionDate) - startDateTimestamp,
          y: (i + 1) / totalTasksCount,
        }
      : {}
  );

  data.unshift({
    label: startDate,
    x: 0,
    y: 0,
  });

  if (
    eta &&
    completedTasksPercentage !== "100%" &&
    etaTimestamp > latestTaskTimestamp
  ) {
    data.push({
      label: eta,
      x: etaTimestamp - startDateTimestamp,
      y: 1,
    });
  }

  return data;
}
