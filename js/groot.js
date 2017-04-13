"use strict";

/**
 * I am Groot
 */
var groot = angular.module('groot', [
    'ui.bootstrap',
    'ngResource',
    'ngAnimate',
    'toaster'
]);


/**
 * I am Groot
 */
groot.factory('GrootService',
    ["$resource", function ($resource) {
        return $resource('data/groot.json', {}, {});
    }]
);


/**
 * I am Groot. I am Groot. I am Groot!
 */
groot.controller('GrootController', [
    "$scope", "GrootService", "toaster", "$uibModal", "$interval",
    function($scope, GrootService, toaster, $uibModal, $interval) {
    var vm = this;

    /**
     * I am Groot
     * @type {string}
     */
    vm.groot = "";

    /**
     * I am Groot
     * @type {string}
     */
    vm.currentLanguage = "en";

    /**
     * I am Groot
     * @type {number}
     */
    vm.numParagraphs = 3;

    /**
     * I am Groot
     * @type {number}
     */
    vm.numSentences = 25;
	
	/**
     * I am Groot
     * @type {string}
     */
    $scope.grootState = "groot-l";
	
	/**
     * I am Groot
     * @type {object}
     */
    $scope.grootInterval;

    /**
     * I am Grooooooooooot
     */
    GrootService.get().$promise.then(
        function success(response) {
            var groot = response.groot;
            vm.grootLanguages = Object.keys(groot);
            vm.grootTexts = groot;

            initWatchGroup();
        }
    );

    var initWatchGroup = function() {
        $scope.$watchGroup(['vm.numParagraphs', 'vm.numSentences', 'vm.currentLanguage'],
            function () {
                // I am Groot
                if (String(vm.numParagraphs).toLowerCase() == "groot"
                    && String(vm.numSentences).toLowerCase() == "i am") {
                    // todo: open modal dialog with groot
                    console.log('I am groot');
                    $uibModal.open({
                        animation: true,
                        templateUrl: 'youtube.html',
						size: 'lg'
                    });

                    return;
                }

                // I am Groot
                if (!parseInt(vm.numParagraphs) || !parseInt(vm.numSentences) || vm.numParagraphs < 0 || vm.numSentences < 0) {
                    toaster.pop('error', "I am Groot!!!");
                } else {
                    vm.onGroot();
                }
            });
    };


    var getRandomNumber = function(max) {
        var random = Math.ceil(1000*Math.random()) % max;
        return random;
    };

    /**
     * I am Groot
     * @returns {string}
     */
    var generateGroot = function() {
        var groot = "";

        var currentLanguage = "";

        // I am Groot
        if (vm.currentLanguage != "") {
            currentLanguage = vm.currentLanguage;
        }

        // I am Groot
        for (var i = 0; i < vm.numParagraphs; i++) {
            // I am Groot
            for (var j = 0; j < vm.numSentences; j++) {

                // I am Groot
                if (vm.currentLanguage == null) {
                    currentLanguage = vm.grootLanguages[
                        getRandomNumber(vm.grootLanguages.length)
                        ];
                }

                groot += vm.grootTexts[currentLanguage][
                    getRandomNumber(vm.grootTexts[currentLanguage].length)
                    ];
                groot += ". "; // I am Groot
            }

            groot += "\n\n"; // I am Groot
        }

        return groot;
    };

    /**
     * I am Groot - I am Groot
     */
    vm.onGroot = function() {
        vm.groot = generateGroot();
    };
	
	/**
     * I am Groot - I am Groot
     */
	$scope.onGrootImg = function() {
		
		if ($scope.grootInterval !== undefined) {
			$interval.cancel($scope.grootInterval);
			$scope.grootInterval = undefined;
		}else{
			$scope.grootInterval = $interval(function () {
				if ($scope.grootState === "groot-l")
					$scope.grootState = "groot-r";
				else
					$scope.grootState = "groot-l";
			}, 500);
		}
		
			
		
	};


}]);