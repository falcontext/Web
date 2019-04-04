angular
  .module("falcontext")
  .controller("headerMenuController", function($scope) {
    $scope.isOpen = false;

    $scope.menuItems = [
      {
        text: "Messages",
        icon: "ft-messages"
      },
      {
        text: "Contacts",
        icon: "ft-contacts"
      },
      {
        text: "Schedules",
        icon: "ft-schedules"
      },
      {
        text: "Templates",
        icon: "ft-templates"
      },
      {
        text: "Reports",
        icon: "ft-reports"
      }
    ];
  });
