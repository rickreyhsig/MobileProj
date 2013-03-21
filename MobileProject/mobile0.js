function MyCntrl($scope) {
  $scope.languages = [
    {name:'en'},
    {name:'es'},
    {name:'ge'},
    {name:'pt'}
  ];
  $scope.language = $scope.languages[0]; //en 
}


/*function MyCntrl($scope) {
  $scope.languages = [
    {en},
    {es},
    {ge},
    {pt}
  ];
  $scope.language = $scope.languages[0]; //en 
}*/


angular.module('translatetest_en', [
    'translate',
    'translate.directives'
]).run(['translate', function(translate) {
    translate.add({
        'Hello World!': 'Hallo Welt!',
        'Hello {{user}}!': 'Hallo {{user}}!',
        "{'0': 'Nobody is viewing.','one': '1 person is viewing.','other': '{} people are viewing.'}": "{'0': 'Keiner schaut.','one': '1 Person schaut.','other': '{} Personen schauen.'}",
        'Digging in the dirt': 'Graben im Schlamm',
        'Message: {{message}}': 'Nachricht: {{message}}' ,
        'Look at the JavaScript console!' : 'Blick auf die Javascript Konsole'
    });
}]);


angular.module('translatetest_ge', [
    'translate',
    'translate.directives'
]).run(['translate', function(translate) {
    translate.add({
        'Hello World!': 'Hallo Welt!',
        'Hello {{user}}!': 'Hallo {{user}}!',
        "{'0': 'Nobody is viewing.','one': '1 person is viewing.','other': '{} people are viewing.'}": "{'0': 'Keiner schaut.','one': '1 Person schaut.','other': '{} Personen schauen.'}",
        'Digging in the dirt': 'Graben im Schlamm',
        'Message: {{message}}': 'Nachricht: {{message}} ' ,
        'Look at the JavaScript console!' : 'Blick auf die Javascript Konsole'
    });
}]);


angular.module('translatetest_es', [
    'translate',
    'translate.directives'
]).run(['translate', function(translate) {
    translate.add({
        'Hello World!': 'Ola, mundo!',
    });
}]);

angular.module('translatetest_pt', [
    'translate',
    'translate.directives'
]).run(['translate', function(translate) {
    translate.add({
        'Hello World!': 'Oi, mundo!',
    });
}]);