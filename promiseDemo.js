//Demo1 Promise 
/*
console.log('here we go');
new Promise( resolve =>{
	setTimeout(()=>{
		resolve('hello');
	},2000)
})
  .then(value=>{
  	console.log(value+' world');
  })
*/



//Demo2
/*
console.log('here we go')
new Promise(resolve =>{
	setTimeout(()=>{
		resolve('hello')
	},2000);
})
	.then(value=>{
		console.log(value)
		return new Promise(resolve=>{
			setTimeout(()=>{
				resolve('world')
			},2000)
		})
	})
	.then(value=>{
		console.log(value+' world')
	})
*/

//Demo3
/*
console.log('start')
let promise = new Promise(resolve =>{
	setTimeout(()=>{
		console.log('the promise fulfilled')
		resolve('hello world')
	},1000)
})

setTimeout(()=>{
	promise.then(value=>{
		console.log(value)
	})
},3000)
*/

//Demo4
/*
console.log('here we go');
new Promise(resolve=>{
		setTimeout(()=>{
			resolve('hello')
		},2000)
	})
	.then( value => {
		console.log(value);
		console.log('everyone');
		(function () {
			return new Promise(resolve =>{
				setTimeout(()=>{
					console.log('Mr.Sherro Shen')
					resolve('Merry Xmas')
				},2000)
			})
		}())
		return false
	})
	.then( value => {
		console.log(value + ' world')
	});
*/

//Demo5
console.log('start');
new Promise( resolve => {
    console.log('Step 1');
    setTimeout(() => {
        resolve(100);
    }, 1000);
})
    .then( value => {
        return new Promise(resolve => {
            console.log('Step 1-1');
            setTimeout(() => {
                resolve(110);
            }, 1000);
        })
            .then( value => {
                console.log('Step 1-2');
                return value;
            })
            .then( value => {
                console.log('Step 1-3');
                return value;
            });
    })
    .then(value => {
        console.log(value);
        console.log('Step 2');
    });