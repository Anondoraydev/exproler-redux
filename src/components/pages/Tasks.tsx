import { selecetTasks } from "@/redux/features/task/taskSlice";
import { useAppselector } from "@/redux/hook";
import TaskCard from "../module/tasks/TaskCard";

const Tasks = () => {
  const tasks = useAppselector(selecetTasks);

  console.log(tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20 ">
      <div>
        <h3>this is Tasks</h3>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
