/**
 * 
 */
app.factory('UserService',function($http){
	var userService={}
	var BASE_URL="http://localhost:8080/collaborationMiddleware"
		userService.registerUser=function(user){
		$http.post(BASE_URL+"/registeruser",user)
	}
	return userService;
})