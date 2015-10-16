$(document).ready(function(){
  // behaviorActive.assignClass(),
  // behaviorActive.displayElem(),
  // behaviorActive.initAssign(),
  // emptyField.empty(),

  // $("span.icon-empty").click(function(){
  //     emptyField.empty(this);
  // }),


  $(".button-generate").click(function(event) {
    event.preventDefault();
    var button = $(this).attr("data-attr");
    if(button === 'facebook') {
      var text = new TextField(this);
      if(text.validate()) {
        if(text.validateLink()) {
          var facebook = new LinkFactory('facebook',this);
          facebook.generate();
        }
      }
    } else if(button === 'twitter') {
      var text = new TextField(this);
      if(text.validate() && text.validateLink()) {
        var twitter = new LinkFactory('twitter',this);
        twitter.generate();
      }
    } else if(button === 'pinterest') {
      var text = new TextField(this);
      if(text.validate()) {
        if(text.validateLink() && text.validateImage()) {
          var pinterest = new LinkFactory('pinterest',this);
          pinterest.generate();
        }
      }
    } else if(button === 'googleplus') {
      alert(button);
    } else if(button === 'linkedin') {
      alert(button);
    }
  })

  // $("#button-facebook").click(function(event){
  //   event.preventDefault();
  //   if((validation.validationText(this)) && (validation.validationLink(this))){
  //     var facebook = new Social('facebook',this);
  //     facebook.generate();
  //   }
  // }),

  // $("#button-twitter").click(function(event){
  //   event.preventDefault();
  //   if((validation.validationLink(this)) && (validation.validationDescription(this))){
  //     var twitter = new Social('twitter', this);
  //     twitter.generate();
  //   }
  // }),

  // $("#button-twitter").click(function(event){
  //   event.preventDefault();
  //   console.log("pippo");
  //   if(validation.validationText(this)){
  //     var twitter = new Social('twitter', this);
  //     twitter.generate();
  //   }
  // }),
  //
  // $("#button-googleplus").click(function(event){
  //   event.preventDefault();
  //   if(validation.validationLink(this)){
  //     var googleplus = new Social('googleplus', this);
  //     googleplus.generate();
  //   }
  // }),
  //
  // $("#button-pinterest").click(function(event){
  //   event.preventDefault();
  //   if((validation.validationLink(this)) && (validation.validationImage(this)) && (validation.validationDescription(this))){
  //     var pinterest = new Social('pinterest', this);
  //     pinterest.generate();
  //   }
  // }),
  //
  // $("#button-linkedin").click(function(event){
  //   event.preventDefault();
  //   if((validation.validationLink(this)) && (validation.validationTitle(this)) && (validation.validationDescription(this))){
  //     var linkedin = new Social('linkedin', this);
  //     linkedin.generate();
  //   }
  // })

})
