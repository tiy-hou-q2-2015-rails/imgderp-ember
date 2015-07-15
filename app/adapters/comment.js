import Ember from 'ember';
import DS from 'ember-data';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  createRecord: function(store, type, snapshot) {

    var data = this.serialize(snapshot, { includeId: true });    
    data.gallery_id = data.gallery;

    var url = this.urlForCreateRecord("comment", snapshot);

    return new Ember.RSVP.Promise(function(resolve, reject) {
      jQuery.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        data: data
      }).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  },

  handleResponse: function(status, headers, payload){

    if (status === 422){
      console.log("422", status, headers, payload);

      let errors = [];

      Object.keys(payload).forEach(function(key){

        payload[key].forEach(function(errorText){
          errors.push(
            {
              detail: errorText,
              source: { pointer: 'data/attributes/'+ key }
            }
          );
        })


      });

      return new DS.InvalidError(errors);

    }
    return this._super(...arguments);
  }

});
