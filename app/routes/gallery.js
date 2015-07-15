import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params){
    return this.store.find("gallery", params.id);
  },
  actions: {
    markAsLiked: function(gallery){

      Ember.$.post("/api/gallery/" + gallery.id + "/like").then(function(){
        gallery.reload();
        gallery.set('loading', false);
      });
    },

    submitComment: function(gallery, commentData){
      commentData.gallery_id = gallery.get('id');
      Ember.$.post("/api/comments", commentData).then(function(){
        gallery.reload();
      })
    }
  }
});
