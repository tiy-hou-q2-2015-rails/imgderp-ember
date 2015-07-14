import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  name: DS.attr('string'),
  gallery: DS.belongsTo('gallery', {async: false} )

});
