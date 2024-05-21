import Article from "#models/article";
import { ModelPaginatorContract } from "@adonisjs/lucid/types/model";

export class ArticlesPresenter {

  toJson(articles: ModelPaginatorContract<Article>) {

    const meta = articles.getMeta();

    return {
      meta: {
        total: meta.total,
        perPage: meta.perPage,
        currentPage: meta.currentPage,
        lastPage: meta.lastPage,
        firstPage: meta.firstPage,
        firstPageUrl: meta.firstPageUrl,
        lastPageUrl: meta.lastPageUrl,
        nextPageUrl: meta.nextPageUrl,
        previousPageUrl: meta.previousPageUrl,
      },
      data: articles.all().map((article) => {
        return {
          id: article.id,
          timeAgo: article.createdAt.toRelative(),
          title: article.title,
          content: article.content,
          url: article.url,
          user: {
            id: article.user.id,
            email: article.user.email,
          }
        };
      }),
    };
  }

}
