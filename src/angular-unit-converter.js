var auc = angular.module('angular-unit-converter', []);

auc.directive("angularUnitConverter", function($filter) {
	return {
		require: 'ngModel',
		scope: {
			convertFrom: '@',
			convertTo: '@'
		},
		link: function(scope, ele, attr, ngModel) {

			Decimal.config({
				precision: 10,
				errors: false
			});

			var units = {
				// Size/distance
				"mm": 0.001,
				"cm": 0.01,
				"m": 1,
				"km": 1000,
				"in": 0.0254,
				"ft": 0.3048,
				"yd": 0.9144,
				"mi": 1609.344,

				// Weight
				"mg": 0.001,
				"g": 1,
				"kg": 1000,
				"oz": 28.3495231,
				"lb": 453.59237
			};

			scope.do_convertFrom = function(value) {
				if(!scope.convertFrom || scope.convertFrom === "") return value;

				var from = new Decimal(units[scope.convertFrom]);
				var to = new Decimal(units[scope.convertTo]);
				return (new Decimal(value).dividedBy(from.dividedBy(to))).toNumber();
			};

			scope.do_convertTo = function(value) {
				if(!scope.convertTo || scope.convertTo === "") return value;

				var from = new Decimal(units[scope.convertFrom]);
				var to = new Decimal(units[scope.convertTo]);
				return (new Decimal(value).times(from.dividedBy(to))).toNumber();
			};

			var p = function(viewValue) {
				var m = viewValue.match(/^\-?\d+((\.|\,)\d+)?$/g);
				if (m !== null) {
					return scope.do_convertFrom(parseFloat(viewValue));
				}
			};
			var f = function(modelValue) {
				return scope.do_convertTo(parseFloat(modelValue));
			};

			ngModel.$parsers.push(p);
			ngModel.$formatters.push(f);

			scope.$watch("[convertFrom, convertTo]", function(n) {
				ngModel.$modelValue = '';
			});

		}
	};
});
