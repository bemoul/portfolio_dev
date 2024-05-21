/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router';
import { middleware } from './kernel.js';

import LoginController from '#controllers/auth/login_controller';
import LogoutController from '#controllers/auth/logout_controller';
import BlogController from '#controllers/blog_controller';
import DashboardController from '#controllers/admin/dashboard_controller';
import ArticlesController from '#controllers/articles_controller';
import WorksController from '#controllers/works_controller';
import ProjectsController from '#controllers/projects_controller';

/**
 * Home page route
 */
router.on('/').renderInertia('home', { version: 6 });

/**
 * Authentication routes for administrator access
 */
router.group(() => {
  router.get('admin', [LoginController, 'showAdminAccess']).as('auth.admin');
  router.post('admin', [LoginController, 'handleForm']);
})
.middleware(middleware.guest());

/**
 * Logout route
 */
router.post('logout', [LogoutController, 'logout']).middleware(middleware.auth());

/**
 * Blog routes
 */
router.get('blog', [BlogController, 'index']);
router.get('blog/articles/:id', [BlogController, 'show']);

/**
 * Dashboard routes (requires authentication)
 */
router.group(() => {
  router.get('dashboard', [DashboardController, 'showDashboard']);

  router.get('/dashboard/articles', [ArticlesController, 'index']);
  router.get('/dashboard/articles/:id', [ArticlesController, 'show']);

  router.get('/dashboard/projects', [ProjectsController, 'index']);

  router.get('/dashboard/works', [WorksController, 'index']).as('works.show');
})
.middleware(middleware.auth());