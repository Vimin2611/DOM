function la(e){
    e.preventDefault ();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msgbox = document.getElementById("message").value;

    let message = '';
    if (email ===''){
        message = "Enter your email ";
        msgbox.style.color = 'red';

    }
    else if (password ===''){
        message = "Your password must be atleast 8 characters long ";
        msgbox.style.color = 'red';

    }
    else if (age ===''){
        message = "Your age must range from 11 and above ";
        msgbox.style.color = 'red';

    }
    else {
        message = "Correct login ";
        msgbox.style.color = 'green';

    }

    msgbox.innerText=message;
}