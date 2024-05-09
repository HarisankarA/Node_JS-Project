import express from 'express'
import { Product } from './productModel.js'

const ProductRouter = express.Router()


ProductRouter.get('/all/', async (request, response) => {

    const prod_date = await Product.find({})

    response.json(prod_date)

})

ProductRouter.get('/:id/', async (request, response) => {

    const {id} = request.params

    const prod_date = await Product.findById(id)

    response.json(prod_date)

})

ProductRouter.post('/post/', async (request, response) => {

    const new_prod = new Product(request.body)

    console.log(request.body)
    
    await new_prod.save()

    response.json("Data Posted")

})

ProductRouter.patch('/:id/', async (request, response) => {

    const {id} = request.params

    await Product.findByIdAndUpdate(id, request.body)

    response.json("Data Updated")

})

ProductRouter.delete('/:id/', async (request, response) => {

    const {id} = request.params

    await Product.findByIdAndDelete(id, request.body)

    response.json("Data Deleted")

})

export default ProductRouter