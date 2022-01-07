const leftImage = document.getElementById('leftImage');
const rightImage = document.getElementById('rightImage');
const p = document.querySelector("p") ,h1 = document.querySelector("h1");

let fruitList = ['commonfig','strawberry' ,'tomato','pear','blueberry', 'apple', 'banana', 'melon'], semifinalList = [], finalList = new Array;
let random_left, random_right, left_fruit, right_fruit, count = 0, semicount = 0 , favorite , left, right;

random_number_friut(fruitList);


leftImage.addEventListener('click', () => { // 왼쪽 눌렀을 때
    favorite = left;
    console.log(favorite);
    compare(left_fruit);
});

rightImage.addEventListener('click', () => { // 오른쪽 눌렀을 때
    favorite = right;
    console.log(favorite);
    compare(right_fruit);
});

function randomFruit(min, max) { // 최솟값과 최댓값을 받아 그 사이의 무작위의 수를 내는 함수
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random_number_friut(list) { // 왼쪽 그림과 오른쪽 그림의 서로 다른 무작위의 수를 선택하고 그 값에 맞는 사진을 불러오는 함수
    random_left = randomFruit(0,list.length-1); 
    left_fruit = list[random_left];
    //left = list[random_left];
    list.splice(random_left, 1);
    
    random_right = randomFruit(0,list.length-1);
    right_fruit = list[random_right];
    //right = list[random_right];
    list.splice(random_right, 1);

    leftImage.src = `./fruitPicture/${left_fruit}.jpg`;
    leftImage.alt = `${left_fruit}`;
    rightImage.src = `./fruitPicture/${right_fruit}.jpg`;
    rightImage.alt = `${right_fruit}`;
}

function semifinal() { 
    p.innerHTML = '준결승';
    console.log("semifinal");
    random_number_friut(semifinalList);
}


function final() {
    p.innerHTML = '결승';
    console.log("final");
    console.log(finalList)
    random_number_friut(finalList);
    while (left_fruit == undefined && right_fruit == undefined) {
        random_number_friut;
    }

}

function compare (fruit) {
    if (count >= 4) {
        if (semicount >= 3){
            final();
            h1.innerHTML = `${favorite}이 당신이 가장 좋아하는 과일입니다.`;
        }
        else {
            finalList[semicount++] = fruit;
            console.log(semifinalList);
            semifinal();
            if (semicount >= 3) {compare(left_fruit)};
        }
    }
    else {
        semifinalList[count] = fruit;
        count += 1;
        console.log(semifinalList);
        console.log(count);
        random_number_friut(fruitList);
        if (count >= 4) compare(left_fruit);
    }
}