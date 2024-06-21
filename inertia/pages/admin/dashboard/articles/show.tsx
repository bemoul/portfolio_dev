import type { InferPageProps } from "@adonisjs/inertia/types";
import type ArticlesController from "#controllers/articles_controller";

export default function ArticleShowPage(props: InferPageProps<ArticlesController, 'show'>) {
  const { article } = props;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  )
}