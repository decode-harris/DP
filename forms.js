// form for user input
let form = document.querySelector('.form');
let formH3 = document.querySelector('.form h3');

// form event btns
let btn_login = document.querySelector('.btn_login');
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

let link_login = document.querySelector('.link_login');
link_login.addEventListener('click', (e)=>{
    e.preventDefault();
    createModal();
    showForm();

});

// event : btn login
btn_login.addEventListener('click', (e)=>{
    e.preventDefault();
    createModal();
    showForm();
});

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
    form_login.style.display = 'flex';


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
        validateLogin();
        username.innerHTML = '';
        password.innerHTML = '';
        email.innerHTML = '';
    }

    if (formH3.innerHTML == 'Account Register') {
        validateRegister();
        username.innerHTML = '';
        password.innerHTML = '';
        email.innerHTML = '';
    }
});

// validation : login form - user
function validateLogin() {
    if (username.value == '') {
        alert('please enter your account username');
        username.style.border = '3px solid darkred';
        
    }
    if (password.value == '') {
        alert('please fill in a password');
        password.style.border = '3px solid darkred';
    }
    
    else {
        validateUser();
    }
    return true;
};

// validation : user form - register
function validateRegister() {
    
    if (username.value == '') {
        alert('please enter your account username');
        username.style.border = '3px solid darkred';
        username.value = '';
    }
    if (password.value == '') {
        alert('please fill in a password');
        password.style.border = '3px solid darkred';
    }
    if (email.value == '') {
        alert('please provide an email address');
        email.style.border = '3px solid darkred';
    }
    else {
        validateUser();
    }
    return;
}

// validation : user
function validateUser() {
    // helper components
    let icon_acc = document.createElement('i');
    icon_acc.className = 'far fa-check-circle';
    
    let txt_acc = document.createElement('p');
    txt_acc.innerHTML = 'Success';

    let icon_noacc = document.createElement('i');
    icon_noacc.className = 'far fa-times-circle';
    
    let txt_noacc = document.createElement('p');
    txt_noacc.innerHTML = 'Error : username issue';
    
    // user dashboard button 
    let dash_acc = document.createElement('button');
    dash_acc.innerHTML = 'Go to dashboard';

    // btn event : dashboard
    dash_acc.addEventListener('click', (e)=>{
        e.preventDefault();
        view_dashboard();
    });

    // replace form components with helper components for user
    form.replaceChild(icon_acc, username);
    form.replaceChild(txt_acc, password);
    form.removeChild(email);
    form.removeChild(p_acc);
    form.removeChild(p_noacc);
    form.replaceChild(dash_acc, btn_submit);

    
}

