<<<<<<< HEAD
function EmailFilter (config){
	return function (email){
		return (config.validation.email.test(email))?false:config.msgError.invalidEmail;
	}
=======
function EmailFilter (config) {
    return function (email){
        return (config.validation.email.test(email))?
            false:
            config.msgError.invalidMail;
    };
>>>>>>> upstream/master
}

module.exports=angular.module('login').filter('EmailFilter',['config',EmailFilter]);