import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true
  // Handle errors, which ember-data wants as JSON-API compliant errors


});
