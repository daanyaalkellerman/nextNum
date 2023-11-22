let numbers = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let index = 0;

function printNextElement() {
    if (index < numbers.length) {
        document.querySelector('.result').textContent = numbers[index];
        index++;
    } else {
        document.querySelector('.result').textContent = "No more elements in the array.";
    }
}
