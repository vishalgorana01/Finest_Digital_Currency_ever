console.log("hello, i am here");

let hover_circle = document.querySelector(".hover_box");
let nav_ul = document.querySelector('.mid ul');
console.log(nav_ul);

let text_node = document.createElement("h5");
text_node.innerHTML = "home";
let text_node_1 = document.createElement("h5");
text_node_1.innerHTML = "about us";
let text_node_2 = document.createElement("h5");
text_node_2.innerHTML = "services";
let text_node_3 = document.createElement("h5");
text_node_3.innerHTML = "blockchain";
let text_node_4 = document.createElement("h5");
text_node_4.innerHTML = "contact us";


nav_ul.children[0].children[0].style.top = `-15px`;
nav_ul.children[0].appendChild(text_node);

nav_ul.children[1].appendChild(text_node_1);
text_node_1.style.display = 'none';

nav_ul.children[2].appendChild(text_node_2);
text_node_2.style.display = 'none';

nav_ul.children[3].appendChild(text_node_3);
text_node_3.style.display = 'none';

nav_ul.children[4].appendChild(text_node_4);
text_node_4.style.display = 'none';

hover_circle.style.left = `${nav_ul.children[0].offsetLeft - 8}px`;


nav_ul.children[0].addEventListener("mouseover", function () {
    hover_circle.style.left = `${nav_ul.children[0].offsetLeft - 8}px`;
    nav_ul.children[0].children[0].style.top = `-15px`;
    nav_ul.children[1].children[0].style.top = `0px`;
    nav_ul.children[2].children[0].style.top = `0px`;
    nav_ul.children[3].children[0].style.top = `0px`;
    nav_ul.children[4].children[0].style.top = `0px`;

    text_node.style.display = 'block';
    text_node_1.style.display = 'none';
    text_node_2.style.display = 'none';
    text_node_3.style.display = 'none';
    text_node_4.style.display = 'none';

})

nav_ul.children[1].addEventListener("mouseover", function () {
    hover_circle.style.left = `${nav_ul.children[1].offsetLeft}px`;
    nav_ul.children[0].children[0].style.top = `0px`;
    nav_ul.children[1].children[0].style.top = `-15px`;
    nav_ul.children[2].children[0].style.top = `0px`;
    nav_ul.children[3].children[0].style.top = `0px`;
    nav_ul.children[4].children[0].style.top = `0px`;

    text_node.style.display = 'none';
    text_node_1.style.display = 'block';
    text_node_2.style.display = 'none';
    text_node_3.style.display = 'none';
    text_node_4.style.display = 'none';
})

nav_ul.children[2].addEventListener("mouseover", function () {
    hover_circle.style.left = `${nav_ul.children[2].offsetLeft - 3}px`;
    nav_ul.children[0].children[0].style.top = `0px`;
    nav_ul.children[1].children[0].style.top = `0px`;
    nav_ul.children[2].children[0].style.top = `-15px`;
    nav_ul.children[3].children[0].style.top = `0px`;
    nav_ul.children[4].children[0].style.top = `0px`;

    text_node.style.display = 'none';
    text_node_1.style.display = 'none';
    text_node_2.style.display = 'block';
    text_node_3.style.display = 'none';
    text_node_4.style.display = 'none';
})

nav_ul.children[3].addEventListener("mouseover", function () {
    // hover_circle.style.backgroundColor = 'blue';
    hover_circle.style.left = `${nav_ul.children[3].offsetLeft + 6}px`;
    nav_ul.children[0].children[0].style.top = `0px`;
    nav_ul.children[1].children[0].style.top = `0px`;
    nav_ul.children[2].children[0].style.top = `0px`;
    nav_ul.children[3].children[0].style.top = `-15px`;
    nav_ul.children[4].children[0].style.top = `0px`;

    text_node.style.display = 'none';
    text_node_1.style.display = 'none';
    text_node_2.style.display = 'none';
    text_node_3.style.display = 'block';
    text_node_4.style.display = 'none';
})

nav_ul.children[4].addEventListener("mouseover", function () {
    hover_circle.style.left = `${nav_ul.children[4].offsetLeft + 6}px`;
    nav_ul.children[0].children[0].style.top = `0px`;
    nav_ul.children[1].children[0].style.top = `0px`;
    nav_ul.children[2].children[0].style.top = `0px`;
    nav_ul.children[3].children[0].style.top = `0px`;
    nav_ul.children[4].children[0].style.top = `-15px`;

    text_node.style.display = 'none';
    text_node_1.style.display = 'none';
    text_node_2.style.display = 'none';
    text_node_3.style.display = 'none';
    text_node_4.style.display = 'block';
})



/******************************************************************************************** */

let toggle_button = document.querySelector(".toggle_button");
console.log(toggle_button);
let toggle_hover = document.querySelector(".toggle_hover");
let toggle_open = document.querySelector(".toggle_open");
let cross = document.querySelector(".cancel");

