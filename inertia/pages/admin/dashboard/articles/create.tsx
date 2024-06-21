import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function Create() {
  const formSchema = z.object({
    title: z.string().min(6, { message: 'Title is required' }),
    content: z.string().min(10, { message: 'Content must be at least 10 characters' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    submitForm(data);
  };

  const submitForm = async (data: z.infer<typeof formSchema>) => {
    const payload = {
      title: data.title,
      content: data.content,
    };

    router.post('/dashboard/articles', payload);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" {...form.register("title")} />
        {form.formState.errors.title && <p>{form.formState.errors.title.message}</p>}
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea id="content" {...form.register("content")}></textarea>
        {form.formState.errors.content && <p>{form.formState.errors.content.message}</p>}
      </div>
      <button type="submit">Create Article</button>
    </form>
  );
}
