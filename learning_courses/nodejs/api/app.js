import express from 'express'
import morgan from 'morgan'
import favicon from 'serve-favicon'
import bodyParser from 'body-parser';
import { initDb } from './src/db/sequelize.js'
import { findAllPokemons } from './src/routes/findAllPokemons.js';
import { findPokemonByPk } from './src/routes/findPokemonByPk.js';
import { createPokemon } from './src/routes/createPokemon.js';
import { updatePokemon } from './src/routes/updatePokemon.js';
import { deletePokemon } from './src/routes/deletePokemon.js';
import { login } from './src/routes/login.js';

const app = express()
const port = process.env.PORT

app
.use(favicon('./favicon.ico'))
.use(morgan('dev'))
.use(bodyParser.json())

initDb();

findAllPokemons(app)
findPokemonByPk(app)
createPokemon(app)
updatePokemon(app)
deletePokemon(app)
login(app)

app.use(({res}) => {
    const message = 'Impossible de trouver la ressource demandee, essayer une autre URL'
    res.status(404).json(message)
})

app.listen(port, () => console.log(`l\'app est demarree sur : http://${process.env.HOST}:${port}`))