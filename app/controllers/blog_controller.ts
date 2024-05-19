import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";

@inject()
export default class BlogController {
  async showBlog({inertia }: HttpContext){
    return inertia.render('blog')
  }
}