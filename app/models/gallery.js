import DS from 'ember-data';
import { memberAction, collectionAction } from 'ember-api-actions';

export default DS.Model.extend({
  likes: DS.attr('number'),
  thumbnail: DS.attr('string'),
  created_at: DS.attr('number'),
  createdAtDate: function(){
    let d = new Date(0);
    d.setUTCSeconds(this.get("created_at"));
    return d;
  }.property("created_at"),
  images: DS.hasMany('image', {async: true} ),
  comments: DS.hasMany('comment', {async: true} ),

  like:        memberAction(    { path: 'like', type: "POST" }),

  sortedComments: function(){
    return this.get('comments').sortBy("created_at").reverse();
  }.property("comments.@each")
});
