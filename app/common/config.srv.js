function Config (){
	return {
		validation:{
			email:/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		}
	}
}

module.exports=angular.module('common',[]).run(['config', Config]);
