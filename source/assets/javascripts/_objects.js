var validation = {
  container: $(elem).closest("div.insert-value"),
  errorField: "The field must be set",
  incorrectValue: "Incorrect link",
  validationText: function(elem){
    var getArray = $(container).find("input[type='text']");

    $( getArray ).each(function(index, element) {

      var getValue = $(element).val();

      if(getValue === ''){
        //alert("no passed");
        $(this).closest("div.row-content").before("<p class='error'>" + errorField + "</p>").show("fast");
        return false;
      } else {
        //alert("passed");
        $(this).closest("div.row-content").siblings("p.error").remove();
      }
      return true;
    });
  },
  validationLink: function(elem){
    var getLink = $(container).find("input[data-key='link']");
    var urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;

    $( getLink ).each(function(index, element) {

      var getValue = $(element).val();

      if((!urlPattern.test(getValue))){
        $(this).closest("div.row-content").before("<p class='error'>" + incorrectValue + "</p>").show("fast");
        return false;
      } else {
        $(this).closest("div.row-content").siblings("p.error").remove();
      }
      return true;
    }
  },
  validationImage: function(elem){
    // var container = $(elem).closest("div.block");
    var getImage = $(container).find("input[data-key='image']");
    var imgPattern = /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*)+\.(jpg|gif|png)/;

    $( getImage ).each(function(index, element) {

      var getValue = $(element).val();

      if((!urlPattern.test(getValue))){
        $(this).closest("div.row-content").before("<p class='error'>" + incorrectValue + "</p>").show("fast");
        return false;
      } else {
        $(this).closest("div.row-content").siblings("p.error").remove();
      }
      return true;
    }
  }
}
