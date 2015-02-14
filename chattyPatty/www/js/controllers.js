angular.module('starter.controllers', [])


.controller('LoginCtrl', function ($scope, $ionicModal, $state) {

    console.log('Login Controller Initialized');

    $ionicModal.fromTemplateUrl('templates/signup.html', {
        scope: $scope
})

.then(function (modal) {
    $scope.modal = modal;
});

$scope.createUser = function (user) { }
$scope.signIn = function () {
    $state.go('tab.rooms'); }
})

.controller('ChatCtrl', function ($scope, Chats) {
    console.log("Chat Controller initialized");
    $scope.chats = Chats.all();
})

.controller('RoomsCtrl', function ($scope, Rooms) {
    console.log("Rooms Controller initialized");
    $scope.rooms = Rooms.all();
});


// Read more at https://www.airpair.com/angularjs/posts/build-a-real-time-hybrid-app-with-ionic-firebase#BiCSVeZ0F4wDioLW.99

// .controller('DashCtrl', function($scope) {})
//
// .controller('ChatsCtrl', function($scope, Chats) {
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   }
// })
//
// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })
//
// .controller('FriendsCtrl', function($scope, Friends) {
//   $scope.friends = Friends.all();
// })
//
// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })
//
// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });
