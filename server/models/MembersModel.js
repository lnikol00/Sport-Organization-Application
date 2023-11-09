import mongoose from "mongoose";

const memberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
)

const Member = mongoose.model("Member", memberSchema)

export default Member;