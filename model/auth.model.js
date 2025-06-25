const mongoose = require('mongoose')
const schema = mongoose.Schema
// const validator = ('validator')
const {isEmail} = require("validator")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userSchema = new schema({
    name:{
        type:String,
        require:[true,"please provide a name"]
    },
    email:{
        type:String,
        require:[true, "please provide an email"],
        validatate : [isEmail, "please provide valid email"]

    },
    password:{
        type:String,
        require:[true, "please provide correct password"],
        minLength:[7, "minimum of 7 characters"]
    }

},{timestamps: true})

userSchema.pre('save', async function(next){
    const salt= await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next()
})
userSchema.methods.comparePassword = async function(userPassword){
    const iscorrect = await bcrypt.compare(userPassword, this.password)

    return (iscorrect);
}
// to generate token when the user is login
userSchema.methods.generateToken = function (){
    return jwt.sign({usedId: this._id,  name: this.name}, process.env.jwt_secret, {expiresIn: "1d"})

}

module.exports = mongoose.model("User",userSchema)
