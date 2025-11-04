import { pokemons } from './mock-pokemons.js';
import { Sequelize, DataTypes } from 'sequelize';
import { PokemonModel } from '../models/pokemons.js'
import { UserModel } from '../models/user.js'
import bcrypt from 'bcrypt'

const sequelize = new Sequelize(
    'pokedex',
    'root',
    '',
    {
        host: process.env.HOSTWSL,
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT-2'
        },
        logging: false
    }
)

export const Pokemon = PokemonModel(sequelize, DataTypes)
export const User = UserModel(sequelize, DataTypes)

export const initDb = async () => {
    return sequelize.sync({force: true})
        .then(() => {
            pokemons.map(pokemon => {
                Pokemon.create({
                    name: pokemon.name,
                    hp: pokemon.hp,
                    cp: pokemon.cp,
                    picture: pokemon.picture,
                    types: pokemon.types
                }).then(pokemon => console.log(pokemon.toJSON()))
            })
            bcrypt.hash(process.env.PASSWORDADMIN, 1)
            .then(hash => User.create({ username: 'pikachu', password: hash }))
            .then(user => console.log(user.toJSON()))
            console.log('La base de donnees a bien ete initialisee')
        })
}
