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
	$scope.login=function(){
		console.log($scope.userObj)
		UserService.login($scope.userObj).then(function(response){
			$rootScope.currentUser=response.data
			$cookieStore.put('userDetails',response.data)
			$location.path('/home')
		},function(response){
			$scope.error=response.data.message
			$location.path('/login')
		})
		}
	if($rootScope.currentUser!=undefined){
		UserService.getUser().then(function(response){
			
		}
	}
	}
)
