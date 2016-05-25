
function Config (){
    return {
        validation:{
            email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            password:password.lenght<2
    },
        msgError:{
            invalidMail:'Mail mal formado',
            invalidPassword:'Password demasiado corto.'
        }
    };

}


module.exports=angular.module('common',[]).constant('config',Config());

