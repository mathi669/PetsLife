jquery(registrarte).ready(function(){
    $("#showpassword").on('click', function (){

        var pass = $("#id_txtContraseña");
        var pass2 = $("#id_txtRepetirContraseña");

        var fieldtype = pass.attr('type');
        var fieldtype2 = pass2.attr('type');

        if (fieldtype == 'password' & fieldtype2 == 'password') {
            pass.attr('type', 'text');
            pass2.attr('type', 'text');
            $(this).text("Ocultar password");
        } else {
            pass.attr('type', 'password');
            pass2.attr('type', 'password');
            $(this).text("ver password");
        }
    });
});