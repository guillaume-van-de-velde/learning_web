import { Pokemon } from '../db/sequelize.js'
import { Op } from 'sequelize'
import { auth } from '../auth/auth.js'

export const findAllPokemons = (app) => {
  app.get('/api/pokemons', auth, (req, res) => {
    const limit = parseInt(req.query.limit) || 5;

    if (req.query.name) {
        const name = req.query.name;
        if (name.length < 2) {
            const message = `Le terme de recherche doit contenir au moins 2 characteres.`
            return res.status(400).json( { message } )
        }
        return Pokemon.findAndCountAll( { 
            where: { 
                name: {
                    [Op.like]: `%${name}%`
                },
            },
            order: ['name'],
            limit: limit
        } )
        .then(({count, rows}) => {
            const message = `Il y a ${count} pokemons qui correspondent au terme recherche ${name}`
            res.json( {message, data: rows} )
        })
    } else {
        Pokemon.findAll( { 
            order: ['name'],
        } )
          .then(pokemons => {
            const message = 'La liste des pokémons a bien été récupérée.'
            res.json({ message, data: pokemons })
          })
          .catch(error => {
            const message = `La liste de pokemons n'a pas pu etre recuperee. Reessayez dans quelques instants`
            res.status(500).json({ message, data: error })
          })
    }
  })
}