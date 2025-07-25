const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const toggleIcon = document.getElementById('toggleIcon');


toggleBtn.addEventListener('click',() =>{
    sidebar.classList.toggle('collapsed');
    if(sidebar.classList.contains('collapsed')) {
        toggleIcon.classList.remove('fa-arrow-left');
        toggleIcon.classList.add('fa-arrow-right');
    }else{
        toggleIcon.classList.remove('fa-arrow-right');
        toggleIcon.classList.add('fa-arrow-left');
    }
});