const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

app.set('view engine','ejs');

app.get('/',(_,resp)=>{
   resp.render('index')
});
app.get( '/profile', (req, resp)=>{
        const user={
        name:'Peter',
        email:'peter@test.com',
        country:'USA'
    }
    resp.render('profile', {user})
})


app.listen(5000);