'use strict'

const Personaje = use('App/Models/Personaje')


class PersonajeController {

    async create({request}){
        const { nombre, raza, clase} = await request.all();
        const personaje = new Personaje();
        personaje.fill({
            nombre,
            raza,
            clase
        });

        await personaje.save()
        return personaje;
    }
}

module.exports = PersonajeController
