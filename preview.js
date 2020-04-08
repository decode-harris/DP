// logic : preview
let previewPanels = 0;
preview();

// function : preview
function preview() {
    let i;
    let panels = document.getElementsByClassName('panels');

    // loop : panels
    for (i = 0; i < panels.length; i++) {
        panels[i].style.display = 'none';
    }
    previewPanels++;
    // display : panels
    if (previewPanels > panels.length) {
        previewPanels = 1;
    }
    panels[previewPanels-1].style.display = 'block';
    // time : 2.2 secs
    setTimeout(preview, 2200);
}