// function : dashboard view
function view_dashboard() {
    // remove : modal
    modal.style.display = 'none';
    modal.style.overflow = 'auto';
    
    // remove : content 
    let info = document.querySelector('#info');
    info.style.display = 'none';

    // display : dash
    let dashboard = document.querySelector('.dashboard');
    dashboard.style.display = 'grid';
    
    // attach : dash | article
    let content = document.querySelector('.content');
    content.appendChild(dashboard);

}