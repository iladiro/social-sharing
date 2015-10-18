var TextField = function(elem) {
  var _self = this;
  this.$container = $(elem).closest("div.insert-value");
  this.errorMsg = "The field must be set";
  this.incorrectValue = "Incorrect link";

  this.validate = function() {
    var $inputs = this.$container.find("input[type='text']");

    var result = true;

    $inputs.each(function(index, element) {
      var value = $(element).val();

      if(value === '') {
        $(element).siblings("p.error").remove();
        $(element).closest("div.row-content").prepend("<p class='error'>" + _self.errorMsg + "</p>");
        result = false;
      } else {
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
