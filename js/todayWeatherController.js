angular.module('scotchApp').controller('todayWeatherController', function($scope) {
	// alert("kinjal")
	$scope.weatherDetails = false;
	$scope.searchWeather = function(){
		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://api.openweathermap.org/data/2.5/weather?q="+$scope.city+","+$scope.country+"&units=metric&appid=8bdd2ff4a457faa14e4c0bfa45d27223",
		  "method": "GET"
		}

		$.ajax(settings).done(function (response) {
			console.log('response ::>>> ',JSON.stringify(response))
			// var response = {"coord":{"lon":72.81,"lat":21.19},"weather":[{"id":800,"main":"Clear","description":"sky","icon":"01d"}],"base":"stations","main":{"temp":34.44,"pressure":1019.92,"humidity":72,"temp_min":34.44,"temp_max":34.44,"sea_level":1020.04,"grnd_level":1019.92},"wind":{"speed":2.69,"deg":342.503},"clouds":{"all":0},"dt":1524573084,"sys":{"message":0.0179,"country":"IN","sunrise":1524530564,"sunset":1524576674},"id":1255364,"name":"Surat","cod":200};
			$scope.main = response.weather[0].main;
			$scope.tempMin = response.main.temp_min;
			$scope.tempMax = response.main.temp_max;
			$scope.humidity = response.main.humidity;
			$scope.weatherDetails = true;
			$scope.$apply();
			$scope.description = response.weather[0].description;
			console.log("$scope.description :: ",$scope.description,$scope.weatherDetails);
			if($scope.description.toLowerCase().match('clear')){
				$(".weather").removeClass("weatherRain").removeClass("weatherCloud").removeClass("weatherNone").addClass('weatherClear');
			}else if($scope.description.toLowerCase().match('cloud')){
				$(".weather").removeClass("weatherRain").removeClass("weatherClear").removeClass("weatherNone").addClass('weatherCloud');
			}else if($scope.description.toLowerCase().match('rain')){
				$(".weather").removeClass("weatherClear").removeClass("weatherCloud").removeClass("weatherNone").addClass('weatherRain');
			}else{
				$(".weather").removeClass("weatherRain").removeClass("weatherCloud").removeClass("weatherClear").addClass('weatherNone');
			}
		});
	};
});

