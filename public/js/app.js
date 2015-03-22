
var videoList = [
  'http://tcdn.ustream.tv/video/57701782?preset_id=2&e=1427020273&h=35939f909c2478072ba2d0b652cc951a',
  'http://tcdn.ustream.tv/video/45134284?preset_id=2&e=1427020537&h=84f1eaa8bca122ea14f1efb92b6affc8',
  'http://tcdn.ustream.tv/video/58437319?preset_id=2&e=1427020500&h=8dce9f98e443140517f6920b8f48d06d',
  'http://tcdn.ustream.tv/video/57152633?preset_id=2&e=1427020377&h=24ae7c205d19a212a35d3e8624d92957',
  'http://sjc-uhls-proxy02.ustream.tv/watch/playlist.m3u8?cid=10371840&appType=11&appVersion=2&locks=97d170e1550eee4afc0af065b78cda302a97674c&geo=US&geocity=Seattle&userId=555456111&connectionId=sjc-flot-live04_555456111&ts=1427006808&ip=98.232.13.116&cdn=uhs_akamai&sgn=6b761bdf8f58086d1bcaaae03efd5a111643cccc',
  'http://api.new.livestream.com/accounts/4175709/events/3856342/broadcasts/81152060.m3u8?dw=100&hdnea=st=1427010068~exp=1427010968~acl=/i/4175709_3856342_fd42e63a_1@137093/*~hmac=a3688759e8b3d5432eba47485973c952be236ccdad544f0bbad37240a687b237'
];

var getRandom = function(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
};

var setVideo = function() {
  var random,
      regex = /livestream/;

  random = getRandom(0, videoList.length);
  console.log("random:", random);
  console.log('loading:', videoList[random]);

  $('body').empty().append('<video autoplay ></video>');

  if (regex.test(videoList[random])) {
    $("video").prop('type', "application/vnd.apple.mpegurl");
  }

  $('video').prop('src', videoList[random]);
};

$(document).ready(function() {
  setVideo();
  var timer = setInterval(setVideo, 30000);


});
