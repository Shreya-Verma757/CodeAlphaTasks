const Socket = io('http://localhost:8000');

const div = document.getElementById('send-container')

const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector('.chatbox')

var audio = new Audio('Ting.mp3');

const append = (message, position) =>{
    const messgaeElement = document.createElement('div');
    messgaeElement.innerText = message;
    messgaeElement.classList.add('message');
    messgaeElement.classList.add(position);
    messageContainer.append(messgaeElement);
    if(position == 'left'){
        audio.play();
    }
    
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    Socket.emit('send', message);
    messageInput.value= ''
})

const name = prompt('Enter your name to join');
Socket.emit('new-user-joined', name);

Socket.on('user-joined', name =>{
    append(`${name} joined the chat`, 'right')

})

Socket.on('receive', data =>{
    append(`${data.name
    }: ${data.message}`, 'left')
 
});

Socket.on('left', name =>{
    append(`${name
    } left the chat`, 'left')
 
});


