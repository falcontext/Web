angular.module("falcontext").directive("headerMenu", function() {
  return {
    restrict: "E",
    controller: "headerMenuController",
    templateUrl: "common/header-menu/header-menu.template.html"
  };
});
