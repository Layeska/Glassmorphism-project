

const cardContainer = document.querySelector('.containerCards');
let userData = [];

getUsers();

function getUsers() {
    fetch('https://randomuser.me/api/').then((response) => response.json()).then(data => {
    userData = [data];
    insertUser(data.results)
});
}

function insertUser(user) {
    cardContainer.innerHTML = user.map((user) => {
  

    const {picture, name, email, location, phone} = user;
    
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
        </div>`;
    });
    actualizarItems();
}

function actualizarItems() {
    const addBtns = document.querySelectorAll('.userChange');
    addBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            console.log(userData[i].results[i])
            getUsers();
        });
    });
}











/*
function deleteItems() {
    const deleteBtns = document.querySelectorAll('.userDelete');
    deleteBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            console.log(userData[i].results[i].name.first)
        });
    });
}*/



