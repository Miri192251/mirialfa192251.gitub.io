//השורות האלו מגדירות את התמונות ואת המקורות שלהם
let imagesArray = [];
for (let index = 1; index < 39; index++) {
    imagesArray[index] = "../images/double" + index + ".png";
}
//הגדרת המטריצה 
let matrixOfCards = [
    [imagesArray[5], imagesArray[6], imagesArray[4], imagesArray[2], imagesArray[3], imagesArray[1]],
    [imagesArray[6], imagesArray[7], imagesArray[8], imagesArray[9], imagesArray[10], imagesArray[11]],
    [imagesArray[3], imagesArray[10], imagesArray[12], imagesArray[13], imagesArray[14], imagesArray[15]],
    [imagesArray[1], imagesArray[7], imagesArray[15], imagesArray[16], imagesArray[17], imagesArray[18]],
    [imagesArray[4], imagesArray[15], imagesArray[11], imagesArray[19], imagesArray[20], imagesArray[21]],
    [imagesArray[15], imagesArray[9], imagesArray[24], imagesArray[22], imagesArray[23], imagesArray[5]],
    [imagesArray[4], imagesArray[9], imagesArray[14], imagesArray[18], imagesArray[25], imagesArray[26]],
    [imagesArray[1], imagesArray[11], imagesArray[13], imagesArray[23], imagesArray[25], imagesArray[27]],
    [imagesArray[3], imagesArray[7], imagesArray[21], imagesArray[22], imagesArray[25], imagesArray[28]],
    [imagesArray[2], imagesArray[10], imagesArray[17], imagesArray[20], imagesArray[24], imagesArray[25]],
    [imagesArray[1], imagesArray[2], imagesArray[3], imagesArray[4], imagesArray[29], imagesArray[5], imagesArray[6]],
    [imagesArray[6], imagesArray[7], imagesArray[8], imagesArray[9], imagesArray[30], imagesArray[10], imagesArray[11]],
    [imagesArray[3], imagesArray[10], imagesArray[12], imagesArray[13], imagesArray[31], imagesArray[14], imagesArray[15]],
    [imagesArray[1], imagesArray[7], imagesArray[15], imagesArray[16], imagesArray[32], imagesArray[17], imagesArray[18]],
    [imagesArray[4], imagesArray[15], imagesArray[11], imagesArray[19], imagesArray[33], imagesArray[20], imagesArray[21]],
    [imagesArray[5], imagesArray[9], imagesArray[15], imagesArray[22], imagesArray[34], imagesArray[23], imagesArray[24]],
    [imagesArray[4], imagesArray[9], imagesArray[14], imagesArray[18], imagesArray[35], imagesArray[25], imagesArray[26]],
    [imagesArray[1], imagesArray[11], imagesArray[13], imagesArray[23], imagesArray[36], imagesArray[25], imagesArray[27]],
    [imagesArray[3], imagesArray[7], imagesArray[21], imagesArray[22], imagesArray[37], imagesArray[25], imagesArray[28]],
    [imagesArray[2], imagesArray[10], imagesArray[17], imagesArray[20], imagesArray[38], imagesArray[24], imagesArray[25]]
];
// בטבלת הגריד - הגדרות של מיקום וגודל
let columns = ["6/11", "12/16", "5/9", "10/13", "14/17", "8/16"];
let rows = ["2/3", "2/3", "3/4", "3/4", "3/4", "4/5"];
let highColumns = ["11/17", "4/10", "11/17", "14/19", "9/14", "4/9", "4/10"];
let highRows = ["4/5", "2/3", "2/3", "3/4", "3/4", "3/4", "4/5"];
//הגדרת הכיתוב "זמנך תם"
let gameOver = document.createElement('div');
gameOver.innerHTML = "זמנך תם";
gameOver.className = "timeOver";
let low, grade, EnterName;
//הגדרת הפונקציה של הטיימר
let countItDown = function () {
    let countdown = document.querySelector("#countdown");
    let currentTime = parseFloat(countdown.textContent);
    if (currentTime > 0) {
        countdown.textContent = currentTime - 1;
    } else {

        andGame();
        window.clearInterval(countItDown);

    }
};
// let tableWinerssecond = function () {
//     let points = window.localStorage.getItem(EnterName);
//     let pointsPrint = JSON.parse(points);
//     let printpoints = document.createElement('label');
//     printpoints.innerHTML = pointsPrint.grade;
// }

