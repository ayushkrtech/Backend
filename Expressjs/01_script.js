const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname,"public")))


app.get('/', function(req,res){
    fs.readdir('./files',function(err,files){
        res.render("index",{files: files})
    })
})

app.post('/create', function(req,res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
        res.redirect('/')
    })
})

app.listen(3000,function(){
    console.log("chal rha h")
})






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notes</title>
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
</head>
<body>
    <div class="main w-full min-h-screen bg-zinc-900">
        <div class="form p-10 text-white">
            <form action="/create" method="post">
                <input class="block w-full rounded-md px-5 py-2 bg-zinc-800" type="text" placeholder="Title goes Here ..." name="title">
                <textarea class="block w-full rounded-md  mt-2 px-5 py-2 resize-none  bg-zinc-800" placeholder="write your task details here ..." name="details"></textarea>
                <input class="mt-2 bg-blue-600 px-5 py-2 rounded-md" type="submit" value="Create Task">
            </form>
        </div>
        <div class="tasks flex gap-3 flex-wrap p-10">
            <% if (files.length > 0){ %>
                <% files.forEach(function(val){ %>
                    <div class="task min-w-72 px-3 py-4 rounded-md bg-zinc-800">
                        <h1 class="text-white text-3xl tracking-lighter"><%= val%></h1>
                        <a class="text-blue-500 inline-block mt-3" href="">Read More ....</a>
                    </div>
                <% }) %>
            <% } else { %>
                <h3 class="text-zinc-600">no task yet</h3>
            <% } %>
        </div>
    </div>
</body>
</html>







