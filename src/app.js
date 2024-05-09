import express, { json, urlencoded } from 'express'
import { config } from 'dotenv'
import {set, connect} from 'mongoose'
import CustomerRouter from './customer/customerRouter.js'
import ProductRouter from './product/productRouter.js'
import OrderRouter from './orders/OrderRouter.js'


const app = express()
app.use(json())

app.use(urlencoded({extended : true}))
config()

set('strictQuery' , false)

app.use('/customer/', CustomerRouter)
app.use('/product/', ProductRouter)
app.use('/orders/', OrderRouter)

const port = process.env.PORT
const mongo_db = process.env.MONGO_DB



const start = async () => {

    await connect (`${mongo_db}`)

    app.listen(port , console.log(`Listening on the port ${port}`))

}

start()

// app.listen(4000, console.log("Listening on the port 4000"))