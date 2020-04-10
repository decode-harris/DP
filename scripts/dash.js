// page content
let dash = document.querySelector('#dash');
let info = document.querySelector('#info');


// function : dashboard view
function view_dashboard() {
    // remove : page articles
    account.style.display = 'none';
    info.style.display = 'none';
    
    // display : dash
    dash.style.display = 'grid';
    
    // display : dashboard
    let dashboard = document.querySelector('.dashboard');
    dashboard.style.display = 'grid';
    
    
    // attach : dash | article
    dash.appendChild(dashboard);
}

// form_user selectors
let form_setup = document.querySelector('#form_setup');
let form_output = document.querySelector('#form_output');

let task = document.querySelector('#task');
let desc = document.querySelector('#desc');

let list_title = document.querySelector('#list_title');
let list_desc = document.createElement('li');
// btn : form user
let btn_start = document.querySelector('.btn_start');

// event : btn start
btn_start.addEventListener('click', (e)=>{
    e.preventDefault();
    createListProps();

    // validation : input task
    if (task.value == '') {
        alert('please fill in a title');
        task.style.border = '2px solid darkred';
        task.placeholder = 'title';
        task.style.padding = '2%';

    }
    if (desc.value == '') {
        alert('please fill in a description');
        desc.style.border = '2px solid darkred';
        desc.placeholder = 'description';
        desc.style.padding = '2%';
    }

    else {
        // input task value as list title
        list_title;        
        list_title.innerHTML = task.value;
        list_title.style.fontSize = '1.5rem';
        list_title.style.padding = '2%';

        // input desc value as list desc
        
        list_desc.innerHTML = desc.value;
        list_desc.style.fontSize = '1.3rem';
        list_desc.style.letterSpacing = '2px';

        form_output.appendChild(list_desc);

        form_setup.style.display = 'none';
        // form_setup.parentElement.remove();


    }
    task.value = '';
    desc.value = '';
    console.log('btn clicked!');

});

function createListProps() {
    form_output.style.background = '#000';
    form_output.style.color = '#FFF';
    form_output.style.height = '100%';
    form_output.style.width = '100%';
    form_output.style.border = '2px solid #FFF';
    form_output.style.listStyleType = 'none';

    list_desc.style.padding = '2%';

}