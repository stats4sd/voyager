'use strict';

describe('Service: Fields', function() {
  // load the service's module
  beforeEach(module('facetedviz'));

  beforeEach(module('facetedviz', function($provide) {
    $provide.constant('vl', vl); // vl is loaded by karma
  }));

  // instantiate service
  var Fields;
  beforeEach(inject(function(_Fields_) {
    Fields = _Fields_;
  }));

  it('should test something', function() {
  });
});