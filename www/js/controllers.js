angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('NewsCtrl', function($scope, news) {
  $scope.news = news;
})

.controller('ConcertsCtrl', function($scope, concerts) {
  $scope.concerts = concerts;
})

.controller('ConcertCtrl', function($scope, concert, $stateParams) {
  $scope.concert = concert;
})

.factory('news', function(){
  var news = [
    { header: '2014: Et fantastisk år', id: 1 , imgSrc: '../img/USATour.jpg', date:'12.01.2015', url:'http://www.stavanger-brassband.com/sbb/11/1/2015/2014-et-fantastisk-r'},
    { header: 'SBB i toppform!', id: 2 , imgSrc:'../img/Siddis+Brass+2014.jpg', date:'10.11.2014', url:'http://www.stavanger-brassband.com/sbb/10/11/2014/sbb-i-toppform'},
    { header: 'Siddis Brass 2014', id: 3 , imgSrc:'../img/jean-d-arc.jpg', date:'26.10.2014', url:'http://www.stavanger-brassband.com/sbb/26/10/2014/siddis-brass-2014'},
  ];

  return news;
})

.factory('concerts', function(){
  var concerts = [
    { title: 'Før NM konsert', id: 1 , imgSrc: '../img/nm_brass.jpg'},
    { title: 'NM Brass Plikt', id: 2 , imgSrc:'../img/nm_brass.jpg', date:'06.02.2015'},
    { title: 'NM Brass Selvvalgt', id: 3 , imgSrc:'../img/nm_brass.jpg' , date:'07.02.2015'},
    { title: 'Siddis Brass', id: 4 , imgSrc:'../img/siddis.jpg', date:'15.10.2015'},
    { title: 'SBB Talent', id: 5, imgSrc:'../img/SBB-logo.jpg', date:'15.10.2015' },
    { title: 'Julekonsert', id: 6 , imgSrc:'../img/SBB-logo.jpg' , date:'15.12.2015'}
  ];

  return concerts;
});