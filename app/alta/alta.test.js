describe('Test del modulo alta', function (){
   beforeEach(window.module('app'));
   
   describe('Test del servicio de alta',function () {
       
       var $httpBackend;
       var AltaSrv;
       var config;
       
       beforeEach(inject(function (_$httpBackend_, _AltaSrv_, _config_) {
           $httpBackend = _$httpBackend_;
           AltaSrv = _AltaSrv_;
           config = _config_;
       }));
     
      it('Test OK: Probemos que obtenemos los datos correctos si el alta es un exito',function () {  
       var altaData = {
           email: 'pepe@email.com',
           password: '12345',
           checkPassword:'12345'
       }
       
       var servConfig = config.backService.altaConf;
       var service = new AltaSrv();
       $httpBackend.expect(servConfig.method, servConfig.url, altaData).respond(function () {
           return [200, { data: 'OK' }, {}];
       });

       service.doAlta(altaData.email, altaData.password,altaData.checkPassword).
           then(function (result) {
               expect(result.data).toBe('OK');
           }, function (error) {
               expect(false).toBe(true);
           });

       $httpBackend.flush();
       
      });
      
      it('Test Fail: Probemos que obtenemos los datos correctos si el alta es un error', function () {
          var altaData = {
              email: 'pepe@email.com',
              password: '12345',
              checkPassword: '12345'
          }

          var servConfig = config.backService.altaConf;
          var service = new AltaSrv();
          var errorConfig = config.serviceError;
          $httpBackend.expect(servConfig.method, servConfig.url, altaData).respond(function () {
              return [404, {}, {}];
          });

          service.doAlta(altaData.email, altaData.password, altaData.checkPassword).
              then(function (result) {
                  expect(false).toBe(true);
              }, function (error) {
                  expect(error.usuario.msg).toBe(errorConfig['404']);
              });

          $httpBackend.flush();

      });
      
})});