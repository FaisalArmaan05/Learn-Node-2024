const express = require('express');
const app = express();

const reqFilter = (res, resp, next)=>{
    if (!res.query.age) {
        resp.send("Please provide your age.");
    }
    else if (res.query.age < 18) {
        resp.send("Your are under aged.");
    }
    else
    {
        next();
    }
}
app.use(reqFilter);

app.get('/', (res, resp) => {
    resp.send('Welcome to Home page')
});

app.listen(5000)