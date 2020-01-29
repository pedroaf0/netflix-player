var video = document.getElementById("myVideo");
var btn = document.getElementById("play");

function play() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "pause";
  } else {
    video.pause();
    btn.innerHTML = "play_arrow";
  }
}
var ele_full = document.getElementById("full");
is_full = false;
function full(){
    if (is_full) {
        closeFullscreen();
        ele_full.innerHTML = "fullscreen";
        is_full = false;
      } else {
        openFullscreen();
       ele_full.innerHTML = "fullscreen_exit";
        is_full = true;
      }
    }   
    var time;
        function hover(){
            clearTimeout(time);
           
            document.getElementById("content").style.opacity = "1";
            document.body.style.cursor = "default";
            document.getElementById("overlay").style.display = "none";
           time = setTimeout(function(){
                                     document.getElementById("content").style.opacity = "0";
                                     document.body.style.cursor = "none";
                                    if (video.paused) document.getElementById("overlay").style.display = "block";
                             }, 5000);
            
        }

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
video.volume = 1;
function load_video(){
    console.log(video.src);
    console.log(getUrlVars()["v"]);
    console.log(getUrlVars()["mudo"]);
    
    if (getUrlVars()["v"] != undefined) video.src = getUrlVars()["v"];
    if (getUrlVars()["mudo"] != undefined) video.volume = 0;
    if (getUrlVars()["nome"] != undefined){ 
        document.getElementById("nome").innerHTML = decodeURI(getUrlVars()["nome"]);
        document.getElementById("nome2").innerHTML = decodeURI(getUrlVars()["nome"]);
        document.title = "Netflix - "+decodeURI(getUrlVars()["nome"]);
      }
      
}

function volume(){
    if (video.volume == 0) {
        video.volume = 1;
        document.getElementById("volume").innerHTML = "volume_up";
      } else {
        video.volume = 0;
        document.getElementById("volume").innerHTML = "volume_off";
      }  
}
function replay(n){
    video.currentTime -= n;
}
function key()
	{
		if (event.keyCode == '32')
		{
      play();
      hover();
		}
  }
  // .firefox
var isFF = true;
var addRule = (function (style) {
  var sheet = document.head.appendChild(style).sheet;
  return function (selector, css) {
    if ( isFF ) {
      if ( sheet.cssRules.length > 0 ) {
        sheet.deleteRule( 0 );
      }
    
      try {
        sheet.insertRule(selector + "{" + css + "}", 0);
      } catch ( ex ) {
        isFF = false;
      }
    }    
  };
})(document.createElement("style"));

var video_slider = document.getElementById("video_slider");
function video_time_update(){
  slider_css();
  video.currentTime = video_slider.value;
}

function slider_css() {
  
    x = (video_slider.value * 100) / video_slider.max;
    video_slider.style = 'background: linear-gradient(to right, red 0% ' + x + '%, #fff ' + x + '%, white 100%) '
  };


video.ontimeupdate = function(){
  video_slider.max = Math.round(video.duration);
  video_slider.value = Math.round(video.currentTime);
  slider_css(); 
}