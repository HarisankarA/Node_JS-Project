import mongoose from "mongoose";

const OrderSchema = mongoose.Schema (

    {
        customer : {
            type : mongoose.Schema.Types.ObjectId,
            ref:'Customer'
        },
        order_number : {
            type : Number,
            require: true
        },
        order_date:{
            type: Date,
            require : true
        },
        bill_amount : Number
    }
)

export const Order = mongoose.model('order', OrderSchema)

const OrderProductSchema = mongoose.Schema(

    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Product"
        },
        order: {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Order"
        },
        quantity: {
            type: Number,
            require : true
        },
        amount: {
            type: Number,
            require : true
        },
        gst_amount: {
            type: Number,
            require : true
        },
        sub_total: {
            type: Number,
            require : true
        }
    }
)

export const OrderProduct = mongoose.model('OrderProduct', OrderProductSchema)