const Username = document.getElementById('Username');
const Password = document.getElementById('Password');
const EnterBtn = document.getElementById('EnterBtn');


let error = document.createElement('h2');
error.className = 'Error';
Username.parentNode.insertBefore(error, Username.nextSibling);

let Accs = [];

let User = {
};

EnterBtn.addEventListener('click', () => {
    let name = Username.value;
    let pass = Password.value;

    if (name.length > 8) {
        error.textContent = "Name is too long";
      } else if (pass === '') {
        error.textContent = "Password shouldn't be empty";
      } else if (name === '') {
        error.textContent = "Username shouldn't be empty";
      } else if (name.length < 4) {
        error.textContent = "Username should contain at least 4 characters.";
      } 
      else if(Accs.includes(name)) {
        if(pass != User[name].Pass) {
            error.textContent ='Wrong Password.';
        } else {
            error.textContent = '';
        }
      } else {
        error.textContent = "";
        User[name] = {
            Pass: pass
        }

        Accs.push(name);

        console.log(User[name].Pass)

        window.close();
        window.location.href = 'chatRoom.html';
        localStorage.setItem('username', name);
      }

});
