angular.module('cs4320aTeamApp')
  .controller('MainCtrl', function($scope, $location, $http, $window){
  	/* Temporary applicant name and ferpa score to make UI skeleton look a little better
	Be sure to Delete once real data is being brought in */
	$scope.applicant = "John";
	$scope.name = "John Doe";
	$scope.ferpa = 84;
    $scope.DoB = new Date("September 1, 1939");
    $scope.title = "Director";
    $scope.dept = "The Dept";
    $scope.paw = "jdoe39";
    $scope.id = "11111111";
    $scope.addr = "1111 East Broadway";
    $scope.phoneNum = "(555)555-5555";
	/* Delete above code once real data is brought in */

	//Grab current URL
	$scope.currentPath = $location.path();

	//Change instruction menu based on ferpa score
	if($scope.ferpa > 85){
		$scope.CurrentInstructionSet = true;
	};
	
	//On click, changes url to root/form, triggering a view change
	$scope.goToForm = function(){
   		$location.path('/form');
	}
    $scope.takeFERPA = function(){
        $window.location.href = "http://myzoutraining.missouri.edu/ferpa.html";
    }

	//If on form page, do this
	if($scope.currentPath === '/form'){
    		/* Edit and uncomment once php is implemented.
    		$http.get('/model/secLevels.php')
    		.success(function(response){
        		$scope.securityLevels = response.securityLevels;
    		});
    		*/
        
        //Temp dummy data for securityLevels object
        $scope.securityLevels = [
			{"number":"1", "questions":["question1","question2"]},
			{"number":"2", "questions":["question3","question4"]}
        ];
        
        /* To submit security level request data
        $scope.saveRequest = function(){
           $http.post('/model/saveRequest.php', {
                requestType: $scope.requestType,
                studentWorker: $scope.studentWorker,
                secAnswers: $scope.securityLevels
            }); 
        }
        */
        
	};
  });
