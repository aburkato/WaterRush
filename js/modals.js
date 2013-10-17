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

  $scope.replayGame = function () {
    // TODO
  };

  $scope.playGame = function () {
    // TODO
  };

  $scope.resumeGame = function () {
    // TODO
  };

  $scope.openOptions = function () {
    // TODO
  };
};