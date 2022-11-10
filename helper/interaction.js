export const showMenu = () => {
    let $hamburger = document.querySelector('.nav__hamburger');
    let $nav = document.querySelector('.nav__responsive');
    let $lines = document.querySelector('.lines')

    const showHidden = () => {
        $nav.classList.toggle("show__menu");
        $hamburger.classList.toggle("active");
    }

    $hamburger.addEventListener('click', showHidden);
} 


export const animationScroll = () =>{
    const $head = document.querySelector('.head');
          
    const visibility = (entries, observer) =>{
        entries.forEach((element) => {
            if(element.isIntersecting){
                element.target.classList.add('fade');
            }else{
                element.target.classList.remove('fade');
            }
        })
    }

    const observed = new IntersectionObserver(visibility);
    observed.observe($head);
}

