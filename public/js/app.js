
var videoList = [
  'http://sjc-uhls-proxy03.ustream.tv/watch/playlist.m3u8?cid=13027369&appType=11&appVersion=2&locks=97d170e1550eee4afc0af065b78cda302a97674c&geo=US&geocity=Seattle&userId=807984045&connectionId=sjc-flot-live02_807984045&ts=1427088838&ip=98.232.13.116&cdn=uhs_akamai&sgn=99f752f52c6a75e36e65558225552a0799739536',
  'http://sjc-uhls-proxy04.ustream.tv/watch/playlist.m3u8?cid=13607192&appType=11&appVersion=2&locks=97d170e1550eee4afc0af065b78cda302a97674c&geo=US&geocity=Seattle&userId=1206326944&connectionId=sjc-flot-live05_1206326944&ts=1427089211&ip=98.232.13.116&cdn=uhs_akamai&sgn=fccc0a32ee01b6cebc4253a594757f2e7fd39e83',
  'http://sjc-uhls-proxy109.ustream.tv/watch/playlist.m3u8?cid=13027422&appType=11&appVersion=2&locks=97d170e1550eee4afc0af065b78cda302a97674c&geo=US&geocity=Seattle&userId=1888548696&connectionId=sjc-flot-live06_1888548696&ts=1427089442&ip=98.232.13.116&cdn=uhs_akamai&sgn=3b633d35dbe3a5ec6047c92db506496c15235d85'
];

var getRandom = function(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
};

var setVideo = function() {
  var random;

  random = getRandom(0, videoList.length);
  
  console.log("random:", random);
  console.log('loading:', videoList[random]);

  $('body').empty().append('<video autoplay loop type="application/vnd.apple.mpegurl"></video>');

  $('video').prop('src', videoList[random]);
};

$(document).ready(function() {
  var interval = 86400000; // 1 day

  setVideo();

  var timer = setInterval(setVideo, interval);


});
