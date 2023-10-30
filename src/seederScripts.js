const {Products, conn} = require('../config/db')

const productsData = require('../src/Data/data')

const importData = async () => {
    try {
        await conn.sync({ force: true })

        await Products.destroy({ truncate: true})

        await Products.bulkCreate(productsData)

        console.log('Data import Success')

        process.exit()
    } catch (error) {
        console.error('Error with data import', error)
        process.exit(1)
    }
}

importData()