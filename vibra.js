function vibra(){
    switch(video.currentTime) {
        case 20:
            console.log("vibra 20");
            window.navigator.vibrate(200);
            navigator.vibrate(200);
            navigator.vibrate(500);

          break;
        case 30:
          console.log("vibra 30");
          window.navigator.vibrate(200);
          navigator.vibrate(200);
          navigator.vibrate(500);


          break;
        default:
            break;
      }
}