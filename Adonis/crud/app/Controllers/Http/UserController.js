'use strict'

const User = use('App/Models/User')

class UserController {

    async login ({request , auth}){

        const {  username, password } = await request.only(['username','password'])

        let token = await auth.withRefreshToken().attempt(username,password)
       
        return token;
    }

    async register ({request, response}){

        const {username, password} = request.only(['username', 'password'])

        await User.create({username, password})


    }
}

module.exports = UserController
