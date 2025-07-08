const topMenu = document.getElementById('ct-top-menu');
const toggleTopMenu = document.getElementById('ct-toggle-top-menu-icon');

document.addEventListener('click', (e) => {
    if(toggleTopMenu.contains(e.target)) {
        //click to toogle topmenu icon
      
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('ct-topmenu-expanded');
    }
    //click to outside
    else {
        //click to close topmenu
        if(topMenu.contains("ct-topmenu-expanded")) {
            topMenu.classList.remove('ct-topmenu-expanded');
            topMenu.classList.add('hidden');
            
        }
    }
});