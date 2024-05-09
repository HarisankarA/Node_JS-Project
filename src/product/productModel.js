import mongoose from "mongoose";

const ProductSchema = mongoose.Schema (

    {
        product_name : {

            type : String,

            required : true
        },
        code : {

            type : String,

            required : true
        },
        price : {

            type : Number,

            required : true
        },
        gst : {

            type : Number,

            required : true
        },
        discout : {

            type : Number,

            required : true
        }
    },

    {
        timstamps : true
    }

)

export const Product = mongoose.model('proudcts', ProductSchema)