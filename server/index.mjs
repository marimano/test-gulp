import fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url'
import multipart from '@fastify/multipart'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = fastify();

server.register(cors, {})

server.register(multipart, { addToBody: true })

server.register(fastifyStatic, {
  root: path.join(__dirname, '../gulp-dist')
})

server.listen({ port: 5555 })
  .then(() => {
    console.log('Server started')
  })
  .catch((error) => {
    console.log('Error', error)
  })

