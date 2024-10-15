const dbConnect = require('./mongoDbConnection');

const updateData = async() =>{
    let data = await dbConnect();
    let result = await data.updateMany(
        
            {name: 'Nokia 3300'},
            {
                $set : {
                    name: 'Nokia 3300',
                    price : '$2000'
                }
            }
);
if(result.acknowledged)
    {
        console.warn("data is updated successfully")
    }
}
updateData();