const fs = require('fs');
// write -  file system 
fs.writeFile("hey.txt","hello world",function(err){
    if (err) console.error(err);
    else console.log("done")
})
// append -  file system 
fs.appendFile("hey.txt","i am ayush",function(err){
    if (err) console.error(err);
    else console.log("done")
})
// rename -  file system 
fs.rename("hey.txt",'hello.txt',function(err){
    if (err) console.error(err);
    else console.log("done");
})
// copy a file into another file -  file system 
fs.copyFile('hello.txt',"chach.txt",function(err){
    if (err) console.error(err.message);
    else console.log(done)
})
// remove file -  file system 
fs.unlink("chach.txt",function(err){
    if (err) console.error(err);
    else console.log('done')
})
// remove folder -  file system
fs.rm("./copy",{recursive:true},function(err){
    if (err) console.error(err);
    else console.log("removed")
})
// readfile -  file system   utf8 it specify encoding for string
fs.readFile("hello.txt",'utf8',function(err,data){
    if (err) console.error(err);
    else console.log(data)
})
// read a dir - file system
fs.readdir("./copy",'utf8',function(err,files){
    if (err) console.error(err);
    else console.log(files)
})
// create a dir - file system  if we add recursive:true its will not throw err if already a folder of same name if created
fs.mkdir('./basics',function(err){
    if (err) console.error(err);
    else console.log("done")
})
