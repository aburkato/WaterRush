angular.module('PipesGame', ['ui.bootstrap']);
var ModalCtrl = function ($scope, $modal, $log) {
  $scope.PreGame = function () {
    var modalInstance = $modal.open({
      templateUrl: 'pregame.html',
      controller: ModalInstanceCtrl,
      backdrop: 'static',
      keyboard: false
    });
  };

  $scope.PostGame = function () {
    var modalInstance = $modal.open({
      templateUrl: 'postgame.html',
      controller: ModalInstanceCtrl,
      backdrop: 'static',
      keyboard: false
    });
  };

  $scope.PauseGame = function () {
    var modalInstance = $modal.open({
      templateUrl: 'pausegame.html',
      controller: ModalInstanceCtrl
    });
  };

  $scope.Options = function () {
    var modalInstance = $modal.open({
      templateUrl: 'options.html',
      controller: ModalInstanceCtrl
    });
  };

  $scope.NewsFeed = function () {
    var modalInstance = $modal.open({
      templateUrl: 'newsfeed.html',
      controller: ModalInstanceCtrl
    });
  };

  $scope.Leaderboard = function () {
    var modalInstance = $modal.open({
      templateUrl: 'leaderboard_modal.html',
      controller: ModalInstanceCtrl
    });
  };

  $scope.Store = function () {
    var modalInstance = $modal.open({
      templateUrl: 'store.html',
      controller: ModalInstanceCtrl
    });
  };

  $scope.LogIn = function () {
    var modalInstance = $modal.open({
      templateUrl: 'login.html',
      controller: ModalInstanceCtrl,
      backdrop: 'static',
      keyboard: false
    });
  };
};


var ModalInstanceCtrl = function ($scope, $modalInstance) {
  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss();
  };

  $scope.goHome = function () {
    window.open('home.html', '_self', false);
  };

  $scope.buyPowerups = function () {
    window.open('store.html', '_self', false);
  };

  $scope.openStore = function () {
    window.open('store.html', '_self', false);
  };

  $scope.sendGift = function () {
    // TODO
  };

  $scope.playLevel = function () {
    // TODO
  };


  $scope.replayGame = function () {
    // TODO
  };

  $scope.playGame = function () {
    // TODO
  };

  $scope.resumeGame = function () {
    // TODO
  };
};