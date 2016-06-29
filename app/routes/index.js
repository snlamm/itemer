import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    $.ajax({
      url: "http://localhost:3000/product_info",
      method: 'GET', dataType: 'json',
      data: {
        category: "Fashion",
        keywords: "corderoy pants"
      },
      success: function(data){
         let product_info = {
           product_names: data.product_names,
           prices: data.prices,
           detail_page_urls: data.detail_page_urls
         }
         return product_info
      },
      failure: function(){
        reject()
      }
    })
  }
});
