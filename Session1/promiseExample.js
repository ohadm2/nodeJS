var arr = [[1,2,3],[8,45,2],[9,3,4]];


//console.log(arr.reduce((x,y) => x.concat(y)).reduce((x,y) => x+y));


function ASyncSum(arr)
{
    var prom = new Promise(resolve => 
        {
            var result = arr.reduce((x,y) => x.concat(y)).reduce((x,y) => x+y);
            
            setTimeout(() => resolve(result), 2000);
        })
    
    return prom;
}

ASyncSum(arr).then(result => console.log(result));

console.log("End of code");