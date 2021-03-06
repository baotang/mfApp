// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var mfApp = angular.module('resumeModule', ['ionic','ionic-source-select']);
mfApp.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
      $stateProvider
      .state("index",{
        url:"/resume-main",
        templateUrl:"resume-main.html",
        controller: "resumeControl"
      })
      .state("basic",{
        url:"/resume-basic",
        templateUrl:"resume-basic.html",
        controller: "basicControl"
      })
      .state("education",{
        url: "/education-exp/:index",
        templateUrl: "education-exp.html",
        params: {"index": ""},
        controller : "eduControl"
      })
      .state("project",{
        url:"/project-exp/:index",
        templateUrl:"project-exp.html",
        params: {"index": ""},
        controller: "projectControl"
      })
      .state("work",{
        url:"/work-exp/:index",
        templateUrl:"work-exp.html",
        params: {"index": ""},
        controller: "workControl"
      })
      .state("position",{
        url: "/expect-position",
        templateUrl: "expect-position.html",
        controller : "positionExpControl"
      })
      .state("evaluation",{
        url:"/self-evaluation",
        templateUrl:"self-evaluation.html",
        controller: "evaluatControl"
      })
      .state("other",{
        url:"/other-info",
        templateUrl:"other-info.html",
        controller: "otherControl"
      })
      .state("language",{
        url:"/language-info",
        templateUrl:"language-info.html",
        controller: "languageControl"
      });
      $urlRouterProvider.otherwise("/resume-main");
  }]);
mfApp.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });
