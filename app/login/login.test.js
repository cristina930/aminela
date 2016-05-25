describe('Test del modulo login', function (){
	beforeEach(windows.module('app'));
	
	describe('Test del filtro de email', function(){
		var EmailFilter, config;

		beforeEach(inject(function (EmailFilterFilter, _config_){
			EmailFilter = EmailFilterFilter;
			config = _config_;
		}));

		it('Test OK: El email esta bien formado',function(){
			var mail = 'pepe@email.com';
			expect(EmailFilter(mail)).toBe(false);
		});

		it('Test KO: El email esta infalido',function(){
			var mail = 'pepe@email.com';
			expect(EmailFilter(mail)).toBe(config.msgError.invalidMail);
		});


	});

});