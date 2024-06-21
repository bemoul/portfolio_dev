import User from '#models/user'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class LoginController {
  async showAdminAccess({ inertia }: HttpContext) {
    return inertia.render('admin/auth/admin_access')
  }

  async handleForm({ auth, request, response }: HttpContext) {

    /**
     * Step 1: Get credentials from the request body
     */
    const { email, password } = request.only(['email', 'password'])

    /**
     * Step 2: Verify credentials
     */
    const user = await User.verifyCredentials(email, password);

    /**
     * Step 3: Login user
     */
    await auth.use('web').login(user)

    /**
     * Step 4: Send them to a protected route
     */
    return response.redirect('/dashboard')
  }
}