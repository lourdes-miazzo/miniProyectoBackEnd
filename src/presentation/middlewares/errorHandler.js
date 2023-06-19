
const errorHandler = (err, req, res, next)=>{
    if(err?.message.includes("not found")){
        console.log(err.stack)
        return res.status(404).json({ message: err.message })
    }
    else if(err?.name.includes("ZodError")){
        console.log(err.stack)
        return res.status(400).json({message: err.issues})
    }
    console.log(err.stack)
    res.status(500).json({message: "An error occurred"})
}
export default errorHandler