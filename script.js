const imagenesFachadas = [
    "https://res.cloudinary.com/dtne63b6s/image/upload/v1775025846/Plaza_Bolivar___San_Juan_de_Col%C3%B3n_hihby6.jpg",
    "https://res.cloudinary.com/dtne63b6s/image/upload/v1775025846/Plaza_Bolivar___San_Juan_de_Col%C3%B3n_hihby6.jpg",
    "https://res.cloudinary.com/dtne63b6s/image/upload/v1775025846/Plaza_Bolivar___San_Juan_de_Col%C3%B3n_hihby6.jpg"
];

// Cambiar la imagen de fondo aleatoriamente al cargar
window.onload = () => {
    const contenedorImg = document.getElementById('fachada-dinamica');
    const randomImg = imagenesFachadas[Math.floor(Math.random() * imagenesFachadas.length)];
    contenedorImg.style.backgroundImage = `url('${randomImg}')`;
};

// Capturar el envío del formulario
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const cedula = document.getElementById('cedula').value;
    console.log("Intentando entrar con:", cedula);
    // Aquí conectaremos con Supabase más adelante
});
