import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";

@inject()
export default class WorksController {
  async index({inertia }: HttpContext){
    return inertia.render('admin/dashboard/works/index')
  }
}