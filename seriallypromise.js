let fs = require("fs");

let f1kapromise = fs.promises.readFile("f1.text");

f1kapromise.then(function(data)
{
    console.log(data+"");
    let f2kapromise = fs.promises.readFile("f2.text");
    return f2kapromise;

}
).then(function(data)
{
    console.log(data+"");
}
).catch(function(error)
{
    console.log(error);
}
)
