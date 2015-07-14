import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  urlForFindAll: function(){
    return "/home";
  },

  pathForType: function(modelName) {
    var decamelized = Ember.String.decamelize(modelName);

    if (decamelized === "gallery"){
      return "gallery";
    } else {
      return Ember.String.pluralize(decamelized);
    }
  }

});
