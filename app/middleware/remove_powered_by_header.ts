import type { HttpContext } from '@adonisjs/core/http'

export default class RemovePoweredByHeader {
  public async handle({ response }: HttpContext, next: () => Promise<void>) {
    response.header('X-Powered-By', '')
    await next()
  }
}
