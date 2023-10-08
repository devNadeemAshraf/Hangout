import { TStepProps } from "../types";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { MoveRight } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import CustomButton from "@/components/shared/CustomButton";

const formSchema = z.object({
  email: z
    .string()
    .email({
      message: "That doesnt look like a valid email address",
    })
    .min(1, {
      message: "Email cannot be empty.",
    }),
});

const Email = ({ handleStepChange }: TStepProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  form.watch();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleStepChange)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="ex: johndoe@email.com" {...field} />
              </FormControl>
              <FormDescription>
                Email Address you used to create your account
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <CustomButton
          text="Next"
          icon={<MoveRight className="w-4 h-4 ml-2 mt-1" />}
          type="submit"
        />
      </form>
    </Form>
  );
};

export default Email;
