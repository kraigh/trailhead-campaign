(function ($) {$(document).ready(function() {
  $('.error').hide();

  // $(document).on('click', '.contact-submit', function(){
  //   $('.error').hide();
  //   var name = $("#contact-name").val();
  //   if (name == "") {
  //     $("label#name-error").show();
  //     $("input#contact-name").focus();
  //     return false;
  //   }
  //   var email = $("#contact-email").val();
  //   if (email == "" || !isEmail(email)) {
  //     $("label#email-error").show();
  //     $("input#contact-email").focus();
  //     return false;
  //   }
  //   var message = $("#contact-message").val();
  //   if (message == "") {
  //     $("label#message-error").show();
  //     $("input#contact-message").focus();
  //     return false;
  //   }
  //   var data = {
  //     name: name,
  //     email: email,
  //     message: message
  //   };
  //   var vars = JSON.stringify(data);
  //   $.ajax({
  //     type : 'POST',
  //     dataType : 'json',
  //     url : 'email.php',
  //     data : 'vars='+vars,
  //     success: function(response) {
  //       if (response.status == '1') {
  //         $('#form-wrapper').html("<div id='message'></div>");
  //         $('#message').html("<h2><i class='icon-ok'></i> Submitted!</h2>")
  //         .append("<p>We will be in touch soon.</p>")
  //         .hide()
  //         .fadeIn(1500);
  //       } else if (response.status == '0') {
  //         $('#form-error').html("<div id='message'></div>");
  //         $('#message').html("<h3><i class='icon-warning-sign' style='color: red'></i> Error!</h3>")
  //         .append("<p>"+response.message+"</p>")
  //         .hide()
  //         .fadeIn(1500);
  //       }
  //     }
  //   });
  //   return false;
  // });

});})(jQuery);

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
