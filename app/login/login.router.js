function getStates(){
	
	
	return[{
		state:'login',
		config:{
			template: require('./login.template.html'),
			url:'/login '
		}
		
	}];
}


function loginRun(routerHelper){
	routerHelper.configureStates(getStates(),'login'); //estado por defecto	
	
}



module.exports=angular.module('login',[]).run(['routerHelper',loginRun]);



//el ultimo parametro siempre es para indicar a que se le va inyectar y los anterior las funciones que lo harán 