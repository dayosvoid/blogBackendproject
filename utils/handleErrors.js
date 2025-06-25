const handleError = (err)=>{
    let errors = {name: "", email: "", password: ""}

    if (err.code === 11000){
        errors.email = "email is ready in use"
        return errors
    }
    if(err.message === "incorrect email"){
        errors.email ="this email has not been register"
        return errors
    }
    if (err.message === "incorrect"){
        errors.email = "email or password is incorrect"
        errors.email = "email or password is incorrect"
        return errors
    }
    if(err.message.includes("user validation failed")){
        object.values(err.errors).forEach(({props})=>{
            errors[props.path] = props.message
        })
    }
    return errors
}

module.exports = handleError