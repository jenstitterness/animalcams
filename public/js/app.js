
var videoList = [
  'http://tcdn.ustream.tv/video/57701782?preset_id=2&e=1427020273&h=35939f909c2478072ba2d0b652cc951a',
  'http://tcdn.ustream.tv/video/45134284?preset_id=2&e=1427020537&h=84f1eaa8bca122ea14f1efb92b6affc8',
  'http://tcdn.ustream.tv/video/58437319?preset_id=2&e=1427020500&h=8dce9f98e443140517f6920b8f48d06d',
  'http://tcdn.ustream.tv/video/57152633?preset_id=2&e=1427020377&h=24ae7c205d19a212a35d3e8624d92957',
  'http://upmv09.ustream.tv/0/1/40/40771/40771275/1_12569659_40771275.mp4?e=1427616057&h=8445d996ab2906bd754d033075404456&tracking=b2094a_492_1_1_0&peer=COMCAST-PEER.COMCAST2-PEER',
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

  $('body').empty().append('<video autoplay loop></video>');

  if (regex.test(videoList[random])) {
    $("video").attr('type', "application/vnd.apple.mpegurl");
  }

  $('video').prop('src', videoList[random]);
};

$(document).ready(function() {
  var interval = 86400000; // 1 day

  setVideo();

  var timer = setInterval(setVideo, interval);


});
