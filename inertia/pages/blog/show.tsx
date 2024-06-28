import type { InferPageProps } from "@adonisjs/inertia/types";
import BlogController from "#controllers/blog_controller";
import { Head } from "@inertiajs/react";

export default function ArticleShowPage(props: InferPageProps<BlogController, 'show'>) {
  const { article } = props;
  <Head>
    <title>Selim Ramdani : Portfolio</title>
    <meta head-key="description" name="description" content="Développeur Web spécialisé dans la création d'applications Web. Passionné et disponible pour travailler sur vos projets. " />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" href="https://i.ibb.co/X2GtTjk/sm.png" />
  </Head>

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  )
}