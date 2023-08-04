const portfolioArray = [
    {
        image: `mamaPerry's kitchen flyer mockup.jpg`,
        title: `MamaPerry Kitchen`,
        type: `Flyer`
    },
    {
        image: `Ash Wednesday Wish.jpg`,
        title: `Ash Wednesday`,
        type: `Wish`
    },
    {
        image: `Tela Bakery Flyer - Mockup.png`,
        title: `TelaBakery`,
        type: `Flyer`
    },
    {
        image: `Mama Perry's Kitchen Logo.jpg`,
        title: `MamaPerry's Kitchen`,
        type: `LOGO`
    },
    {
        image: `Travail Flyer - Mockup.jpg`,
        title:`Travail`,
        type: `flyer`
    },
    {
        image: `20230311_184602.jpg`,
        title:`TelaStudio T-Shirt`,
        type: `clothing design`
    },
   
]
const portfolioContent = document.querySelector('.portfolio-content');

portfolioArray.forEach((content) => {
    portfolioContent.innerHTML+= `
        <div class="design">
            <div class="design-image-div">
                <img src="${content.image}" class="design-image">
            </div>
            <div class="design-title-div">
                <p class="design-title">
                    ${content.title}
                </p>
                <p class="design-type">
                    ${content.type.toUpperCase()}
                </p>
            </div>
        </div>
    `
});

// const header = document.querySelector(".header");
// const menuIcon = document.querySelector(".menu-icon");
// let menuFlag = 0;
// menuIcon.addEventListener('click',() => {
//     if(menuFlag === 0){
//         header.innerHTML += `
//         <div class="nav-div">
//             <a href="#home">Home</a>
//         </div>
//         <div class="nav-div">
//             <a href="#portfolio">Portfolio</a>
//         </div>
//         <div class="nav-div">
//             <a href="#about-me">About Me</a>
//         </div>
//         <div class="nav-div">
//             <a href="#contact">Contact</a>
//         </div>`;
//     menuFlag = 1;
//     console.log(menuFlag);
//     }else if(menuFlag === 1){
//         console.log(menuFlag);
//         header.innerHTML = `
//         <div class="nav-div">
//             <img class="menu-icon" src="images/menu-icon.png" alt="Menu Icon">
//         </div>
//         `;
//         menuFlag = 0;
//     }
// });
