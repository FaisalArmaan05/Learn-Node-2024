
const dbConnect = require('./mongoDbConnection');

const deleteData = async() =>{
    let data = await dbConnect();
    let result = await data.deleteMany({brand:'Nokia'});
    if(result.acknowledged)
    {
        console.warn(result);
        console.warn("data is deleted successfully");
    }
}

deleteData();