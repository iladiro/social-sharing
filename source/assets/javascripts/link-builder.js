function LinkFactory(type, elem){
  var socials = {"facebook": 1, "twitter": 2, "linkedin": 3, "pinterest": 4, "googleplus": 5};
  var $container = $(elem).closest("div.block");

  switch(socials[type]){
    case 1:
      return {
        generate: function(){
          var facebook = "http://www.facebook.com/share.php?";
          var valueLink = $container.find("input[data-key='link']").val();
          var merge = facebook + "u=" + encodeURI(valueLink);
          $container.find(".generated-link > input").val(merge);
        }
      }
    case 2:
      return {
        generate: function(){
          var twitter = "http://twitter.com/share?";
          var valueLink = $container.find("input[data-key='link']").val();
          var valueDescription = $container.find("input[data-key='description']").val();
          var merge = twitter + "text=" + encodeURIComponent(valueDescription) + "&url=" + encodeURI(valueLink);
          $container.find(".generated-link > input").val(merge);
        }
      }
    case 3:
      return {
        generate: function(){
          var linkedin = "http://www.linkedin.com/shareArticle?mini=true";
          var valueLink = $container.find("input[data-key='link']").val();
          var valueTitle = $container.find("input[data-key='title']").val();
          var valueDescription = $container.find("input[data-key='description']").val();
          var merge = linkedin + "&url=" + encodeURI(valueLink) + "&title=" + encodeURIComponent(valueTitle) + "&summary=" + encodeURIComponent(valueDescription);
          $container.find(".generated-link > input").val(merge);
        }
      }
    case 4:
      return {
        generate: function(){
          var pinterest = "http://pinterest.com/pin/create/button/?";
          var valueLink = $container.find("input[data-key='link']").val();
          var valueImage = $container.find("input[data-key='image']").val();
          var valueDescription = $container.find("input[data-key='description']").val();
          var merge = pinterest + "url=" + encodeURI(valueLink) + "&media=" + encodeURI(valueImage) + "&description=" + encodeURIComponent(valueDescription);
          $container.find(".generated-link > input").val(merge);
        }
      }
    case 5:
      return {
        generate: function(){
          var googleplus = "https://plus.google.com/share?";
          var valueLink = $container.find("input[data-key='link']").val();
          var valueImage = $container.find("input[data-key='image']").val();
          var valueDescription = $container.find("input[data-key='description']").val();
          var merge = googleplus + "url=" + encodeURI(valueLink);
          $container.find(".generated-link > input").val(merge);
        }
      }
  }

}
