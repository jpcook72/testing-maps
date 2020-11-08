const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/testing-maps', {logging: false})

const fromGet = {
    tables: [
            {    
                name: 'Food',
                fields: [
                    {
                        name: 'name',
                        type: 'string'
                    },
                    {
                        name: 'price',
                        type: 'float'
                    },
                ]
            },
            {
                name: 'Drink',
                fields: [
                    {
                        name: 'name',
                        type: 'string'
                    },
                    {
                        name: 'price',
                        type: 'float'
                    },
                ]
            }
            ],
}


const makeDB = function(db) {

    exportTables = {}

console.log(fromGet.tables.forEach( (table) => console.log('hey')))

    fromGet.tables.forEach( (table) => {

        const fieldList = {}
        console.log(table)

        table.fields.forEach( (field) => {
            fieldList[field.name] = {}
            fieldList[field.name].type = Sequelize[field.type.toUpperCase()]
        })


        exportTables[table.name] = db.define(table.name.toLowerCase(), fieldList)


    })
    return exportTables
}

const tables = makeDB(db)
// makeDB(db)

module.exports = {db, ...tables}