let home = document.querySelector(".home");
let about_us = document.querySelector(".about_us");
let services = document.querySelector(".services");
let blockchain = document.querySelector(".blockchain");
let contact_us = document.querySelector(".contact_us");


toggle_button.addEventListener("click", function () {
    toggle_open.style.display = 'flex';
    toggle_open.style.transform = "translateX(0px) translateY(0px)";
})

toggle_open.children[0].children[0].addEventListener("mouseover", function () {
    console.log("hello");

    toggle_hover.style.top = '-15px';
    toggle_hover.style.left = '-27px';

    toggle_open.children[0].children[0].style.left = "0px";
    toggle_open.children[0].children[1].style.right = "190px";
    toggle_open.children[0].children[2].style.right = "167px";
    toggle_open.children[0].children[3].style.right = "126px";
    toggle_open.children[0].children[4].style.bottom = "21px";


    home.style.display = "flex";
    about_us.style.display = "none";
    services.style.display = "none";
    blockchain.style.display = "none";
    contact_us.style.display = "none";
});

toggle_open.children[0].children[1].addEventListener("mouseover", function () {
    toggle_hover.style.top = '40px';
    toggle_hover.style.left = '-29px';

    toggle_open.children[0].children[0].style.left = "13px";
    toggle_open.children[0].children[2].style.right = "167px";
    toggle_open.children[0].children[3].style.right = "126px";
    toggle_open.children[0].children[4].style.bottom = "21px";

    toggle_open.children[0].children[1].style.bottom = "145px";
    toggle_open.children[0].children[1].style.right = "202px";

    home.style.display = "none";
    about_us.style.display = "flex";
    about_us.style.top = "-7px";

    services.style.display = "none";
    blockchain.style.display = "none";
    contact_us.style.display = "none";
});

toggle_open.children[0].children[2].addEventListener("mouseover", function () {
    console.log("2");
    toggle_hover.style.top = '98px';
    toggle_hover.style.left = '-8px';

    toggle_open.children[0].children[0].style.left = "13px";

    toggle_open.children[0].children[1].style.bottom = "145px";
    toggle_open.children[0].children[1].style.right = "190px";

    toggle_open.children[0].children[2].style.right = "183px";
    toggle_open.children[0].children[3].style.right = "126px";

    toggle_open.children[0].children[4].style.bottom = "21px";

    home.style.display = "none";
    about_us.style.display = "none";

    services.style.display = "flex";

    blockchain.style.display = "none";
    contact_us.style.display = "none";
});


toggle_open.children[0].children[3].addEventListener("mouseover", function () {
    toggle_hover.style.top = '140px';
    toggle_hover.style.left = '28px';

    toggle_open.children[0].children[0].style.left = "13px";

    toggle_open.children[0].children[1].style.bottom = "145px";
    toggle_open.children[0].children[1].style.right = "190px";

    toggle_open.children[0].children[2].style.right = "167px";

    toggle_open.children[0].children[3].style.right = "146px";

    toggle_open.children[0].children[4].style.bottom = "21px";

    home.style.display = "none";
    about_us.style.display = "none";

    services.style.display = "none";

    blockchain.style.display = "flex";
    contact_us.style.display = "none";
});

toggle_open.children[0].children[4].addEventListener("mouseover", function () {
    // console.log("4"); 
    toggle_hover.style.top = '175px';
    toggle_hover.style.left = '119px';

    toggle_open.children[0].children[0].style.left = "13px";

    toggle_open.children[0].children[1].style.bottom = "145px";
    toggle_open.children[0].children[1].style.right = "190px";

    toggle_open.children[0].children[2].style.right = "167px";

    toggle_open.children[0].children[3].style.right = "126px";

    toggle_open.children[0].children[4].style.bottom = "11px";
    toggle_open.children[0].children[4].style.right = "55px";

    home.style.display = "none";
    about_us.style.display = "none";
    services.style.display = "none";
    blockchain.style.display = "none";
    contact_us.style.display = "flex";
    contact_us.style.top = "-50px";
    contact_us.style.left = "-11px";

});

cross.addEventListener("click", () => {
    toggle_open.style.transform = "translateX(210px) translateY(-210px)";
})


/******************************************************************************************** */

/******************************************************************************************** */

let carousel_control_box = document.querySelector(".carousel_control_box");
let inner_slider_container = document.querySelector(".inner_slider_container");
console.log(inner_slider_container);

let pos = 0;

carousel_control_box.children[0].addEventListener("click", () => {
    console.log("move left");
    if(pos >= 900){
        console.log(pos);
        pos = pos - 2*inner_slider_container.children[0].scrollWidth - 40;
        console.log(pos);
        inner_slider_container.style.transform = `translateX(-${pos}px)`;
    }
    // inner_slider_container.style.transform = 
})

carousel_control_box.children[1].addEventListener("click", () => {
    console.log("move right");
    pos = pos + 2 * inner_slider_container.children[0].scrollWidth + 40;
    console.log(pos);
    if (pos <= 2700) {
        inner_slider_container.style.transform = `translateX(-${pos}px)`;
    }
    else{
        pos = 2700;
    }
    
})