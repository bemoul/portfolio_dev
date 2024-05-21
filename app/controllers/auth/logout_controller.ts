import { HttpContext } from '@adonisjs/core/http'

export default class LogoutController {
  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('/')
  }
}
