import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.ajax({
      url: "http://localhost:3000/product_info",
      method: 'GET', dataType: 'json',
      data: {
        category: "Fashion",
        keywords: "corderoy pants"
      },
      success: function(data){
         return data
      },
      failure: function(){
        reject()
      }
    })
  }
});
