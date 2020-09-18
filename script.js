
function userChange(){
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data=> {

            const users = data.results[0];

            const fullName = `${users.name.title} ${users.name.first} ${users.name.last}`;
            const userImage = `<img class="mx-auto d-block rounded-circle" src="${users.picture.large}">`;
            const userGender = `Gender : ${users.gender}`;
            const userEmail = `Email : ${users.email}`;
            const userPhone = `Phone : ${users.phone}`;

            
            
            document.getElementById('user-image').innerHTML = userImage;
            document.getElementById('user-name').innerHTML = fullName;
             document.getElementById('user-email').innerHTML = userEmail;
             document.getElementById('user-phone').innerHTML = userPhone;
             document.getElementById('user-gender').innerHTML = userGender;
        })
}

userChange();

setInterval(() => {
    userChange();
}, 5000);


