angular.module("falcontext").config(function($translateProvider) {
  var language = (
    window.navigator.userLanguage || window.navigator.language
  ).toLowerCase();

  $translateProvider.useStaticFilesLoader({
    prefix: "langs/",
    suffix: ".json"
  });

  $translateProvider.preferredLanguage("en");
});
