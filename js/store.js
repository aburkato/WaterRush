angular.module('PipesGame', ["ui.bootstrap"])
.controller('TabCtrl', function ($scope) {
    $scope.panes = [
        { title:"Power-ups + Lives", content:"store/powerups_lives.html" },
        { title:"Persistent Items", content:"store/persistent_items.html" },
        { title:"Character Items", content:"store/character_items.html" }
    ];

    $scope.navType = 'tabs';
});