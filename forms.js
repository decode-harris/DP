// modal for user account
let modal = document.querySelector('.modal');
// form for user input
let form = document.querySelector('.form');
let formH3 = document.querySelector('.form h3');
// form event btns
let btn_login = document.querySelector('.btn_login');
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


// event : btn login
btn_login.addEventListener('click', (e)=>{
    e.preventDefault();
    createModal();
    showForm();
});

function createModal() {
    // modal props
    let modal = document.querySelector('.modal');
    form.style.position = 'relative';
        
    if (modal.style.display == 'none') {
        modal.style.display = 'grid';
        modal.style.position = 'absolute';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.overflow = 'hidden';
        modal.style.background = 'rgba(0,0,0,0.9)';

        let btn_close = document.createElement('button');
        btn_close.innerHTML = 'X';
        btn_close.style.position = 'absolute';
        btn_close.style.top = '0';
        btn_close.style.right = '0';
        btn_close.style.height = '55px';
        btn_close.style.background = 'transparent';
        btn_close.style.border = '3px solid #FFF';
        btn_close.style.color = '#FFF';

        // event : btn close 
        btn_close.addEventListener('click', ()=>{
            if (modal.style.display == 'grid') {
                modal.style.display = 'none';
                form.style.display = 'none';
            } else {
                modal.style.display = 'grid';
                form.style.display = 'flex';
            }
        });

        
        
        
        form.appendChild(btn_close);
        
    }
    else {
        modal.style.display = 'none';
    }
};

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

// function : show form
function showForm() {
    form_login.style.display = 'flex';


    if (formH3.innerHTML == 'Account Login') {
        email.style.display = 'none';
        p_noacc.style.display = 'flex';
    }
    if (formH3.innerHTML == 'Account Register') {
        email.style.display = 'flex';
        p_acc.style.display = 'flex';
    }
}

let btn_submit = document.querySelector('.btn_submit');

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
        alert('Account login successfull!');
        username.style.border = '3px solid darkgreen';
        password.style.border = '3px solid darkgreen';
        username.innerHTML = '';
        
    }

    // return;
}

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
        alert('Account created successfull!');

        username.style.border = '3px solid darkgreen';
        password.style.border = '3px solid darkgreen';
        email.style.border = '3px solid darkgreen';
    
    }

    return;
}