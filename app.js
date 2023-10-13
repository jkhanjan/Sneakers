const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "AIR FORCE",
        price: 119,
        colors: [
            {
                code: "black",
                Img: "./img/air.png",
            },
            {
                code: "darkblue",
                Img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "AIR JORDAN",
        price: 149,
        colors: [
            {
                code: "lightgray",
                Img: "./img/jordan.png",
            },
            {
                code: "darkblue",
                Img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "BLAZER",
        price: 109,
        colors: [
            {
                code: "lightgray",
                Img: "./img/blazer.png",
            },
            {
                code: "green",
                Img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                Img: "./img/crater.png",
            },
            {
                code: "lightgray",
                Img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                Img: "./img/hippie.png",
            },
            {
                code: "black",
                Img: "./img/hippie2.png",
            },
        ],
    },

];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");    

menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct  = products[index];  

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = '$' + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].Img;

        currentProductColor.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColor.forEach((color, index)=> {
    color.addEventListener("click", () =>{
        currentProductImg.src = choosenProduct.colors[index].Img;
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color  = "white";
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display= "flex";
})

close.addEventListener("click", () => {
    payment.style.display= "none";
})