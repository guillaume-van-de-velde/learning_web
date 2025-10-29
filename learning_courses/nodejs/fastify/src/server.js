import fastifyView from "@fastify/view";
import fastifyStatic from "@fastify/static";
import fastify from "fastify"
import ejs from 'ejs'
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path"
import { createPost, listPosts, showPost } from "./actions/posts.js";
import { RecordNotFoundError } from "./errors/RecordNotFoundError.js";
import fastifyFormBody from "@fastify/formbody";
import { loginAction, logoutAction } from "./actions/auth.js";
import fastifySecureSession from "@fastify/secure-session";
import { readFileSync } from "node:fs";
import { NotAuthenticatedError } from "./errors/NotAuthenticatedError.js";

const app = fastify();
const rootDir = dirname(dirname(fileURLToPath(import.meta.url)))

app.register(fastifyView,  {
    engine : {
        ejs
    }
})

app.register(fastifySecureSession, {
  cookieName: 'session',
  key: readFileSync(join(rootDir, 'secret-key')),
  cookie: {
    path: '/'
  }
})

app.register(fastifyFormBody)

app.register(fastifyStatic, {
  root: join(rootDir, 'public'),
})

app.get('/', listPosts)
app.post('/', createPost)
app.get('/login', loginAction)
app.post('/login', loginAction)
app.post('/logout', logoutAction)
app.get('/article/:id', showPost)

app.setErrorHandler((error, req, res) => {
    if (error instanceof RecordNotFoundError) {
        res.statusCode = 404
        return res.view('templates/404.ejs', {
            error: 'Cet enregistrement n\'existe pas'
        })
    } else if (error instanceof NotAuthenticatedError) {
        return res.redirect('/login')
    }
    console.error(error)
    res.statusCode = 500
    return {
        error: error.message
    }
})

const start = async () => {
    try {
        await app.listen({port: 4400})
    } catch (err) {
        console.error(err);
        process.exit(1)
    }
}
start()