// let tableWinersFirst = function () {
//     let winners = document.createElement("div");
//     winners.className = "elemnt";
//     let name = document.createElement('label');
//     name.innerHTML = "הכנס שם:";
//     EnterName = document.createElement('input');
//     EnterName.type = "text";
//     let submit1 = document.createElement('botton');
//     winners.append("name");
//     winners.append("EnterName");
//     winners.append("submit1");
//     submit1.addEventListener('click', tableWinerssecond());
// }
// let winnerTable1 = document.querySelector("#winnersButton");
// winnerTable1.addEventListener('click', tableWinersFirst());


//פונקציה לסיום המשחק בסוף הטיימר
let andGame = function () {
    document.body.prepend(gameOver);
    document.querySelector(".circle1").style.display = "none";
    document.querySelector(".circle2").style.display = "none";
    document.querySelector(".time").style.display = "none";
    backgroundnoise.autoplay = "false";
    let button = document.querySelectorAll(".button");
    for (let index = 0; index < button.length; index++) {
        button[index].style.display = "inline";
    }
    let startButton = document.querySelector("#startingGameButton");
    startButton.addEventListener('click', repeatGame);
    // window.localStorage.setItem(grade)
    // let uppdateGrade = document.('audio');
    let updateGrade1 = window.localStorage.getItem(EnterName);
    let updateGrade2 = JSON.parse(updateGrade1);
    updateGrade2.grade+=this.grade;
}
//הגדרות צליל רקע
let backgroundSound = document.createElement('audio');
backgroundSound.src = "../audio/backgroundSound.mp3"
backgroundSound.autoplay = "true";
let sameImage, preesedImage, allImages;
//פונקציה ללחיצה על תמונות שוות
let onSameImageClick = function () {
    

    grade = document.querySelector("#grade");
    let currentGrade = parseFloat(grade.textContent);
    grade.textContent = currentGrade + 1;
    handsNoise();
    preesedImage.removeEventListener('click', onSameImageClick);
};
let handsNoise = function (e) {
    let winAudio = document.createElement("audio");
    winAudio.src = "../audio/glocken.mp3";
    winAudio.autoplay = "true";
    document.body.appendChild(winAudio);
}
let failureNoise = function (e) {
    let failureAudio = document.createElement("audio");
    failureAudio.src = "../audio/failure.mp3";
    failureAudio.autoplay = "true";
    document.body.appendChild(failureAudio);
}
let backgroundnoise = function (e) {
    let backgroundnoise = document.createElement("audio");
    backgroundnoise.src = "../audio/backgroundSound.mp3";
    backgroundnoise.autoplay = "true";
    document.body.appendChild(backgroundnoise);
}
let repeatGame = function () {
    document.querySelector(".circle1").style.display = "grid";
    document.querySelector(".circle2").style.display = "grid";
    document.querySelector(".time").style.display = "block";
    let button = document.querySelectorAll(".button");

    let countdown = document.querySelector("#countdown");
    countdown.textContent = 15;
    document.querySelector(".timeOver").remove();
    for (let index = 0; index < button.length; index++) {
        button[index].style.display = "none";
    }
    for (let index = 0; index < allImages.length; index++) {
        allImages[index].remove();
    }
    document.querySelector("#grade").innerHTML = "0";
    if (low) {
        window.setTimeout(lowLevel, 0);
    } else {
        window.setTimeout(highLevel, 0);
    }

}
let JustOneTimeElements = function () {
    let mainTag = document.querySelector('main');
    let firstTag = document.querySelector('.first');
    firstTag.style.display = "none"
    mainTag.style.display = "block";
    window.setInterval(countItDown, 1000);
    document.body.appendChild(backgroundSound);



    if (low) {
        window.setTimeout(lowLevel, 0);
    } else {
        window.setTimeout(highLevel, 0);
    }
    window.setTimeout(backgroundnoise, 0);

}
let lowLevel = function () {

    let minPosition = 100,
        numberOfCard,
        firstIndex,
        secondIndex,
        i1 = 0,
        i2 = 0,
        result = false,
        index,
        foundDiv,
        firstSameImage,
        secondSameImage, low = true;

    let firstNumberOfCard = (Math.floor(Math.random() * 10));
    let secondNumberOfCard = (Math.floor(Math.random() * 10)); //הגרלת מספר בין 0 ל 6
    //הלולאה הזאת בודקת שהכרטיסים לא יהיו שווים
    while (firstNumberOfCard == secondNumberOfCard) {
        secondNumberOfCard = (Math.floor(Math.random() * 10));
    }
    //הלולאה הזו מכניסה את התמונות לתוך הכרטיסים
    for (let i = 0; i < 6; i++) {
        let firstImage = document.createElement('img');
        firstImage.src = matrixOfCards[firstNumberOfCard][i];
        firstImage.style.width = "85px";
        firstImage.style.gridColumn = columns[i];
        firstImage.style.gridRow = rows[i];
        firstImage.className = "images";
        foundDiv = document.querySelector(".circle1");
        foundDiv.append(firstImage);

        let secondImage = document.createElement('img');
        secondImage.src = matrixOfCards[secondNumberOfCard][i];
        secondImage.style.width = "85px";
        secondImage.style.gridColumn = columns[i];
        secondImage.style.gridRow = rows[i];
        secondImage.className = "images";
        foundDiv = document.querySelector(".circle2");
        foundDiv.append(secondImage);

        for (index = 0; index < 6 && !result; index++) {

            if (matrixOfCards[firstNumberOfCard][i] == matrixOfCards[secondNumberOfCard][index]) {
                sameImage = firstImage;
                result = true;
               
                break;


            }
        }

    }
    //sameImage.addEventListener('click', onSameImageClick);
    allImages = document.querySelectorAll(".images");
    for (index = 0; index < allImages.length; index++) {
        preesedImage = allImages[index];
        if (sameImage.src === preesedImage.src) {
            preesedImage.addEventListener('click', () => {
                onSameImageClick();
                for (let index = 0; index < allImages.length; index++) { //הלולאה הזו מסירה את כל התמונות הקודמות
                    allImages[index].remove();
                }
                window.setTimeout(lowLevel, 500);
            })

        } else {
            preesedImage.addEventListener('click', () => {
                failureNoise();
                for (let index = 0; index < allImages.length; index++) { //הלולאה הזו מסירה את כל התמונות הקודמות
                    allImages[index].remove();
                }
                window.setTimeout(lowLevel, 500);
            })

        }

    }
}
let highLevel = function () {

    let minPosition = 100,
        numberOfCard,
        firstIndex,
        secondIndex,
        i1 = 0,
        i2 = 0,
        result = false,
        index,
        foundDiv,
        firstSameImage,
        secondSameImage, low = false;

    let firstNumberOfCard = 10 + (Math.floor(Math.random() * 10));
    let secondNumberOfCard = 10 + (Math.floor(Math.random() * 10)); //הגרלת מספר בין 10 ל 20
    //הלולאה הזאת בודקת שהכרטיסים לא יהיו שווים
    while (firstNumberOfCard == secondNumberOfCard) {
        secondNumberOfCard = 10 + (Math.floor(Math.random() * 10));
    }
    //הלולאה הזו מכניסה את התמונות לתוך הכרטיסים
    for (let i = 0; i < 7; i++) {
        let firstImage = document.createElement('img');
        firstImage.src = matrixOfCards[firstNumberOfCard][i];
        firstImage.style.width = "75px";
        firstImage.style.gridColumn = highColumns[i];
        firstImage.style.gridRow = highRows[i];
        firstImage.className = "images";
        foundDiv = document.querySelector(".circle1");
        foundDiv.append(firstImage);

        let secondImage = document.createElement('img');
        secondImage.src = matrixOfCards[secondNumberOfCard][i];
        secondImage.style.width = "75px";
        secondImage.style.gridColumn = highColumns[i];
        secondImage.style.gridRow = highRows[i];
        secondImage.className = "images";
        foundDiv = document.querySelector(".circle2");
        foundDiv.append(secondImage);

        for (index = 0; index < 7 && !result; index++) {

            if (matrixOfCards[firstNumberOfCard][i] == matrixOfCards[secondNumberOfCard][index]) {
                sameImage = firstImage;
                result = true;
             
                break;


            }
        }

    }
    //sameImage.addEventListener('click', onSameImageClick);
    allImages = document.querySelectorAll(".images")
    for (index = 0; index < allImages.length; index++) {
        preesedImage = allImages[index];
        if (sameImage.src === preesedImage.src) {
            preesedImage.addEventListener('click', () => {
                onSameImageClick();
                for (let index = 0; index < allImages.length; index++) { //הלולאה הזו מסירה את כל התמונות הקודמות
                    allImages[index].remove();
                }
                window.setTimeout(highLevel, 500);
            })

        } else {
            preesedImage.addEventListener('click', () => {
                failureNoise();
                for (let index = 0; index < allImages.length; index++) { //הלולאה הזו מסירה את כל התמונות הקודמות
                    allImages[index].remove();
                }
                window.setTimeout(highLevel, 500);
            })

        }

    }
}
let easyButton = document.querySelector(".easy");
easyButton.addEventListener('click', () => {
    low = true;
    JustOneTimeElements();
});
let highButton = document.querySelector(".hard");
highButton.addEventListener('click', () => {
    low = false;
    JustOneTimeElements();
});
