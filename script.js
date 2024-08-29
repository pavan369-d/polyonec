const showBtn = document.querySelectorAll('.question-h4');
const menu = document.querySelector('#menu');
const sideNav = document.querySelector('#side-nav');
const hideNav = document.querySelector('#hide-nav');

showBtn.forEach(element => {
    element.addEventListener('click',(event)=>{
        if(element.classList.contains('active')){
            element.classList.remove('active');
         
        }else{
            let alreadyActive = document.querySelectorAll('active');

            alreadyActive.forEach(currentActive=>{
                alreadyActive.classList.remove('active');
                
                
            })
            element.classList.add('active');
        }
    })
});



menu.addEventListener('click',function(){
sideNav.style.display="flex";
})

hideNav.addEventListener('click',function(){
    sideNav.style.display="none";
})






