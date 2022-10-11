// 우리가 흔히 아는 방식
const numbers = [1, 2, 3];
console.log(numbers);

// new(생성자함수로 만드는 방법)
// 매개변수를 원하는 만큼 넣을 수 있다.
// Array() 안에 숫자가 2개 들어가면 1번 방식과 동일한 방식으로 값이 출력되자만
// >> 2개 이상의 number가 들어가면 배열이 생성된다.
// 단일 숫자만을 넣게 되면 단일 숫자가 있는 배열 대신 그 길이만큼의 빈 배열이 생성된다.
// 만들어질 배열에 대한 길이로 표시된다. (잘 안씀))
const moreNumbers = new Array(5, 2);
console.log(moreNumbers);
//[empty * 5]

// 이것도 잘 안씀
const yetMoreNumbers = Array.from(1, 2);
console.log(yetMoreNumbers);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);
