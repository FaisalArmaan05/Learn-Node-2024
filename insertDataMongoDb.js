const dbConnect = require('./mongoDbConnection');

const insertData = async() =>{
    let data = await dbConnect();
    let result = await data.insertMany(
        [{
        name:'Nokia 8090',
        brand:'Nokia',
        price: '$400'
    },
    {
        name:'Nokia 8090',
        brand:'Nokia',
        price: '$400'
    }]
    
);
if(result.acknowledged)
    {
        console.log({result});
        console.warn("data is inserted")
    }
}
insertData();