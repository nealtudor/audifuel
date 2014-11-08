var txt = '';
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
    txt = xmlhttp.responseText;
  }
};
xmlhttp.open("GET","AudiA4.csv",true);
xmlhttp.send();

var date = [];
var mpg = [];
var cost = [];
for(i = 1; i < txt.length; i++) {
    var line = txt[i].split(",");
    date.push(line[0]);
    mpg.push(line[1]);
    cost.push(line[2]);
}