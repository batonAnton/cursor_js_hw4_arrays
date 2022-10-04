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
    pairs[i] =     ' ' + boys[i] + "," + girls[i];
  }


console.log({pairs});

// добавлення предметів до пар
let subjects = [];
for(i = 0; i < boys.length; i++){
    subjects.push( ' ' + pairs[i] + "," + themes[i]);
}

console.log({subjects});

// добавлення оцінок

let rating = [];

for(i = 0;i < marks.length; i++){
    rating.push(students[i] + "," + marks[i]);
}

console.log({rating});

// добавлення випадкової оцінки студентам

let randomMarks = [];

for(i = 0; i < subjects.length; i++){
    randomMarks.push(subjects[i] + "," + getRandomMarks());
}

function getRandomMarks(minValue = 1, maxValue = 5){
    let res = Math.ceil(Math.random() * (maxValue - minValue)) + minValue;
    return res;
}


console.log({randomMarks});


