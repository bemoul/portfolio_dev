/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import LoginController from '#controllers/auth/login_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import BlogController from '#controllers/blog_controller'
import DashboardController from '#controllers/admin/dashboard_controller'

router.on('/').renderInertia('home', { version: 6 })
// router.get('/').renderInertia('home', { version: 6 })

router.group(() => {
  router.get('admin', [LoginController, 'showAdmin'] ).as('auth.admin')
  router.post('admin', [LoginController, 'handleForm'])
})
.middleware(middleware.guest())

router.get('blog', [BlogController, 'showBlog']).as('blog.show')

router.get('dashboard', [DashboardController, 'showDashboard']).as('dashboard.show')