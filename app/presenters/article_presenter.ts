import Article from "#models/article";

export class ArticlePresenter {
  toJson(article: Article) {
    return {
      id: article.id,
      timeAgo: article.createdAt.toRelative(),
      title: article.title,
      content: article.content,
      url: article.url,
      user: {
        id: article.user.id,
        email: article.user.email,
      },
    }
  }
}