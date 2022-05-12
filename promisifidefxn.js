function promisifidefxn(){
    return new Promise(function(resolve,reject){
        let a= 1;
        let b = 1;
        if(a==b){
            resolve("equal");

        }else{
            reject("unequal");

        }
    })
}

let somepromise = promisifidefxn();

somepromise.then(function(x){
    console.log(x);
})

somepromise.catch(function(err){
    console.log(err);

})
