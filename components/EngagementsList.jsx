import { useState } from "react";
import moment from "moment";

import { dateFormat } from "/consts";

import sortArrayByObjKey from "/helpers/sortArrayByObjKey";
import tasksToLineChartObj from "/helpers/tasksToLineChartObj";
import toPercentage from "/helpers/toPercentage";

import Accordion from "/components/Accordion";
import AccordionPanel from "/components/AccordionPanel";
import AccordionPanelColumn from "/components/AccordionPanelColumn";
import TaskItem from "/components/TaskItem";
import ProgressPill from "/components/ProgressPill";
import LineChart from "/components/vis/LineChart";

function getCompletedTaskRatio(tasks) {
  const completedTasks = tasks.filter((task) => task.completionDate);
  return `${completedTasks.length}/${tasks.length}`;
}

function getCompletedTaskPercentage(tasks) {
  const completedTasks = tasks.filter((task) => task.completionDate);
  return toPercentage(completedTasks.length / tasks.length);
}

function shouldPrintStatusChart(engagement) {
  if (
    engagement.tasks &&
    engagement.tasks.length &&
    engagement.startDate &&
    engagement.eta
  ) {
    return true;
  }
}

export default function EngagementsList(props) {
  const { data, sortKey } = props;
  const sortedData = sortArrayByObjKey(data, sortKey);

  const [openPanelId, setOpenPanelId] = useState(false);

  return (
    <Accordion>
      {sortedData.map((engagement) => (
        <AccordionPanel
          key={engagement.id}
          headingLabel={engagement.name}
          isOpen={openPanelId === engagement.id}
          onClick={() =>
            setOpenPanelId(
              engagement.id !== openPanelId ? engagement.id : false
            )
          }
          meta={
            engagement.tasks && engagement.tasks.length
              ? [
                  {
                    label: "ETA",
                    value:
                      moment(engagement.eta).format(dateFormat) || null,
                  },
                  {
                    label: "Tasks",
                    value: getCompletedTaskRatio(engagement.tasks),
                  },
                  {
                    label: "Progress",
                    value: (
                      <ProgressPill>
                        {getCompletedTaskPercentage(engagement.tasks)}
                      </ProgressPill>
                    ),
                  },
                ]
              : []
          }
        >
          <AccordionPanelColumn title="Description">
            <p className="u-font-xs">{engagement.description}</p>
          </AccordionPanelColumn>

          <AccordionPanelColumn title="Tasks">
            {engagement.tasks && engagement.tasks.length ? (
              <ul className="task-list">
                {engagement.tasks.map((task) => (
                  <TaskItem
                    completionDate={
                      task.completionDate &&
                      moment(task.completionDate).format(dateFormat)
                    }
                    key={`${engagement.description}-${task.title}`}
                  >
                    {task.title}
                  </TaskItem>
                ))}
              </ul>
            ) : (
              <p>No tasks yet</p>
            )}
          </AccordionPanelColumn>

          {shouldPrintStatusChart(engagement) && (
            <AccordionPanelColumn title="Status">
              <LineChart
                data={tasksToLineChartObj(engagement)}
                yFormat={toPercentage}
              />
            </AccordionPanelColumn>
          )}
        </AccordionPanel>
      ))}
    </Accordion>
  );
}
