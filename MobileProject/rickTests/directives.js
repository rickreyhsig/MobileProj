angular.module('components',[])
.directive('helloWorld', function() {
        return{
                restrict: 'E', 
                template: '<span>Hello World!</span>'

        }    
})

angular.module('HelloApp', ['components'])
