import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,

  attrs: {
    images:   {embedded: 'always'},
    comments: {embedded: 'always'}
  },

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType, isSingle) {

    if (Ember.typeOf(payload) === 'array') {
      payload.forEach(function(item){
        item.thumbnail = item.images[0].url;
      });
    } else {
      payload.thumbnail = payload.images[0].url;
    }
    return this._super(store, primaryModelClass, {gallery: payload}, id, requestType, isSingle);

  }

});
