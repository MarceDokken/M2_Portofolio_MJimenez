document.addEventListener('DOMContentLoaded', function () {
    const imgElement = document.getElementById('suitmenu'); // Referencia a la imagen

    // Función para cambiar la imagen
    function cambiarImagen(nuevaImagen) {
        imgElement.src = nuevaImagen;
    }

    // Asignar eventos a los botones
    document.getElementById('btnVariaSuit').addEventListener('click', function () {
        cambiarImagen('Assets/IMG/Suits Samus/Varia Suit.jpg');
    });

    document.getElementById('btnPowerSuit').addEventListener('click', function () {
        cambiarImagen('Assets/IMG/Suits Samus/Power Suit.jpg');
    });

    document.getElementById('btnGravitySuit').addEventListener('click', function () {
        cambiarImagen('Assets/IMG/Suits Samus/Gravity Suit.jpg');
    });

    document.getElementById('btnMetroidSuit').addEventListener('click', function () {
        cambiarImagen('Assets/IMG/Suits Samus/Metroid Suit.jpg');
    });
    
});