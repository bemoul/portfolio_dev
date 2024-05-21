import type { InferPageProps } from '@adonisjs/inertia/types'
import type ArticlesController from '#controllers/articles_controller'
import DashboardLayout from "../dashboard_display/dashboard_layout";
import { Head, Link } from '@inertiajs/react';
import { Card, CardContent, CardFooter, CardHeader } from '~/css/@/components/ui/card';

export default function ArticlesIndex(props: InferPageProps<ArticlesController, 'index'>) {

  const { articles } = props;
  return (
    <DashboardLayout>
      <Head title="Admin - Gestion des Articles" />
      <h1 className="text-2xl font-bold mb-6">{articles.data.length} articles disponibles</h1>
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
                <Link href={`/dashboard/articles/${article.id}`} className="text-blue-500 hover:underline">Lire l'article</Link>
              </CardFooter>
              <CardFooter>
                <Link href={`/dashboard/articles/${article.id}`} className="text-gray-500">{article.timeAgo}</Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}