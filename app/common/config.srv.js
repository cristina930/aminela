<<<<<<< HEAD
function Config() {
    return{
=======
function Config (){
    return {
>>>>>>> upstream/master
        validation:{
            email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        },
        msgError:{
            invalidMail:'Mail mal formado'
        }
    };
<<<<<<< HEAD
    
}

modulo.exports=angular.module('common',[]).constant('config',Config);
=======
}


module.exports=angular.module('common',[]).constant('config',Config());
>>>>>>> upstream/master
