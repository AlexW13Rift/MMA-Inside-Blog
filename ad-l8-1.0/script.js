const formulario = document.getElementById("formContacto");
const alerta = document.getElementById("alertaContacto");

if (formulario && alerta) {

  formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    alerta.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Mensaje enviado</strong>
        <button type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Cerrar">
        </button>
      </div>
    `;

    formulario.reset();

  });

}