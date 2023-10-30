const {products, conn} = require('./config/db')

const productsData = require('./data/products')

const importData = async() => {
    try {
        await conn.sync({ force: true})
        
        await products.destroy({ truncate: true });

        await products.bulkCreate(productsData)

        console.log("Data import Success")

        process.exit()
    } catch (error) {
        console.error("Error with data import", error)
        process.exit(1)
    }
}

importData()