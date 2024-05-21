import factory from '@adonisjs/lucid/factories'
import Article from '#models/article'
import { UserFactory } from './user_factory.js'

export const ArticleFactory = factory
  .define(Article, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      url: faker.internet.url(),
    }
  })
  .relation('user', (UserFactory))
  .build()