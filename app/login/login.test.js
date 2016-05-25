describe('Test del modulo login',function () {
    beforeEach(window.module('app'));
    
    describe('Test del filtro de email',function () {
        var EmailFilter, config;
        beforeEach(inject(function (EmailFilterFilter, _config_){
            EmailFilter=EmailFilterFilter;
            config=_config_;
        }));
        
        it('Test OK: El mail del filtro esta bien formado.',function(){
            var mail='pepe@mail.com';
            expect(EmailFilter(mail)).toBe(false);
        });
    });
});