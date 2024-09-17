// Image arrays for each piano
const piano1Images = [
    "https://uk.donnermusic.com/cdn/shop/products/2_f33007bf-8630-4565-a257-dd9e5f902acb_600x.jpg?v=1718250770",
    "https://uk.donnermusic.com/cdn/shop/products/7_700x.jpg?v=1718250770",
    "https://uk.donnermusic.com/cdn/shop/products/4_f4c2df69-bfff-4085-8b30-40a2e5ae04a4_700x.jpg?v=1718250770",
    "https://uk.donnermusic.com/cdn/shop/files/1_055ce5f2-c9a2-4386-a61f-0702cd668fe3_700x.jpg?v=1718250770"
];

const piano2Images = [
    "https://m.media-amazon.com/images/I/71gTPfWQDSL._AC_SL1500_.jpg",
    "https://k584otvs.cdn.imgeng.in/sites/ymlv5.19/productimages/900x900/NP145BUK-PACK2.jpg?1700656162",
    "https://www.yamahamusiclondon.com/sites/ymlLive/productimages/big/NP145BUK-PACK2_d.jpg",
    "https://i.ebayimg.com/images/g/q4UAAOSw8exmWihw/s-l960.jpg"
];

let piano1Index = 0;
let piano2Index = 0;
let autoChangeInterval;

// Function to change the image automatically
function autoChangeImage() {
    nextImage('piano1');
    nextImage('piano2');
}

// Function to change to the next image
function nextImage(pianoId) {
    if (pianoId === 'piano1') {
        piano1Index = (piano1Index + 1) % piano1Images.length;
        document.getElementById('piano1-img').src = piano1Images[piano1Index];
    } else if (pianoId === 'piano2') {
        piano2Index = (piano2Index + 1) % piano2Images.length;
        document.getElementById('piano2-img').src = piano2Images[piano2Index];
    }
}

// Function to change to the previous image
function prevImage(pianoId) {
    if (pianoId === 'piano1') {
        piano1Index = (piano1Index - 1 + piano1Images.length) % piano1Images.length;
        document.getElementById('piano1-img').src = piano1Images[piano1Index];
    } else if (pianoId === 'piano2') {
        piano2Index = (piano2Index - 1 + piano2Images.length) % piano2Images.length;
        document.getElementById('piano2-img').src = piano2Images[piano2Index];
    }
}

// Automatically change images every 3 seconds
autoChangeInterval = setInterval(autoChangeImage, 3000);

// Optional: Clear auto change interval when the user interacts with the buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        clearInterval(autoChangeInterval);
        // Optionally restart the automatic change after some delay
        autoChangeInterval = setInterval(autoChangeImage, 3000);
    });
});
