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
};


var ModalInstanceCtrl = function ($scope, $modalInstance) {
  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss();
  };

    $scope.buyPowerups = function () {
    // TODO
  };

    $scope.replayGame = function () {
    // TODO
  };

    $scope.playGame = function () {
    // TODO
  };
};