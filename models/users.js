const { promises } = require('fs')
const path = './models/db.json', encoding = 'utf8'

exports.getAllUsers = async () => {
    const users = await promises.readFile(path, { encoding })
    return JSON.parse(users)
}

exports.getUserById = async (id) => {
    const users = JSON.parse(await promises.readFile(path, { encoding }))
    return users.find(value => value.id == id)
}

exports.addUser = async (user) => {
    const users = await this.getAllUsers()
    users.push(user)
    await promises.writeFile(path, JSON.stringify(users), { encoding })
}