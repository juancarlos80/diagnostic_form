

function init() {
    $( "#datepicker" ).datepicker({
        showOn: "button",
        buttonImage: "img/calendar-icon-s.png",        
        buttonText: "Selecciona la fecha de tu nacimiento",
        changeMonth: true,
        changeYear: true,
        buttonImageOnly: true,
      });
}