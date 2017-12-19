$(function() {
  $('#btnSignUp').click(function() {
    console.log("The sign up is working so far");
    alert("This is an alert for the sign up working!");


    $.ajax({
      url: '/signUp',
      data: $('form').serialize(),
      type: 'POST',
      success: function(response) {
        console.log(response),
        alert("This is a success alert. This thing is working!");
      },
      error: function(error) {
        console.log(error),
        alert("This is an error alert! Something in sign up went wrong");
      }
    });
  });
});
