import router from "@adonisjs/core/services/router"

export function route(...args: Parameters<typeof router.makeUrl>) {
  return router.makeUrl(...args)
}

// export function csrfField() {
//   const { request } = HttpContext.getOrFail()

//   return Html.createElement('input', { type: 'hidden', value: request.csrfToken, name: '_csrf' })
// }
