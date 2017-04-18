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

 function onDeviceReady() {
        document.addEventListener("deviceready", onDeviceReady, false);
         var ref = window.open('http://apache.org', '_blank', 'location=yes');
         ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
         ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
         ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
         ref.addEventListener('exit', function(event) { alert(event.type); });
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

/*--InputTimer--*/
function Timer() {
    document.getElementById("count").value = "";
}



/*-- User name password --*/

function check(form) { 
                
  if(form.userid.value == "next" && form.pswrd.value == "gen") {
         window.open('index2.html','_self')
          }
  else {
        alert("Error Password or Username")
        }
    }


document.getElementById("test5") = 100;


