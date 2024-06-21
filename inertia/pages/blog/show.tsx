import type { InferPageProps } from "@adonisjs/inertia/types";
import BlogController from "#controllers/blog_controller";

export default function ArticleShowPage(props: InferPageProps<BlogController, 'show'>) {
  const { article } = props;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  )
}