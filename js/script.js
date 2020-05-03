let loader = document.querySelector(".loader");
let strings = [
    "LIFE",
    "a journey",
    "hard",
    "fun",
    "easy",
    "cool"
];
let loopNumber = 0;
let count;
let textFromArr;
let textFromTag = "";
let isDeleting = false;
let timeout = 300;

let init = () => {

    count = loopNumber % strings.length;
    textFromArr = strings[count];

    if (!isDeleting) textFromTag = textFromArr.substring(0, textFromTag.length + 1);
    else textFromTag = textFromArr.substring(0, textFromTag.length - 1);
    
    loader.innerHTML = textFromTag;
    
    if (isDeleting) timeout = 200;

    if (!isDeleting && textFromTag == textFromArr) {
        isDeleting = true;
        timeout = 1500;
    }
    else if (isDeleting && textFromTag == "") {
        isDeleting = false;
        loopNumber++;
        timeout = 300;
    }

    setTimeout(() => {
        init();
    }, timeout);

}

init();