app.service('myService', function ($log, $http) {
    var baseUrl = 'http://pokeapi.co/api/v2/';

    this.getPokemon = function () {
    var baseUrl = 'http://pokeapi.co/api/v2/';
        return $http.get()
    };

});