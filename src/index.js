const leftImage = document.getElementById('leftImage');
const rightImage = document.getElementById('rightImage');

function randomFruit(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let fruitList = ['commonfig','strawberry' ,'tomato','pear','blueberry', 'apple', 'banana', 'melon'];
let random_left;
let random_right;
let left_fruit;
let right_fruit;

do {
    random_left = randomFruit(0,fruitList.length-1);
    left_fruit = fruitList[random_left];

    random_right;
    do{ random_right = randomFruit(0,fruitList.length-1);   }while (random_left === random_right);
    right_fruit = fruitList[random_right];
    
    leftImage.src = `./fruitPicture/${left_fruit}.jpg`;
    leftImage.alt = `${left_fruit}`;
    rightImage.src = `./fruitPicture/${right_fruit}.jpg`;
    rightImage.alt = `${right_fruit}`;
    } while((left_fruit === undefined)&&(right_fruit === undefined));
leftImage.addEventListener('click', () => {
    console.log(left_fruit);
    right_fruit = undefined; 
});
rightImage.addEventListener('click', () => {
    console.log(right_fruit);
    left_fruit = undefined;
});