import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params){
    return this.store.find("gallery", params.id);
  },
  actions: {
    markAsLiked: function(gallery){
      gallery.like().then(function(){
        gallery.reload();
        gallery.set('loading', false);
      });
    },

    submitComment: function(gallery, commentData){
      commentData.gallery = gallery;

      let comment = this.store.createRecord('comment', commentData);
      comment.save().then(function(){
        commentData = {};
        gallery.reload();
      }).catch(function(errors){
        alert("Sorry", errors);
      })
    }
  }
});
