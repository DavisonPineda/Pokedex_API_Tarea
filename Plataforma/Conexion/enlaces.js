const express = require('express');
const router = express.Router();


var filtro1 = require('../Clases JS/Por_Nombre');
// var evolucion = require('../JS/getPokemonEvolutions.js');
 var filtro2 = require('../Clases JS/Tipos.js');
 var exp = require('../Clases JS/Por_Experiencia')


/*var info_pokemon = require('../JS/getPokemonInformations');
var evolucion = require('../JS/getPokemonEvolutions.js');

var exp = require('../JS/pokemon_exp.js')*/


var Inicio = require('../Clases JS/Inicio.js');
router.get('/', Inicio.PaginaInicial);
router.post('/type_pokemons', filtro2.Buscar_tipo);


 router.post('/information_pokemon', filtro1.DatosPokemon);
 
router.post('/base_experience', exp.Buscar_exp);
// router.post('/pokemon-evolutions', evolucion.Evolucion_pokemon);
// router.post('/errors', function (requ, res) {
//     console.error(requ.body, res);
//     res.sendStatus(200);
// });

module.exports = router;