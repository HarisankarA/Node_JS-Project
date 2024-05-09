import express from 'express'
import { Customer } from './customerModel.js'

const CustomerRouter = express.Router()

CustomerRouter.get('/all/', async (request, response) => {

    const customer_data = await Customer.find({})

    response.json(customer_data)

})

CustomerRouter.get('/:id/', async (request, response) => {

    const {id} = request.params

    const customer_data = await Customer.findById(id)

    response.json(customer_data)

})

CustomerRouter.post('/post/', async (request, response) => {

    const new_customer = new Customer(request.body)

    console.log(request.body)

    await new_customer.save()

    response.json("Data posted")

})

CustomerRouter.patch('/:id/', async (request, response) => {

    const {id} = request.params

    await Customer.findByIdAndUpdate( id, request.body)

    response.json("Data Updated")

})

CustomerRouter.delete('/:id/', async (request, response) => {

    const {id} = request.params

    await Customer.findByIdAndDelete( id, request.body)

    response.json("Data Deleted")

})

export default CustomerRouter