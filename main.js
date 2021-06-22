
/*Work text*/
const name = ["  I am currently a 2nd year student, information technology department of chiba university.<br><br> In my free time, I often spend time to learn and learn more about programming and I also spend time working part-time to gain more experience in society. ",
              "If you have any question about my services or just say to hello , feel free contact me."]



/*Change background clor if you click button of dropdown*/
function work_text() {
  document.getElementById('text').innerHTML = name[0] + "<br>"+"<br>"+name[1] ;
}


function changeBackgroud_Deflaut() {
  document.body.style.background = "linear-gradient(to left ,#A7C4BC, #5E8B7E )";
}


function changeBackgroud_Sad() {
  document.body.style.background = "linear-gradient(to left ,#293B5F, #47597E )";
}

function changeBackgroud_Happy() {
  document.body.style.background = "linear-gradient(to left ,#A2DBFA, #39A2DB )";
}
