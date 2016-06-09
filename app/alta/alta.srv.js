function altaSrvFactory ($http,$q,config,ErrorManager){

    function altaClass () {
        this.doAlta = function (email, psswd) {
            var defer = $q.defer();
            var serviceConfig = config.backService.altaConf;
            
            serviceConfig.data={
                email:email,
                password:psswd,
                password2: psswdd2
            };

            $http(serviceConfig).then(function (result) {
                defer.resolve(result.data);
            }, function (error) {
                var CustomError = new ErrorManager.getCustomError(error);
                defer.reject(CustomError);
                console.log(CustomError);
            });

            return defer.promise;
        }
    }
    
    return altaClass;
}

module.exports=angular.module('alta').factory('AltaSrv',['$http','$q','config','ErrorManager',altaSrvFactory]);