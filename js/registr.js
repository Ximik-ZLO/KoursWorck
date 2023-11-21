let sfp = document.querySelector('#sfp');
let tel = document.querySelector('#tel');
let addres = document.querySelector('#addres');
let email = document.querySelector('#email');
let login = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');



let users = {
    
};

console.log(users);

function User(sfp, tel, addres, email, login, password){
    this.sfp = sfp;
    this.tel = tel;
    this.addres = addres;
    this.email = email;
    this.login = login;
    this.password = password
}

function createId(users){
    return Object.keys(users).length;
}

submit.addEventListener('click', () => {
    const sfpUser = sfp.value;
    const telUser = tel.value;
    const addresUser = addres.value;
    const emailUser = email.value;
    const loginUser = login.value;
    const passwordUser = password.value;

    const user = new User(sfpUser, telUser, addresUser, emailUser, loginUser, passwordUser);


    const userId = 'User' + createId(users)
    users[userId] = user;

        console.log(users);


})

