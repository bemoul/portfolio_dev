import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { Opaque } from '@adonisjs/core/types/helpers'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Article from './article.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export type UserId = Opaque<'UserId', string>

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: UserId

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @column()
  declare email: string

  @column()
  declare password: string

  @hasMany(() => Article)
  declare articles: HasMany<typeof Article>
}