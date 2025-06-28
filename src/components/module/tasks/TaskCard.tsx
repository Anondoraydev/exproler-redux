import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {
  return (
    <div className="border rounded-md px-5 py-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("w-3 h-3 rounded-full", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          ></div>
          <h1>{task.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500">
            <Trash2 />
          </Button>
          <Checkbox />
        </div>
      </div>
      <p className="mt-5">{task.desceiption}</p>
    </div>
  );
}
