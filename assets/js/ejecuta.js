//Declaro el área donde agrego las cards
const cardContainer = document.querySelector('.containerCards');

getUsers(); //inicio mostrando una card creada

//El consumo de la API
function getUsers() {
    fetch('https://randomuser.me/api/').then((response) => response.json()).then(data => {
    insertUser(data.results);
});
}

//Función para insertar el usuario en el contenedor
function insertUser(user) {
    
    //para recorrer los datos de los usuarios dados por la API
    cardContainer.innerHTML = user.map((user) => {
        const {picture, name, email, location, phone} = user; //extraigo información
    
        //Para mandar a crear al HTML la card de manera dinámica
        return `
            <div class="card">
                <div class="headCard"> 
                    <img src=${picture.large} alt="fondo de perfil">
                </div>
                <h2>${name.title}, ${name.first} ${name.last}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laudantium libero alias exercitationem tempore similique et consectetur</p>
                <p><i class="fa-solid fa-location-dot"></i>  ${location.city}, ${location.country}</p>
                <p><i class="fa-solid fa-mobile-screen-button"></i> + ${phone}</p>
                <hr>
                <div class="footerCard">
                    <h3 class="userName">Contact me: ${email}</h3>
                    <button class="userChange"><i class="fa-solid fa-angles-right"></i></i></button> 
                </div>
            </div>
        `;
    });

    actualizarItems(); //actualizo la card, cambiando datos del user
}

//función que realiza el cambio de user por click
function actualizarItems() {
    const addBtns = document.querySelectorAll('.userChange');
    addBtns.forEach((btn, i) => { btn.addEventListener('click', () => getUsers() )});
}