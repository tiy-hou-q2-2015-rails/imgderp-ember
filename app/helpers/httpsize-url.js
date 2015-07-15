import Ember from 'ember';

export function httpsizeUrl(params/*, hash*/) {
  let returnParams = [];
  params.forEach(function(url){
    returnParams.push(url.replace("http:", "https:"));
  });

  return returnParams;
}

export default Ember.Helper.helper(httpsizeUrl);
