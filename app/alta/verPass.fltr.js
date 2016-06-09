function VerPassFilter (config) {
    return function (pass,verPass){
        return (pass === verPass)?
            false:
            config.msgError.distinctPass;
    };
}


module.exports=angular.module('alta').filter('VerPassFilter',['config',VerPassFilter]);
