import mongoose from "mongoose";

const newsSchema = mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
)

const News = mongoose.model("News", newsSchema)

export default News;