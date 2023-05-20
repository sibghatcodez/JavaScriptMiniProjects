const userNameDiv = document.querySelector('.userName');
const userMessage = document.getElementById('userMsg');
const sendMessage = document.querySelector('.sendMsg');
const storedUsername = localStorage.getItem('username');
let messages = JSON.parse(localStorage.getItem('messages')) || [];


function displayMessages() {
  userNameDiv.innerHTML = '';
  messages.forEach((message) => {
    const newMsg = document.createElement('div');
    newMsg.className = 'Msg';
    const span_1 = document.createElement('span');
    span_1.textContent = message.time;
    const span_2 = document.createElement('span');
    span_2.textContent = message.username;
    const span_3 = document.createElement('span');
    span_3.textContent = message.text;

    newMsg.appendChild(span_1);
    newMsg.appendChild(span_2);
    newMsg.appendChild(span_3);

    userNameDiv.appendChild(newMsg);
  });
}


displayMessages();

sendMessage.addEventListener('click', () => {

    if (userMessage.value.length > 50) {
        console.log('Text length should be less than 50.');
    } else {
  const date = new Date();
  const message = {
    time: `${date.getHours()}:${date.getMinutes()}`,
    username: storedUsername,
    text: userMessage.value,
  };

  messages.push(message);
  localStorage.setItem('messages', JSON.stringify(messages));

  const newMsg = document.createElement('div');
  newMsg.className = 'Msg';
  const span_1 = document.createElement('span');
  span_1.textContent = message.time;
  const span_2 = document.createElement('span');
  span_2.textContent = message.username;
  const span_3 = document.createElement('span');
  span_3.textContent = message.text;

  newMsg.appendChild(span_1);
  newMsg.appendChild(span_2);
  newMsg.appendChild(span_3);

  userNameDiv.appendChild(newMsg);

userMessage.value = '';

    }
});
