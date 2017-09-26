/**
 * 
 */
app.controller('UserController',function($scope,UserService,$location){
	$scope.registerUser=function(){
		console.log("User data is" +$scope.user)
		UserService.registerUser().then(function(response){
	    console.log(response.data)
	    console.log(response.status)
	    $location.path('/home')
	},function(response){
		console.log(response.data)
		console.log(response.status)
		$scope.error=response.data
		$location.path('/register')
	})
	
	}
})
