
function Config (){
    return {

        validation:{
            email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        },
        msgError:{
            invalidMail:'Mail mal formado'
        }
    };

}


module.exports=angular.module('common',[]).constant('config',Config());
