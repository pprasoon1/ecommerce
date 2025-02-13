const mongoose = require('mongoose');

const productSchema = mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim : true
    },
    description: {
        type: String,
        required: [true, "Please Enter Product Description"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter Price of the Product"],
        maxLength: [8,"Price cannot exceed 8 figures"]
    },
    rating : {
        type: Number,
        default: 0
    },
    images : [
        {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
],
    category: {
        type: String,
        required: [true,"Please Enter Product Category"]
        
    },
    stock: {
        type: Number,
        required: [true,"Please Enter product Stock"],
        maxLength: [400, "Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews: {
        type : Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema);