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

}

module.exports = WeaponController
