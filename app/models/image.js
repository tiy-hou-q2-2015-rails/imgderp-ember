import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  gallery: DS.belongsTo('gallery', {async: false} )
});
