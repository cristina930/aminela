
function Config (){
    return {

        validation:{
            email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,

            pass: /^.{2,}$/
        },
        msgError:{
            invalidMail:'Mail mal formado',
            invalidPass:'Password mal formado'
        },
        backService:{
            loginConf:{
                method:'POST',
                url:'/test',
                responseType: 'json'
            }
        },
        serviceError:{
            "404":"No se encuentra el servicio, pongase en contacto con el administrador",
            "401":"Usuario o password incorrecto",
            "403":"No tienes permisos para acceder",
            "500":"Fallo del sistema pongase en contacto con el administrador",
            default:"Buena suerta y que la fuerza te acompañe"

        }
    };

}


module.exports=angular.module('common',[]).constant('config',Config());
