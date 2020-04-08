// modal for user account
let modal = document.querySelector('.modal');

function createModal() {
    form.style.position = 'relative';
        
    if (modal.style.display == 'none') {
        // props : modal
        modal.style.display = 'grid';
        modal.style.position = 'absolute';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.overflow = 'hidden';
        modal.style.background = 'rgba(0,0,0,0.9)';
        
        // btn : btn close modal
        let btn_close = document.createElement('button');
        btn_close.innerHTML = 'X';
        btn_close.style.position = 'absolute';
        btn_close.style.top = '0';
        btn_close.style.right = '50%';
        btn_close.style.transform = 'translate(50%)';
        btn_close.style.height = '55px';
        btn_close.style.background = 'transparent';
        btn_close.style.border = '3px solid #FFF';
        btn_close.style.color = '#FFF';

        // event : btn close modal
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
        scrollTo(form, top);
    }
    else {
        modal.style.display = 'none';
    }
};