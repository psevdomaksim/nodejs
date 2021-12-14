
const fs = require("fs")
const path = require("path")

/* console.log("START")

fs.mkdir(path.resolve(__dirname,"dir"),(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("Папка создана")
})

console.log("END"); */
// CRUD - CREATE READ UPDATE DELETE
const writeFileAsync = async(path, data)=>{
    return new Promise((resolve,reject)=>fs.writeFile(path, data, (err)=>{
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async(path, data)=>{
    return new Promise((resolve,reject)=>fs.writeFile(path, data, (err)=>{
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}
const readFileAsync = async(path)=>{
    return new Promise((resolve,reject)=>fs.readFile(path,{encoding:"utf-8"}, (err,data)=>{
        if(err){
            return reject(err.message)
        }
        resolve(data)
    }))
}
const removeFileAsync = async(path)=>{
    return new Promise((resolve,reject)=>fs.rm(path, (err)=>{
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}
/* writeFileAsync(path.resolve(__dirname,"test.txt"),"data")
    .then(data=>console.log(data))
    .then(()=>appendFileAsync(path.resolve(__dirname, "test.txt"),"123"))
    .then(() => readFileAsync(path.resolve(__dirname,"test.txt")))
    .then((data)=>console.log(data))
    then(()=> removeFileAsync(path.resolve(__dirname,"test.txt")))
    .catch(err=>console.log(err)) */

    const text = process.env.TEXT || "";

writeFileAsync(path.resolve(__dirname,"test.txt"),text)
    .then(() => readFileAsync(path.resolve(__dirname,"test.txt")))
    .then(data=>data.split("").length)
    .then(()=>appendFileAsync(path.resolve(__dirname, "test.txt"),"123"))
    
   
    then(()=> removeFileAsync(path.resolve(__dirname,"test.txt")))
    .catch(err=>console.log(err))
