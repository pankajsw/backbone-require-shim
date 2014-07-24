define([   
  'views/sidebar/SidebarView',
  'text!templates/home/homeTemplate.html'
], function(SidebarView, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(homeTemplate);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return HomeView;
  
});
