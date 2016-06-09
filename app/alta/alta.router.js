//git status (comprueba repositorio local con los del staying area)
//git add(sube al staying area) 
//git commit
//git push(sube a las carpetas de red) "origin" -u(si no estaba creada) "master"
//git pull(descargarse los cambios al repositorio local) origin master
//git fetch(descarga los cambios sin hacer merges) origin master(rama)




function getStates() {
    return [{
        state:'alta',
        config:{
            template: require('./alta.template.html'),
            url:'/alta',
            controller: 'AltaCtrl',
            controllerAs:"alta"
        }
    }];
}




function altaRun (routerHelper) {
    routerHelper.configureStates(getStates(),'alta');
}


module.exports=angular.module('alta',[]).run(['routerHelper',altaRun]);
