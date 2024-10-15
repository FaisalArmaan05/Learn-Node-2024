const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

app.set('view engine','ejs');

app.get('/',(_,resp)=>{
   resp.render('index')
});
app.get( '/array', (req, resp)=>{
        const user={
        name:'Peter',
        email:'peter@test.com',
        country:'USA',
        skills : ['Java','JavaScript','PHP','Next']
    }
    resp.render('arrayFile', {user})
})

app.get('/login',(_,resp)=>{
    resp.render('login')
 });


app.listen(5000);