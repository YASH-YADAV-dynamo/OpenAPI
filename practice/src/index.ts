import { createRoute, OpenAPIHono  } from '@hono/zod-openapi'
import { ParamsSchema } from './input'
import { UserSchema } from './output'

const app = new OpenAPIHono()

const getroute = createRoute({
  method: 'get',
  path: '/users/{id}',
  request: {
    params: ParamsSchema
  },
  responses:{
    200: {
      content: {
        'appliaction/json': {
          schema: UserSchema,
        },
      },
      description: 'user',
    },
  },
})

const postUserroute = createRoute({
  method: 'post',
  path: '/users/{id}',
  request: {
    params: ParamsSchema
  },
  responses:{
    200: {
      content: {
        'appliaction/json': {
          schema: UserSchema,
        },
      },
      description: 'user',
    },
  },
})

app.openapi(getroute, (c) => {
  const { id } = c.req.valid('param')
  return c.json(
    {
      id,
      age: 20,
      name: 'Ultra-man',
    },
    200 
  )
})


app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
})


export default app
