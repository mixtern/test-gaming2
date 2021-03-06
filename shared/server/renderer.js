Object.toString = JSON.stringify;
function getMaps(){
    var path = require("path");
    var fs = require("fs");
    var mapPath = path.join(__dirname,"../../maps");
    var list = document.getElementById("level");
    list.innerHTML = "";
    fs.readdir(mapPath,function (err,files){
        if(err) throw err;
        files.forEach(function (item) {
            fs.stat(path.join(mapPath,item),function(err,stats){
                if (err) throw err;
                if (stats.isDirectory()){
                    list.innerHTML+="<option value=\""+item+"\">"+ item +"</option>";
                }})})})}
function getTests(){
    var path = require("path");
    var fs = require("fs");
    var testPath = path.join(__dirname,"../../tests");
    var list = document.getElementById("test");
    list.innerHTML="";
    fs.readdir(testPath,function (err,files){
        if(err) throw err;
        files.forEach(function (item) {
            fs.stat(path.join(testPath,item),function(err,stats){
                if (err) throw err;
                if (stats.isDirectory()){
                    list.innerHTML+="<option value=\""+item+"\">"+ item +"</option>";
                }})})})}
window.addEventListener("load", function() {
    getMaps();
    getTests();
    document.getElementById('command').onkeypress = function(e){
        if (e.keyCode == '13') {
            command = document.getElementById('command').value;
            document.getElementById('command').value = '';
            eval(command);
        }};
});
