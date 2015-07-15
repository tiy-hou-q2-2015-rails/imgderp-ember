import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  host: "https://imgderp-api.herokuapp.com/",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },

  shouldReloadAll: function(){
    return true;
  }
});
