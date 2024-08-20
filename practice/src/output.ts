import { z } from '@hono/zod-openapi'

export const UserSchema = z.object({
    id: z
      .string()
      .min(1)
      .max(5)
      .openapi({
        param: {
          name: 'id',
          in: 'path',
        },
        example: '1212121',
      }),
  })
  