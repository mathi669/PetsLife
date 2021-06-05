$.validator.setDefaults({
  invalidHandler: function () {
    alert("Nombre de usuario o contraseña incorrecta");
  },
  submitHandler: function () {
    alert("ha iniciado sesion exitosamente");
    onclick = location.href = "home.html";
  },
});

$(document).ready(function () {
  $("#login").validate({
    rules: {
      correo: {
        required: true,
        email: true,
      },
      password3: {
        required: true,
        minlenght: 7,
      },
    },
    messages: {
      correo: {
        required: "Por favor, ingresa un correo válido",
      },
      password3: {
        required: "Por favor, ingresa una contraseña",
        minlength:
          "Tu contraseña debe ser de al menos 4 caracteres de longitud",
      },
    },
    highlight: function (element) {
        $(element)
          .parents(".col-sm-10")
          .addClass("has-error")
          .removeClass("has-success");
      },
      unhighlight: function (element) {
        $(element)
          .parents(".col-sm-10")
          .addClass("has-success")
          .removeClass("has-error");
      },
  });
});
