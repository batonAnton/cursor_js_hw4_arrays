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


// обєднати в пари
let pairs = [];
for ( i = 0; i < boys.length; i++) {
    pairs[i] =     boys[i] + "," + girls[i];
  }

// const pairs = getPairs(students);
// console.log(pairs);
console.log(pairs);

// добавлення предметів до пар
let subjects = [];
for(i = 0; i < boys.length; i++){
    subjects.push(pairs[i] + "," + themes[i]);
}

console.log(subjects);

// добавлення оцінок

let 


