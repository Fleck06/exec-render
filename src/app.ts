import fastify from 'fastify';
import cors from '@fastify/cors'

export const app = fastify()

app.register(cors, {
  origin: true,
})

app.get('home', async()=>{
  const user = {"nome": "Mateus Fleck"}
  return user
})

app.setErrorHandler((error, request, reply) =>{
  console.error(error)
  reply.status(500).send({message: 'Internal Server Error'})
})