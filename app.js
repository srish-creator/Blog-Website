const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const _=require("lodash");

const app = express();
const posts=[];
const homestartingcontent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt accumsan tortor, ut ultrices eros. Donec porttitor nulla at vestibulum congue. Phasellus tincidunt nec nunc sit amet suscipit. Suspendisse potenti. Curabitur cursus, magna sed accumsan mattis, purus nunc viverra magna, ac commodo justo urna congue risus. Vestibulum vitae imperdiet velit. Duis sed ante lorem. Mauris vel molestie dolor, vel dictum nulla. Cras facilisis scelerisque ipsum ut iaculis. Nunc bibendum, magna id vulputate scelerisque, massa lorem bibendum tellus, at finibus nunc turpis rhoncus lectus.";
const aboutstartingcontent="Aenean pulvinar tristique libero, non tristique nulla mattis non. Donec sed diam dolor. Phasellus erat sem, imperdiet et tempus ut, vestibulum vitae tortor. Ut id mauris quis est scelerisque hendrerit. Praesent commodo velit in purus ultricies, quis laoreet orci vulputate. Vivamus viverra cursus vehicula. Duis imperdiet cursus congue.";
const contactstartingcontent="Cras dapibus rhoncus risus, quis eleifend risus consectetur a. Curabitur ac tempus libero. Maecenas nisl justo, lacinia sit amet nunc in, malesuada venenatis lacus. Maecenas sed mauris elementum, pretium nunc varius, vehicula massa. Curabitur rutrum venenatis laoreet. Duis porta ex non leo mollis, in faucibus nunc facilisis. Duis laoreet eget justo id consectetur. Aenean quis auctor mauris.";
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
app.get("/",function(req,res){
res.render("home",{Startingcontent:homestartingcontent, posts:posts});
})
app.get("/about",function(req,res){
   
    res.render("about",{AboutContent:aboutstartingcontent});
})
app.get("/contact",function(req,res){
    res.render("contact",{ContactContent:contactstartingcontent});
})
app.get("/compose",function(req,res){
    res.render("compose");
    
})
app.post("/compose",function(req,res){
    const post={
        Title:req.body.NewTitle,
        Content:req.body.NewPost
    };
    posts.push(post);

res.redirect("/");
})
app.get("/posts/:postname",function(req,res){
    
 var Postname=  _.lowerCase(req.params.postname); 
posts.forEach(function(post){
if(Postname===_.lowerCase(post.Title)){
    res.render("post",{Title1:post.Title,Content1:post.Content})
}
else{
    console.log("not found in server");
}
})
})
app.listen(3000,function(){
    console.log("Running on port 3000 locally");
});