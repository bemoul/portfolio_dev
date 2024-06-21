import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import { ArticleFactory } from './article_factory.js'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      email: faker.internet.email(),
      password: faker.internet.password(),
    }
  })
  .relation('articles', () => (ArticleFactory))
  .build()