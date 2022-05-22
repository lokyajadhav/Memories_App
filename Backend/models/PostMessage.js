import mongoose from "mongoose";

const PostMsg=mongoose.Schema(
    {
        titke: String,
        message: String,
        creater: String,
        tags: [String],
        selectedFile: String,
        likecount:{
            type: Number,
            default: 0,
        },
        createdAt:{
            type: Date,
            default: new Date(),
        },
    }
)
const PostMsg1= mongoose.model("postMessage",PostMsg);
export default PostMsg1;