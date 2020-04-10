// form for user input
let form = document.querySelector('.form');
let formH3 = document.querySelector('.form h3');

// form event btns

let btn_submit = document.querySelector('.btn_submit');
let btn_register = document.querySelector('.btn_register');
let btn_noacc = document.querySelector('.btn_noacc');
let btn_acc = document.querySelector('.btn_acc');

// form user helper text
let p_noacc = document.querySelector('.p_noacc');
let p_acc = document.querySelector('.p_acc');

// form elmnts
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');



// event : btn account
btn_acc.addEventListener('click', (e)=>{
    e.preventDefault();

    if (formH3.innerHTML == 'Account Register') {
        formH3.innerHTML = 'Account Login'
        p_acc.style.display = 'none';
    } else {
        formH3.innerHTML = 'Account Register';
    }
    showForm();
});

// event : btn no account
btn_noacc.addEventListener('click', (e)=>{
    e.preventDefault();

    if (formH3.innerHTML == 'Account Login') {
        formH3.innerHTML = 'Account Register';
        p_noacc.style.display = 'none';
    } else {
        formH3.innerHTML = 'Account Login';
    }
    showForm();
});


// function : show form
function showForm() {
    // display login form
    form_login.style.display = 'flex';
    // form.style.display = 'flex';
    
    if (formH3.innerHTML == 'Account Login') {
        email.style.display = 'none';
        p_noacc.style.display = 'flex';
        p_noacc.style.flexDirection = 'column';
    }
    if (formH3.innerHTML == 'Account Register') {
        email.style.display = 'flex';
        p_acc.style.display = 'flex';
        p_acc.style.flexDirection = 'column';
    }
}

// event : btn submit [ form ]
btn_submit.addEventListener('click', (e)=>{
    e.preventDefault();

    if (formH3.innerHTML == 'Account Login') {
        // validation : [ validation.js ]
        validateLogin();
        
        username.innerHTML = '';
        password.innerHTML = '';
        email.innerHTML = '';
    }

    if (formH3.innerHTML == 'Account Register') {
        // validation : [ validation.js ]
        validateRegister();

        username.innerHTML = '';
        password.innerHTML = '';
        email.innerHTML = '';
    }
});
