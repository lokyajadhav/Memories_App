import PostMsg1 from "../models/PostMessage.js";
export const getPost= async (req,res)=>
{
    try{
    //res.send("hello i am rendering from controlloer folder");
    const PostMsg12=await PostMsg1.find();
     res.status(200).json(PostMsg12);
    }
    catch(error)
    {
        res.send("getting some error while fetching the data");
    }

   
} 

export const createPost= async(req,res)=>
{
    const post1=req.body;
    const newPost= new PostMsg1(post1);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch(error)
    {
        res.send("getting some error while posting the data");
    }
}