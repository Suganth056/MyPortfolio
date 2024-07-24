let navItems=document.querySelector('.nav-items');

let disBar=document.querySelector('#displayBar');

let displayX=document.querySelector('.displayX');

//Nav Bar Links for Scrool Effect


let homeSec=document.querySelector('.inner-msg');
let homeLink=document.querySelector('.homeLink');

let aboutSec=document.querySelector('.AboutPage');
let aboutLink=document.querySelector('.aboutLink');

let skillSec=document.querySelector('.Skills-Section');
let skillLink=document.querySelector('.skillLink');

let projectSec=document.querySelector('.Project-Section');
let projectLink=document.querySelector('.ProjectLink');

let contactSec=document.querySelector('.Contact-Section');
let contactLink=document.querySelector('.contactLink');



// EventListener Begins

homeLink.addEventListener('click',function(e){
    console.log('Home clicked');
    let coordHome=homeSec.getBoundingClientRect();

    console.log(coordHome);

    window.scrollTo(coordHome.left+window.scrollX,coordHome.top+window.scrollY);
});


aboutLink.addEventListener('click',function(e){
    console.log('clicked');
    let coordAbout=aboutSec.getBoundingClientRect();

    console.log(coordAbout);

    window.scrollTo(coordAbout.left+window.scrollX,coordAbout.top+window.scrollY-60);

});

skillLink.addEventListener('click',function(e){
    skillSec.scrollIntoView({behavior:"smooth"});
})

projectLink.addEventListener('click',function(e){
    console.log('clicked');
    let coordProject=projectSec.getBoundingClientRect();

    console.log(coordProject);

    window.scrollTo(coordProject.left+window.scrollX,coordProject.top+window.scrollY-60);

});

contactLink.addEventListener('click',function(e){
    console.log('contact clicked');
    let coordContact=contactSec.getBoundingClientRect();

    console.log(coordContact);

    window.scrollTo(coordContact.left+window.scrollX,coordContact.top+window.scrollY-60);

});


/// Nav bar end



// For About page

let tabLinks=document.querySelectorAll('.tablinks');

let tabSkills=document.querySelectorAll('.tablink-skills');

let x=new Array(tabLinks.length);
// About page end


function navCloser(){
    navItems.classList.add('displayNav');
}

disBar.addEventListener('click',function(e){
    console.log('Clicked');
    navItems.classList.remove('displayNav');
})

displayX.addEventListener('click',navCloser);

// body.addEventListener('click',function(){
//     if(navItems.classList.contains('displayNav')){

//     }
//     else{
//         navItems.classList.add('displayNav');
//     }
// })

// About code

for(j=0;j<tabLinks.length;j++){
    x[j]=tabLinks[j].textContent;
    tabLinks[j].classList.add(x[j]);
}

console.log(x);



for(i=0;i<tabLinks.length;i++){
    tabLinks[i].addEventListener('click',function(e){
        for(j=0;j<tabLinks.length;j++){
            tabLinks[j].classList.remove('active-link');
            if(tabSkills[j].classList.contains('active')){
                tabSkills[j].classList.remove('active');
                tabSkills[j].classList.add('inactive');
            } 
            else{
                tabSkills[j].classList.add('inactive');
            }
        }
        e.target.classList.add('active-link');
        for(j=0;j<tabLinks.length;j++){
            if(tabLinks[j].classList.contains('active-link')){
                console.log(tabLinks[j]);
                for(k=0;k<tabLinks.length;k++){
                    if(tabLinks[j].classList.contains(x[k])){
                        tabSkills[k].classList.remove('inactive');
                    }
                }
            }
        }
    });
}


/// ProjectLink

// let project1=document.querySelector('.project1');


// project1.addEventListener('click',function(){
//     x=fetch('https://calc-by-suganth.netlify.app/').then(res=>{
//         console.log('Event Logged')
//     }).catch(err=>{
//         console.log(err+"🚉🚊");
//     })
// })


// Contact Section Details
let contactForm=document.getElementById('contact-form');
contactForm.addEventListener('submit',function(e){
    e.preventDefault();
    var data=new FormData(e.target);
    fetch("https://formspree.io/f/xzzpzzva",{
        method:'POST',
        body:data,
    }).then(res=>{
        if(res.ok){
            alert('Success');
        }
        else{
            alert("Error");
        }
    }).catch(err=>{
        console.log(err);
    });
    document.getElementById('contact-form').reset();
});
