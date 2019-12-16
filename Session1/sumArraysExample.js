var arr = [ [1,2], [3,4], [5,6] ];


console.log(arr.map(x=>x.map(y=>y*2)));
console.log(arr.map(x=>x.reduce((y,z) => y*z)));