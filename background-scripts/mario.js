'use strict';

function onCreate(){
   var getting = browser.storage.sync.get('mario');
   getting.then((result)=>{
      if (result.mario){
         //play coin sound
         var audio = new Audio();
         audio.src=browser.extension.getURL("audio/coin.mp3");
         audio.autoplay=true;
         audio.load();
      }
   });
}

browser.bookmarks.onCreated.addListener(onCreate);
