// validation : login form - user
function validateLogin() {
    if (username.value == '') {
        alert('please enter your account username');
        username.style.border = '3px solid darkred';
        username.setAttribute('placeholder', 'USERNAME');
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
        
        // function : [ dash.js ]
        view_dashboard();
        dash_acc.setAttribute('href', '#content');
    });

    // replace form components with helper components for user
    form.replaceChild(icon_acc, username);
    form.replaceChild(txt_acc, password);
    form.removeChild(email);
    form.removeChild(p_acc);
    form.removeChild(p_noacc);
    form.replaceChild(dash_acc, btn_submit);

}