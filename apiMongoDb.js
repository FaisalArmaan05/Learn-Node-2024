
const express = require('express');
const mongodb = require('mongodb');
const dbConnect = require('./mongoDbConnection');
const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    db = await dbConnect();
    data = await db.find().toArray();
    res.send(data);
});

app.post('/', async (req, res) => {
    db = await dbConnect();
    data = await db.insertOne(req.body);
    msg = '';
    if (data.acknowledged) 
        {
            msg = 'Data inserted successfully'
        }
        else
        {
            msg = 'Error in processing data';
        }
    res.send(msg);
});

app.put('/:name', async (req, res) => {
    db = await dbConnect();
    data = await db.updateOne(
        {name: req.params.name},
            {
                $set : req.body
            }
    );
    res.send(data);
});

app.delete('/:id', async (req, res) => {
    db = await dbConnect();
    data = await db.deleteOne(
        {_id: new mongodb.ObjectId(req.params.id)},
    );
    res.send(data);
});

app.listen('5000');
