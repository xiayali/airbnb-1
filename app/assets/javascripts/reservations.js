document.addEventListener("turbolinks:load", function() {

	$("#reservation-submit-form").on('submit', function (event) {
		event.preventDefault();
		$.ajax({
      type: "POST",
      url: this.action,
      data: $("#reservation-submit-form").serializeArray(),
      success: function(data) {
        var notification = document.querySelector('.mdl-js-snackbar');
        notification.MaterialSnackbar.showSnackbar(
          {
          message: 'Booked!'
          }
        );
      },
      error:  function(data) {
      	$("#booking-error-message").show();
      	var notification = document.querySelector('.mdl-js-snackbar');
				notification.MaterialSnackbar.showSnackbar(
  				{
    			message: 'Taken at these dates. Try again.'
  				}
				);
      }
		});
	})

	$("#booking-error-message").click(function () {
		$(this).hide();
	})

});
