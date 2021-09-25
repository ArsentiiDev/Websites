// const hamburger=document.querySelector('.header .nav-bar .nav-list .hamburger')
// const mobile_menu=document.querySelector('.header .nav-bar .nav-list ul')
// const linkUsed=document.querySelector('.header .nav-bar .nav-list')
// const header=document.querySelector('.header.container')

// hamburger.addEventListener('click', () =>{
//     hamburger.classList.toggle('active')
//     mobile_menu.classList.toggle('active')
    
// })

 document.addEventListener('scroll', ()=>{
     let scroll_pos=window.scrollY;
     if(scroll_pos>660){
        nav.style.backgroundColor="#20262f"
     } else{
         nav.style.backgroundColor="transparent"
     }
 })
    const burger=document.querySelector('.burger')
    const navL=document.querySelector('.nav-links')
    const menuBar=document.querySelector('.nav-links ul')
    const navLinks = document.querySelectorAll('.nav-links li')
    burger.addEventListener('click',()=>{
        navL.classList.toggle('nav-active')
        nav.style.backgroundColor="#20262f"
        navLinks.forEach( (link,index)=>{
             link.style.animation = `navLinkFade .5s ease forwards ${index/7+.2}s`
             
    
            console.log(index/7)
        })
        //Burger animation
        burger.classList.toggle('toggle')
    })
      menuBar.addEventListener('click',()=>{
         navL.classList.remove('nav-active')
         burger.classList.remove('toggle')

 })
    