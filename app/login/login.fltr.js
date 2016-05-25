
function EmailFilter (config) {
    return function (email){
        return (config.validation.email.test(email))?
            false:
            config.msgError.invalidMail;
    };
}

module.exports=angular.module('login').filter('EmailFilter',['config',EmailFilter]);

function PasswordFilter (config) {
    return function (password){
        return (config.validation.password.test(password))?
            false:
            config.msgError.invalidPassword;
    };
}

module.exports=angular.module('login').filter('PasswordFilter',['config',PasswordFilter]);
