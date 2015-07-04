describe('Testing directive', function() {
	var scope, element, html, timeout;

	beforeEach(function (){
		//load the module
		module('angular-unit-converter');

		//set our view html.
		html = '<input id="e" ng-model="value" type="text" placeholder="0" angular-unit-converter convert-from="{{ convertFrom }}" convert-to="{{ convertTo }}" /> ';

		inject(function($compile, $rootScope, $timeout) {
			//create a scope (you could just use $rootScope, I suppose)
			scope = $rootScope;
			timeout = $timeout;

			//get the jqLite or jQuery element
			element = angular.element(html);

			//compile the element into a function to process the view.
			$compile(element)($rootScope);
			element.scope().$digest();

			$(document.body).append(element);
		});
	});

	afterEach(function() {
		element.remove();
		elementn = null;
	});

	it('Should convert 25mm to 0.9842519685in', function() {
		scope.value = 25;
		scope.convertFrom = "mm";
		scope.convertTo = "in";
		element.scope().$digest();
		expect($('input')).toHaveValue('0.9842519685');
	});

	it('Should convert 0.9842519685mm to 25in', function() {
		scope.value = 0.9842519685;
		scope.convertFrom = "in";
		scope.convertTo = "mm";
		element.scope().$digest();
		expect($('input')).toHaveValue('25');
	});
	
	it('Should convert 25in to 635mm', function() {
		scope.value = 25;
		scope.convertFrom = "in";
		scope.convertTo = "mm";
		element.scope().$digest();
		expect($('input')).toHaveValue('635');
	});

	it('Should convert 635mm to 25in', function() {
		scope.value = 635;
		scope.convertFrom = "mm";
		scope.convertTo = "in";
		element.scope().$digest();
		expect($('input')).toHaveValue('25');
	});

	it('Should convert 12mi to 1931220cm', function() {
		scope.value = 12;
		scope.convertFrom = "mi";
		scope.convertTo = "cm";
		element.scope().$digest();
		expect($('input')).toHaveValue('1931212.8');
	});
	
	it('Should convert 11mg to 0.00002425084884lb', function() {
		scope.value = 11;
		scope.convertFrom = "mg";
		scope.convertTo = "lb";
		element.scope().$digest();
		expect($('input')).toHaveValue('0.00002425084884');
	});
	
	it('Should convert 0.00002425084884lb to 11mg', function() {
		scope.value = 0.00002425084884;
		scope.convertFrom = "lb";
		scope.convertTo = "mg";
		element.scope().$digest();
		expect($('input')).toHaveValue('11');
	});
	
	it('Should convert 2.3kg to 81.1301125oz', function() {
		scope.value = 2.3;
		scope.convertFrom = "kg";
		scope.convertTo = "oz";
		element.scope().$digest();
		expect($('input')).toHaveValue('81.13011255');
	});
	
	it('Should convert 81.13011255oz to 2.3kg', function() {
		scope.value = 81.13011255;
		scope.convertFrom = "oz";
		scope.convertTo = "kg";
		element.scope().$digest();
		expect($('input')).toHaveValue('2.3');
	});
});
