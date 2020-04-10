let link_home = document.querySelector('.link_home');
let mobl_home = document.querySelector('.mobl_home');

let content = document.querySelector('.content');

// event : desktop link [ home ]
link_home.addEventListener('click', (e)=>{
    e.preventDefault();
    // remove : dash
    if (dash.style.display == 'grid') {
        dash.style.display = 'none';
        
        dashboard.style.display = 'none';
    }
    // remove : account
    if (account.style.display == 'grid') {
        account.style.display = 'none';
        
    }
    // remove : form
    if (form.style.display == 'flex') {
        form.style.display = 'none';
    }
    // display : info
    if (info.style.display == 'none') {
        info.style.display = 'grid';
    }
    // attach info to content
    content.appendChild(info);

});

// event : mobile link [ home ]
mobl_home.addEventListener('click', (e)=>{
    e.preventDefault();
    // remove : dash
    if (dash.style.display == 'grid') {
        dash.style.display = 'none';
        
        dashboard.style.display = 'none';
    }
    // remove : account
    if (account.style.display == 'grid') {
        account.style.display = 'none';
    }
    // remove : form
    if (form.style.display == 'flex') {
        form.style.display = 'none';
    }
    // display : info
    if (info.style.display == 'none') {
        info.style.display = 'grid';
    }
    // attach info to content
    content.appendChild(info);

});