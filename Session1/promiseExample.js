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

function useAsyncCodeViaTheThenKeyword()
{
    console.log("In function: useAsyncCodeViaTheThenKeyword");
    ASyncSum(arr).then(sum => console.log(sum));
    console.log("Ended function: useAsyncCodeViaTheThenKeyword");
}


async function useAsyncCodeViaES8AsyncAwaitFeature()
{
    console.log("In function: useAsyncCodeViaES8AsyncAwaitFeature");
    
    var sum = await ASyncSum(arr);

    console.log(sum);

    console.log("Ended function: useAsyncCodeViaES8AsyncAwaitFeature");
}


console.log("Start of code");
useAsyncCodeViaTheThenKeyword();
useAsyncCodeViaES8AsyncAwaitFeature()
console.log("End of code");