$("#registrarte").validate({

    rules: {
      txtEmail: {
        required: true,
        email: true,
      },
      txtContraseña: {
        required: true,
        minlength: 5,
      },
      txtRepetirContraseña: {
        required: true,
        equalTo: "#id_txtContraseña",
      },
    },
    messages: {
        "txtEmail": {
            required: 'Ingrese email',
            email: 'No cumple formato'
        },
        "txtContraseña": {
            required: 'ingrese la contraseña',
            minlength: 'Mínimo 5 caracteres'
        },
        "txtRepetirContraseña": {
            required: 'Repita la contraseña',
            equalTo: 'Debe ser igual al campo anterior'
        }
    }
  });