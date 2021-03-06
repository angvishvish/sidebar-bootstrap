(function() {
  $(".set-layout").click(function(e) {
    e.preventDefault();
    
  });

  $(".sidebar-toggle-left").click(function(e) {
    e.preventDefault();
    $(".main-wrapper").toggleClass("toggled-left");
  });

})();

function select_layout () {
  var select_layout = document.getElementById("selected-dropdown");
  position = select_layout.options[select_layout.selectedIndex].value;
  
  if (position === 'right') {
    $('.main-wrapper').removeClass('toggled-left').addClass('toggle-' + position);
    $('.sidebar-toggle').removeClass('sidebar-toggle-left').addClass('sidebar-toggle-' + position);
    $('.sidebar-wrapper-left').removeClass('sidebar-wrapper-left').addClass('sidebar-wrapper-' + position);  
  } else {
    $('.main-wrapper').removeClass('toggled-right').addClass('toggle-' + position);
    $('.sidebar-toggle').removeClass('sidebar-toggle-right').addClass('sidebar-toggle-' + position);
    $('.sidebar-wrapper-right').removeClass('sidebar-wrapper-right').addClass('sidebar-wrapper-' + position);
  }
  
  $(".sidebar-toggle-right").click(function(e) {
    e.preventDefault();
    $(".main-wrapper").toggleClass("toggled-right");
  });

}
