import moment from "moment";

import { dateFormat } from "/consts";

import toPercentage from "/helpers/toPercentage";

export default function tasksToLineChartObj(engagement) {
  const { tasks, startDate, eta } = engagement;

  // tasks = [{
  //   id: "task-1",
  //   title: "Task 1 title",
  //   completionDate: "2021-02-13" || null
  // }]

  // data = [
  //   { label: "S", x: 0, y: 0 },
  //   { label: "M", x: 1, y: 400 },
  //   { label: "S", x: 6, y: 400 },
  // ];

  const totalTasksCount = tasks.length;

  const completedTasks = tasks.filter((task) => task.completionDate);
  const completedTasksCount = completedTasks.length;

  const completedTasksPercentage = toPercentage(
    completedTasksCount / totalTasksCount
  );

  console.log(completedTasksPercentage);

  const data = tasks.map((task, i) =>
    task.completionDate
      ? {
          label: task.completionDate,
          x: i + 1,
          y: (i + 1) / totalTasksCount,
        }
      : {}
  );

  data.unshift({
    label: startDate,
    x: 0,
    y: 0,
  });

  // console.log(tasks);

  // let formattedEta;
  // if (eta) {
  //   formattedEta = moment(eta).format(dateFormat);
  //   // console.log(formattedEta);
  // }

  return data;
}
