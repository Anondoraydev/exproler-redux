import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

interface TaskFormData {
  title: string;
}

export function AddTaskModal() {
  const form = useForm<TaskFormData>();

  const onSubmit = (data: TaskFormData) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Task</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">
          Fill up this form to add task
        </DialogDescription>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter task title" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Desceiption</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter task Desceiption" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Save Task</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
