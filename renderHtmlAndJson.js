const express = require('express');
const app = express();

app.get("", (req, resp) => {
    resp.send(`
        <h1>Welcome, to home page!</h1>
        <a href="/about" >Go to about page</a>
        `);
});

app.get("/about", (req, resp) => {
    resp.send(`
        Welcome, This is a About Page
        </br>
        <input type="text" placeholder="type name" value="${req?.query?.name || ''}">
        <button type="submit">Submit</button>
        </br>
        <a href="/" >Go to home page</a>
        `);
});

app.get("/help", (req, resp) => {

    resp.send(
        [
            {
                name: 'faisal',
                phone: '1234567890'
            },
            {
                name: 'Ali',
                phone: '1234567890'
            }
        ]
        );
});


app.listen(5000);