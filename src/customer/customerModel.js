import mongoose from "mongoose";

const CustomerSchema = mongoose.Schema (

    {
        customer_name : {
            type : String,
            required : true
        },
        
        phone : {
            type : Number,
            required : true
        },

        city : {
            type : String,
            required : true
        }   
    },

    {
        timestamps : true
    }
)

export const Customer = mongoose.model('customer',CustomerSchema)