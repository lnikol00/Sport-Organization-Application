import mongoose from "mongoose";

const photosSchema = mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
)

const Photos = mongoose.model("Photos", photosSchema)

export default Photos;