import Ember from 'ember';

export default Ember.Component.extend({
  gallery: null,

  actions: {
    submit: function() {
      this.sendAction('submit', this.get('gallery'), {
        name: this.get('name'),
        text: this.get('text')
      });
    }
  }
});
