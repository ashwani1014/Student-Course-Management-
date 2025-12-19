export const errorHandler=(err,req,res,next)=>{
console.log("error : ",err.message);


res.status(err.statusCode|| 500).json({
    success:false,
    message:err.message ||"server Error",
});
};