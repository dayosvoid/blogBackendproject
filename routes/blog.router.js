const router = require("express").Router()
const {createBlog,getAllBlog,updateBlog,deleteBlog,getSingleBlog}= require("../controllers/blog.controller.js")

 router.route("/").post(createBlog).all(getAllBlog)
 router.route('/:blogId').patch(updateBlog).get(getSingleBlog).delete(deleteBlog)
 


module.exports = router