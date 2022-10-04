const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// розділення на стать
let boys = [];
let girls = [];
for(i = 0; i < students.length; i++){
    let res = students[i].at(-1);
    if(res === 'а'){
        girls.push(students[i]);
    } else {
        boys.push(students[i]);
    }
}
console.log(girls);
console.log(boys);

// обєднати в пари
let combined = [];
for (var i = 0; i < boys.length; i++) {
    combined[i] =  girls[i] +  boys[i];
  }

// const pairs = getPairs(students);
// console.log(pairs);
console.log(combined);


