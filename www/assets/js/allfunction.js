/*--SideNav--*/

function openNav() {
    document.getElementById("mySidenav").style.width = "100px";
    document.getElementById("main").style.marginLeft = "100px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*--Loadweb--*/

var Ref = null;

function LoadStart(event) {
    spinner.spin(target);
}

function LoadStop(event) {
    spinner.stop();
}

function LoadError(event) {
    // alert(event.type + ' - ' + event.message);
}

function Close(event) {
     Ref.removeEventListener('loadstart', LoadStart);
     Ref.removeEventListener('loadstop', LoadStop);
     Ref.removeEventListener('loaderror', LoadError);
     Ref.removeEventListener('exit', Close);
}

function loadweb(url) {
    Ref = window.open(url, '_blank', 'location=yes,EnableViewPortScale=yes');
    Ref.addEventListener('loadstart', LoadStart);
    Ref.addEventListener('loadstop', LoadStop);
    Ref.removeEventListener('loaderror', LoadError);
    Ref.addEventListener('exit', Close);
    return false;
}

/*--Connection to NETPIE--*/

const APPID     = "Nextgenfarm";
  const APPKEY    = "SQcVvFssnEGjYn1";
  const APPSECRET = "vBDtCCUbYzRWli8BaoOoZR0tP";

    var microgear = Microgear.create({
        key: APPKEY,
        secret: APPSECRET,
        
    });
    function Light_on(){
            microgear.chat("Back_end_py","Light_ON");
            var x = document.getElementById("light_on_icon_1");
            x.style.color = "grey";

    }
    function Light_off(){
            microgear.chat("Back_end_py","Light_OFF");
            var x = document.getElementById("light_on_icon_1");
            x.style.color = "green";
    }
    function Fan_on(){
            microgear.chat("Back_end_py","Fan_ON");
            var x = document.getElementById("fan_on_icon_1");
            x.style.color = "grey";
    }
    function Fan_off(){
            microgear.chat("Back_end_py","Fan_OFF");
            var x = document.getElementById("fan_on_icon_1");
            x.style.color = "green";
    }
    function Water_on(){
            microgear.chat("Back_end_py","Water_ON");
            var x = document.getElementById("water_on_icon_1");
            x.style.color = "grey";
    }
    function Water_off(){
            microgear.chat("Back_end_py","Water_OFF");
            var x = document.getElementById("water_on_icon_1");
            x.style.color = "green";
    }
    function Mist_on(){
            microgear.chat("Back_end_py","Mist_ON");
            var x = document.getElementById("mist_on_icon_1");
            x.style.color = "grey";
    }
    function Mist_off(){
            microgear.chat("Back_end_py","Mist_OFF");
            var x = document.getElementById("mist_on_icon_1");
            x.style.color = "green";
    }
    
  microgear.on('message',function(topic,msg){

    var split_msg = msg.split(",");



    if(split_msg[4]=="Nextgenfarm"){

      document.getElementById("temp_1").innerHTML = parseInt(split_msg[0]);
      document.getElementById("humid_1").innerHTML = parseInt(split_msg[1]);
      document.getElementById("soil_1").innerHTML = split_msg[2];
      document.getElementById("light_1").innerHTML = split_msg[3];
    }
    else if(split_msg[4]=="Nextgenfarm2"){


      document.getElementById("temp_2").innerHTML = parseInt(split_msg[0]);
      document.getElementById("humid_2").innerHTML = parseInt(split_msg[1]);
      document.getElementById("soil_2").innerHTML = split_msg[2];
      document.getElementById("light_2").innerHTML = split_msg[3];
    }
    else
    {
      document.getElementById("data_3").innerHTML = "ERROR";
    }


  });
   
   
    microgear.on('connected', function() {

        microgear.setname('manual_control'); 

        microgear.subscribe("/node11");
        microgear.subscribe("/node12");

           /* alias can be renamed anytime with this function */
        document.getElementById("data").innerHTML = "";
        setInterval(function() {
            microgear.chat("Back_end_py","Connected with RASP-PI");
        },5000);
    });

    microgear.on('present', function(event) {
        console.log(event);
    });

    microgear.on('absent', function(event) {
        console.log(event);
    });
    
    microgear.connect(APPID);

/*-- User name password --*/

function check(form) { 
                
  if(form.userid.value == "Next" && form.pswrd.value == "gen") {
         window.open('index2.html','_self')
          }
  else {
        alert("Error Password or Username")
        }
    }
