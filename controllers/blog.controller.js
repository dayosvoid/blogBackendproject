const Blog = require("../model/blog.js")
// a.create blog
const createBlog = async (req,res)=>{
    // res.send("blog created")
    const {userId} = req.user
    req.body.creadedby = userId
    try {
        const blogs = await Blog.create(req.body)
        res.status(201).json({success: true, blog})
    } catch (error) {
        res.json({error})   
    }
}

// b. get all blog
const getAllBlog = async (req,res)=>{
    // res.send("get all blogs")
    const {userId} = req.user
    try {
        const blogs = await Blog.find({creadedby: userId})
        res.status(200).json({success: true, blogs})
    } catch (error) {
        res.json(error)
    }
}
// c.get single a blog
const getSingleBlog = async (req,res)=>{
    // res.send("single blog")
    const {usedId} = req.user
    const {blogId} = req.params
    try {
        const blogs = await Blog.findOne({creaded: usedId, _id: blogId})
    } catch (error) {
        res.json({error})   
    }
}
// d. update a blog
const updateBlog = async (req,res)=>{
    // res.send("blog updated")
    const {userId} = req.user
    const {blogId} = req.params
    try {
        const blogs = await Blog.findAndUpdate({createdby: userId, _Id: blogId},req.body,{new: true}, {runValidators: true})
    } catch (error) {
        res.json({error})
        
    }
}
// e. delete blod
const deleteBlog = async (req,res)=>{
    // res.send("blog deleted")
    const {userId} = req.user
    req.body.creadedby = userId
    try {
        const blogs = await Blog.findAndDelete({createBy: userId, _id: blogId})
        res.status(200).json({sucess: true, msg: "blog deleted"})
    } catch (error) {
        res.json({error})
        
    }
}

module.exports = {createBlog,getAllBlog,updateBlog,deleteBlog,getSingleBlog}