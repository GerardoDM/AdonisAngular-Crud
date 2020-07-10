'use strict'

const Bar = use('App/Models/Bar')
const mongoose = require("mongoose");
const { all } = require("../../Models/Personaje");


class WeaponController {

      async index ({response}) {

        let bars = await Bar.all()
        return response.json(bars)
      }

      async show ({params, response}){

        try {

            const {userID} =  params
                        
            const bars =  await Bar.where('userID', parseInt(params.userID)).fetch()
            
            return response.json(bars)
          
        } catch (error) {

            return console.log(error)            
        }
       
            

            
        
      }
       

    async store ({request, response}) {


        try {

            const data = request.all()
            const bar = new Bar()
            bar.name = data.name
            bar.type = data.type
            bar.userID = data.userID
    
            await bar.save()
            return response.status(201).json(bar)
            
        } catch (error) {

            console.log(error)
            
        }

        
       

    }

    async destroy({params}){
        const {_id} = params;
        const bar = await Bar.find(_id)
        await bar.delete();
        return bar;
    }

    async update({params, request}){
        const {_id} = params;
        const bar = await Bar.find(_id);
        bar.merge(request.all())
        await bar.save();
        return bar;
    }

}

module.exports = WeaponController
