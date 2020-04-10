// selector : nav [ links ]
let link_login = document.querySelector('.link_login');
let mobl_login = document.querySelector('.mobl_login');
let btn_login = document.querySelector('.btn_login');

// selector : account
let account = document.querySelector('#account');

// event : btn login
btn_login.addEventListener('click', (e)=>{
    e.preventDefault();
    // verfiy view
    if (account.style.display == 'none') {
        
        // remove page views
        info.style.display = 'none'
        dash.style.display = 'none';
        dashboard.style.display = 'none';
        
    }
    showForm();

    account.style.display = 'grid';

    // let acc_ele = document.querySelector('#account .elmnts');
    // acc_ele.appendChild(form);
    // account.appendChild(form);

});


// event : desktop link [ account ]
link_login.addEventListener('click', (e)=>{
    e.preventDefault();
    // verfiy view
    if (account.style.display == 'none') {
        
        // remove page views
        info.style.display = 'none'
        account.style.display = 'none';
        dash.style.display = 'none';
        dashboard.style.display = 'none';
    }
    showForm();

    account.style.display = 'grid';
    
    account.appendChild(form);

    
    
});

// event : mobile link [ account ]
mobl_login.addEventListener('click', (e)=>{
    e.preventDefault();
    // verfiy view
    if (account.style.display == 'none') {
        
        // remove page views
        info.style.display = 'none'
        dash.style.display = 'none';
        dashboard.style.display = 'none';
    }
    showForm();

    account.style.display = 'grid';
    
    account.appendChild(form);

    
    
});