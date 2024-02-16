const express=require('express');
const app=express();
const dbconnect=require('./mongodb');
app.set('view engine','ejs');

app.get('/insert',async (req,res)=>
{
    if(req.query.b1!=null)
    {
        let gname=req.query.t1;
        let gaddress=req.query.t2;
        let gage=req.query.t3;
        let gcontact=req.query.t4;
        
        let collection=await dbconnect();
        let r=await collection.insertOne({'name':gname,'address':gaddress,'age':gage,'contact':gcontact});
        if(r.acknowledged==true)
        {
            let msg='record inserted';
            res.render('home',{msg});
        }
        else
        {
            let msg='record not inserted';
            res.render('insert',{msg})
        }

    }
    //AGAR BUTTON PE CLICK NA KRE TO USKE LIYE
    else
    {
        let msg='';
        res.render('insert',{msg});
    }

});

app.listen(7000,()=>{
    console.log("server is running");
})
