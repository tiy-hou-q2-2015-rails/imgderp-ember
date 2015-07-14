import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll("gallery").then(function(galleries){
      return galleries.sortBy("likes").reverse();
    });
  }
});
