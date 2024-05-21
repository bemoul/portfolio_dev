import Article from "#models/article";
import { ArticlePresenter } from "#presenters/article_presenter";
import { ArticlesPresenter } from "#presenters/articles_presenter";
import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";

export default class BlogController {
  @inject()
  async index({ inertia, request }: HttpContext, presenter: ArticlesPresenter) {
    const page = request.input('page', 1)

    const articles = await Article.query().preload('user').paginate(page, 50)

    return inertia.render('blog/index', {
      articles: presenter.toJson(articles)
    });
  }

  @inject()
  async show({ inertia, params }: HttpContext, presenter: ArticlePresenter) {
    const article = await Article.query().preload('user').where('id', params.id).firstOrFail()

    return inertia.render('blog/show', {
      article: presenter.toJson(article)
    });
  }
}