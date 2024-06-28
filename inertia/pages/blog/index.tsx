import BlogController from "#controllers/blog_controller";
import { InferPageProps } from "@adonisjs/inertia/types";
import { Head, Link } from "@inertiajs/react"
import { Header } from "~/components/Header"
import { Card, CardContent, CardFooter, CardHeader } from "~/css/@/components/ui/card";

export default function BlogIndex(props: InferPageProps<BlogController, 'index'>) {
  <Head>
    <title>Selim Ramdani : Blog</title>
    <meta head-key="description" name="description" content="Développeur Web spécialisé dans la création d'applications Web. Passionné et disponible pour travailler sur vos projets. " />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" href="https://i.ibb.co/X2GtTjk/sm.png" />
  </Head>
  const { articles } = props;

  return (
    <>
      <Head title="blog" />
      <Header />
      <h1 className="text-2xl font-bold mb-6 text-center py-4">{articles.data.length} articles disponibles</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {articles.data.map((article) => (
          <div key={article.id} className="w-full md:w-1/2 lg:w-1/3 p-2 flex">
            <Card className="flex flex-col mb-5 flex-1">
              <CardHeader>
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <i>{article.user?.email}</i>
              </CardHeader>
              <CardContent className="flex-1">
                <p>{article.content}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/articles/${article.id}`} className="text-blue-500 hover:underline">Lire l'article</Link>
              </CardFooter>
              <CardFooter>
                <Link href={`/blog/articles/${article.id}`} className="text-gray-500">{article.timeAgo}</Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  )
}