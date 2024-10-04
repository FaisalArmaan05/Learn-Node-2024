const app=require('./app')
let arr=[4,1,6,3,4,89,0];

// conditional
if (app?.x ===10) {
    console.log('x is 10');
}
//loop
for (let i=1; i<=5;  i++ ) {
    console.log(i);
}
console.log("function call sum",app.xyzFunc())
const result =arr.filter((item)=>{
    return item>=4
});
console.warn(result);