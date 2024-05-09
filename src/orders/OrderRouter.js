import express, { request, response } from 'express'
import { Order, OrderProduct } from './OrderModel.js'
import { Product } from '../product/productModel.js'

const OrderRouter = express.Router()


OrderRouter.post ('/',  async (request, response) => {

    const order_details = request.body[0]
    const product_details = request.body[1]

    const new_order = new Order (order_details)

    await new_order.save()

    let total_amount = 0
    
    for (let product_data of product_details) {

    const product_id_data = await Product.findById(product_data.product)

        const amount = product_data.quantity * product_id_data.price

        const gst_amount = (amount * product_id_data.gst) / 100

        const new_order_product = new OrderProduct ({
            product : product_data.product,
            order : new_order._id,
            quantity : product_data.quantity,
            amount : amount,
            gst_amount : gst_amount,
            sub_total : amount + gst_amount
        })

        total_amount = total_amount + (amount + gst_amount)

        await new_order_product.save()
    }

    await Order.findByIdAndUpdate(new_order._id, {bill_amount : total_amount})

    response.json("Order Details added")
})

export default OrderRouter