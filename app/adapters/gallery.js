import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  host: "https://imgderp-api.herokuapp.com/",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },

  urlForFindAll: function(){
    return this._super("home");
  },

  pathForType: function(modelName) {
    var decamelized = Ember.String.decamelize(modelName);

    if (decamelized === "gallery"){
      return "gallery";
    } else if (decamelized === "home"){
      return "home";
    } else {
      return Ember.String.pluralize(decamelized);
    }
  }

});
