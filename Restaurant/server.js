const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')//middleware logger
const path = require('path');


dotenv.config({path:'config.env' })
const DB=require('./config/DB')

const categoryRouter=require('./Routes/categoryRoute')
const SubcategoryRouter=require('./Routes/subCategoryRoute')
const Brands=require('./Routes/bransRoute')
const Proudct=require('./Routes/ProuctRoute')


const ApiError = require('./utils/apiError')
const Error=require('./middleware/errorHandling')
//connect DB
DB()
//app
const app=express();
//middleware
app.use(express.json())
app.use(express.urlencoded());
app.use(express.static('public'));
app.use(morgan('dev'));



app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email, password);

    const data = {
        "email": email,
        "password": password,
    };

    // Use db.collection to interact with MongoDB
    try {
        const result = await DB.collection('your-collection-name').insertOne(data);
        console.log("Record Inserted Successfully");
        console.log(result);
    } catch (error) {
        console.error(error);
        // Handle the error
    }
if(email==='Dalia' && password==='222')
{
    return res.sendFile(path.join(__dirname, 'public', 'HomePage', 'HomePage.html'));

}
});
app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('start.html');
});
//Routes
app.use("/api/v1/categories",categoryRouter)
app.use("/api/v1/Subcategories",SubcategoryRouter)
app.use("/api/v1/brands",Brands)
app.use("/api/v1/Products",Proudct)

app.all('*',(req,res,next)=>{
    next(new ApiError(`Error ${req.originalUrl} Doesn't Exist`,400))
})
//Error Handler with Express Middleware
app.use(Error)


app.listen(process.env.PORT,()=>{
    console.log(`Running Done on port ${process.env.PORT}`)
})