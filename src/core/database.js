const { JsonDB, Config } = require("node-json-db")

const db = new JsonDB(new Config("main", true, true, '/'))

/**
 * 
 * @param {JsonDB} db
 * @param {string} route
 * @param {object} data
 */
exports.pushData = async (route, data) => {
    await db.push(route, data)
}

/**
 * 
 * @param {JsonDB} db
 * @param {string} route
 */
exports.getData = async (route) => {
    return await db.getData(route)
}