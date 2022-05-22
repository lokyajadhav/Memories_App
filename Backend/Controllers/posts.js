import PostMsg1 from "../models/PostMessage.js";
export const getPost= async (req,res)=>
{
   try{
    res.send("hello i am rendering from controlloer folder");
    const msg= await PostMsg1.find();
    res.status(200).json(msg);
   }
   catch(error)
   {
       res.send("getting some error");
   }
}

export const createPost=(req,res)=>
{
    try{

    }
    catch(error)
    {

    }
}