import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  shouldReloadAll: function(){
    return true;
  }
});
