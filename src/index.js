const leftImage = document.getElementById('leftImage');
const rightImage = document.getElementById('rightImage');
const p = document.querySelector("p");

function randomFruit(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let fruitList = ['commonfig','strawberry' ,'tomato','pear','blueberry', 'apple', 'banana', 'melon'], semifinalList = [], finalList = [];
let random_left, random_right, left_fruit, right_fruit, count = 0, semicount = 0;

function random_number_friut() {
        random_left = randomFruit(0,fruitList.length-1);
        left_fruit = fruitList[random_left];
    
        do{ random_right = randomFruit(0,fruitList.length-1);   }while (random_left === random_right);
        right_fruit = fruitList[random_right];
        
        leftImage.src = `./fruitPicture/${left_fruit}.jpg`;
        leftImage.alt = `${left_fruit}`;
        rightImage.src = `./fruitPicture/${right_fruit}.jpg`;
        rightImage.alt = `${right_fruit}`;
}

function random_number_semi() {
    random_left = randomFruit(0,semifinalList.length-1);
    left_fruit = semifinalList[random_left];

    do{ random_right = randomFruit(0,semifinalList.length-1);   }while (random_left === random_right);
    right_fruit = semifinalList[random_right];
    
    leftImage.src = `./fruitPicture/${left_fruit}.jpg`;
    leftImage.alt = `${left_fruit}`;
    rightImage.src = `./fruitPicture/${right_fruit}.jpg`;
    rightImage.alt = `${right_fruit}`;
}

function semifinal() {
    p.innerHTML = '준결승';
    console.log("semifinal");
    random_number_semi();
}

function final() {
    p.innerHTML = '결승';
    console.log("final");
}

random_number_friut();  

leftImage.addEventListener('click', () => {
    if (count >= 4){
        if (semicount >= 2){
            final();
        }
        else{
            semifinal();
            finalList[semicount++] = left_fruit;
            semifinalList.splice(random_left, 1);
            semifinalList.splice(random_right, 1);
        }
    }
    else {
        semifinalList[count++] = left_fruit;
        fruitList.splice(random_left,1);
        fruitList.splice(random_right,1);
        console.log('next : ',semifinalList);
        random_number_friut();
    }
});
rightImage.addEventListener('click', () => {
    if (count >= 4){
        if (semicount >= 2){
            final();
        }
        else {
            semifinal();
            finalList[semicount++] = right_fruit;
            semifinalList.splice(random_left, 1);
            semifinalList.splice(random_right, 1);
        }
    }
    else {
        semifinalList[count++] = right_fruit;
        fruitList.splice(random_left,1);
        fruitList.splice(random_right,1);
        console.log('next : ',semifinalList);
        random_number_friut();
    }
});