angular.module('meanApp', []);

angular.module('meanApp').controller('MainController', function() {

  // store clientPeople inside controller 
  this.people = clientPeople;

});