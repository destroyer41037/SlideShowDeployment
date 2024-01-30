console.log("js happened");

// setInterval will call a function every Nms

// let count = 0;
// function printCountInIncrement(){
//     count++;
//     console.log(count);
// }

// // calll our function every 3 seconds
// setInterval(printCountInIncrement,  3000);

let imageurls = 
["images/game.jpg",
"https://th.bing.com/th/id/OIP.5WV2MyFIvNETvaqgpTyv2gHaEK?w=330&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7",
"https://th.bing.com/th/id/OIP.3toEO9Jfxu9f499DnfEg2wHaE1?w=245&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
];

const slideShowImage = document.getElementById("slide-show-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

prevButton.addEventListener("click", () => {
    updateImage("prev");
});

nextButton.addEventListener("click", () => {
    updateImage("next");
})

// Use Set Interval to update the image every 3 seconds
let currentImageIndex = 0;

// Move to the next image
// Update the DOM to show it
// Keep track of the current index
// direction = either "prev" or "next"
function updateImage(direction){
    if(direction == "next"){
        currentImageIndex++;
    } else if(direction == "prev"){
        currentImageIndex--;
    } else {
        currentImageIndex++;
    }

    if(currentImageIndex >= imageurls){
        currentImageIndex = 0;
    }

    if(currentImageIndex >= imageurls.length){
        currentImageIndex = 0;
    }

    slideShowImage.src = imageurls[currentImageIndex];
}

setInterval(updateImage, 3000);