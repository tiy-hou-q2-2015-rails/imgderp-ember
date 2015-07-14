import Ember from 'ember';

export default Ember.Component.extend({

  tagName: "gallery-like",

  classNames: ['pull-right'],

  loading: function(){
    return this.get("model").get("loading");
  }.property("model.loading"),

  classNameBindings: ['loading'],

  click() {
    this.get("model").set("loading", true);
    this.sendAction('action', this.get('param'));
  }
});
