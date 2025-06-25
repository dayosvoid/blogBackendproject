// title, description, tags, createdby

const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a blog title"]
    },
    description: {
        type: String,
        required: [true, "Please provide the description"]
    },
    tag: {
        type: String,
        enum: ["Nature", "Lifestyle", "Technologia", "Sport"]
    },
    createdby:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        require:[true, "please provide log ]in"]
    }
}, ({timestamps: true}))

module.exports = mongoose.model("Blog", blogSchema)