$(document).ready(function(){

  $("#list-social > ul li").click(function(){
    var active = new NavBehavior(this);
    active.assignClass();
    active.displayElem();
  })

  $("span.icon-empty").click(function(){
    emptyField.empty(this);
  }),

  $(".button-generate").click(function(event) {
    event.preventDefault();
    var button = $(this).attr("data-attr");
    if(button === 'facebook') {
      var text = new TextField(this);
      if(text.validate() && text.validateLink()) {
        var facebook = new LinkFactory('facebook',this);
        facebook.generate();
      }
    } else if(button === 'twitter') {
      var text = new TextField(this);
      if(text.validate() && text.validateLink()) {
        var twitter = new LinkFactory('twitter',this);
        twitter.generate();
      }
    } else if(button === 'pinterest') {
      var text = new TextField(this);
      if(text.validate() && text.validateLink() && text.validateImage()) {
        var pinterest = new LinkFactory('pinterest',this);
        pinterest.generate();
      }
    } else if(button === 'googleplus') {
      var text = new TextField(this);
      if(text.validate() && text.validateLink()) {
        var googleplus = new LinkFactory('googleplus',this);
        googleplus.generate();
      }
    } else if(button === 'linkedin') {
      var text = new TextField(this);
      if(text.validate() && text.validateLink()) {
        var linkedin = new LinkFactory('linkedin',this);
        linkedin.generate();
      }
    }
  })

})
