var emptyField = {
  empty: function(elem){
    $(elem).siblings("input[data-key]").val("");
  }
}

var NavBehavior = function(elem){
  this.el = elem;

  this.assignClass = function(){
    $(this.el).toggleClass("show");
  }
  this.displayElem = function(){
    var $currentElement = $(this.el).attr("data-button");
    var $findElement = $(document).find("#" + $currentElement);
    $findElement.fadeToggle("fast");
  }
}
