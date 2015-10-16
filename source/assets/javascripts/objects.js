var TextField = function(elem) {
  var _self = this;
  this.$container = $(elem).closest("div.insert-value");
  console.log(this.$container);
  this.errorMsg = "The field must be set";
  this.incorrectValue = "Incorrect link";

  this.validate = function() {
    var $inputs = this.$container.find("input[type='text']");

    console.log($inputs);
    var result = true;

    $inputs.each(function(index, element) {
      console.log(index);
      var value = $(element).val();

      if(value === '') {
        console.log("no passed");
        $(element).siblings("p.error").remove();
        $(element).closest("div.row-content").prepend("<p class='error'>" + _self.errorMsg + "</p>");
        result = false;
      } else {
        console.log("passed");
        $(element).siblings("p.error").remove();
      }

    });

    return result;

  }

  this.validateLink = function() {
    var $inputs = this.$container.find("input[data-key='link']");
    var result = true;
    var urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;

    $inputs.each(function(index, element) {

      var value = $(element).val();

      if((!urlPattern.test(value))) {
        $(this).closest("div.row-content").before("<p class='error'>" + "Incorrect link" + "</p>");
        result = false;
      } else {
        $(this).closest("div.row-content").siblings("p.error").remove();
      }
    });

    return result;

  }

  this.validateImage = function() {
    var $inputs = this.$container.find("input[data-key='image']");
    var result = true;
    var imgPattern = /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*)+\.(jpg|gif|png)/;

    $inputs.each(function(index, element) {

      var value = $(element).val();

      if((!imgPattern.test(value))) {
        $(this).closest("div.row-content").before("<p class='error'>" + "Incorrect Image link" + "</p>");
        result = false;
      } else {
        $(this).closest("div.row-content").siblings("p.error").remove();
      }
    });

    return result;

  }

}


function LinkFactory(type,elem){
  var socials = {"facebook": 1, "twitter": 2, "linkedin": 3, "pinterest": 4, "googleplus": 5};
  var container = $(elem).closest("div.block");

  switch(socials[type]){
    case 1:
        return {
          generate: function(){
            var facebook = "http://www.facebook.com/share.php?";
            var valueLink = $(container).find("input[data-key='link']").val();
            var merge = facebook + "u=" + encodeURI(valueLink);
            $(container).find(".generated-link > input").val(merge);
          }
        }
    case 2:
        return {
          generate: function(){
            var twitter = "http://twitter.com/share?";
            var valueLink = $(container).find("input[data-key='link']").val();
            var valueDescription = $(container).find("input[data-key='description']").val();
            var merge = twitter + "text=" + encodeURIComponent(valueDescription) + "&url=" + encodeURI(valueLink);
            $(container).find(".generated-link > input").val(merge);
          }
        }
    case 3:
        return {
          generate: function(){
            var linkedin = "http://www.linkedin.com/shareArticle?mini=true";
            var valueLink = $(container).find("input[data-key='link']").val();
            var valueTitle = $(container).find("input[data-key='title']").val();
            var valueDescription = $(container).find("input[data-key='description']").val();
            var merge = linkedin + "&url=" + encodeURI(valueLink) + "&title=" + encodeURIComponent(valueTitle) + "&summary=" + encodeURIComponent(valueDescription);
            $(container).find(".generated-link > input").val(merge);
          }
        }
    case 4:
        return {
          generate: function(){
            var pinterest = "http://pinterest.com/pin/create/button/?";
            var valueLink = $(container).find("input[data-key='link']").val();
            var valueImage = $(container).find("input[data-key='image']").val();
            var valueDescription = $(container).find("input[data-key='description']").val();
            var merge = pinterest + "url=" + encodeURI(valueLink) + "&media=" + encodeURI(valueImage) + "&description=" + encodeURIComponent(valueDescription);
            $(container).find(".generated-link > input").val(merge);
          }
        }
    case 5:
        return {
          generate: function(){
            var googleplus = "https://plus.google.com/share?";
            var valueLink = $(container).find("input[data-key='link']").val();
            var valueImage = $(container).find("input[data-key='image']").val();
            var valueDescription = $(container).find("input[data-key='description']").val();
            var merge = googleplus + "url=" + encodeURI(valueLink);
            $(container).find(".generated-link > input").val(merge);
          }
        }
  }

}
