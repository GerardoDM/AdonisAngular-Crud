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

    async destroy({params}){
        const {id} = params;
        const personaje = await Personaje.find(id);
        await personaje.delete();
        return personaje;
    }

    async update({params, request}){
        const {id} = params;
        const personaje = await Personaje.find(id);
        personaje.merge(request.all())
        await personaje.save();
        return personaje;
    }

    async show({params, request}){
        const {id} = params;
        const personaje = await Personaje.find(id);
       
        
        return personaje;
    }

    async index ({response}) {
        let personajes = await Personaje.all()

        return response.json(personajes)
      }

}

module.exports = PersonajeController
