$(document).ready(function() {

  var infoArea = $(".infoBox");

  var buttons = $("button");

  $(buttons).click(function() {
    $("#btnInfo").hide('-100px');
  })

  function removeInfo() {
    if ($(infoArea).is(':visible')) {
      $(infoArea).hide();
    }
  }

  function btnColor() {
    $(buttons).removeAttr('id');
  }

  $("#about").click(function() {
    if ($("#aboutText").is(':visible')) {
        $(this).attr('id', 'btnSelect');
    }
    else {
      removeInfo();
      $("#aboutText").show({
        'left': '-700px'
      });
    }
  });

  $("#exp").click(function() {
    btnColor();
    removeInfo();
    $("#xpText").show({
      'left': '-700px'
    });
  });

  $("#pro").click(function() {
    if ($(infoArea).is(':visible')) {
      console.log("seen");
    } else {
      console.log("hide");
    }
  });




  // End of document.redy
});
