'use strict';


//nav-bar
const switchColor=function(e){

    nav_items.forEach(function(ele){
            ele.style.color='#fdbb04';
    });
    if(e==='h'){
        homeBtn.style.color='blue';
    }else if (e=='a'){
        aboutBtn.style.color='blue';
    }else if(e=='s'){
        skillsBtn.style.color='blue';
    }else if(e=='p'){
        projectsBtn.style.color='blue';
    }
    else if(e=='c'){
        contactBtn.style.color='blue';
    }
}
homeBtn.addEventListener('click',()=>{
    switchColor('h');
});
aboutBtn.addEventListener('click',()=>{
    switchColor('a');
});
skillsBtn.addEventListener('click',()=>{
    switchColor('s');
});
projectsBtn.addEventListener('click',()=>{
    switchColor('p');
});
contactBtn.addEventListener('click',()=>{
    switchColor('c');
});
// section Home
hireBtn.addEventListener('click',()=>{
    window.open('http://wa.me/918651484067');
})
//section About
resumrBtn.addEventListener('click',()=>{
    window.open('https://drive.google.com/file/d/1Tqy8_t-oGL17QttY0R6R6Pm4ihQM_-2Y/view?usp=sharing');
});
designerBtn.addEventListener('click',()=>{
    window.open('https://www.careerexplorer.com/careers/web-designer/');
});
developerBtn.addEventListener('click',()=>{
    window.open('https://en.wikipedia.org/wiki/Web_developer');
});
projectManagerBtn.addEventListener('click',()=>{
    window.open('https://en.wikipedia.org/wiki/Project_manager');
});