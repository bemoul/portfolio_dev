import { inject } from "@adonisjs/core";
import Article from "#models/article";
import { ArticlesPresenter } from "#presenters/articles_presenter";
import type { HttpContext } from "@adonisjs/core/http";
import { ArticlePresenter } from "#presenters/article_presenter";

export default class ArticlesController {

  @inject()
  async index({ inertia, request }: HttpContext, presenter: ArticlesPresenter) {
    const page = request.input('page', 1)

    const articles = await Article.query().preload('user').paginate(page, 50)

    return inertia.render('admin/dashboard/articles/index', {
      articles: presenter.toJson(articles)
    });
  }

  @inject()
  async show({ inertia, params }: HttpContext, presenter: ArticlePresenter) {
    const article = await Article.query().preload('user').where('id', params.id).firstOrFail()

    return inertia.render('admin/dashboard/articles/show', {
      article: presenter.toJson(article)
    });
  }

  @inject()
  async create({ inertia }: HttpContext) {
    return inertia.render('admin/dashboard/articles/create');
  }

  @inject()
  async store({ request, response, auth }: HttpContext) {
    const data = request.only(['title', 'content', 'url'])

    const article = new Article()
    article.title = data.title
    article.content = data.content
    article.url = data.url
    // article.userId = auth.user?.id

    await article.save()

    return response.redirect(`/admin/dashboard/articles/${article.id}`)
  }

}