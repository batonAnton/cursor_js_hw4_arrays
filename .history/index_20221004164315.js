const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
// students[i].lastIndexOf('а') === students[i].length-1
let boys = [];
let girls = [];
for(i = 0; i < students.length; i++){
    if(students[i].slice()){
        girls.push(students[i]);
    } else {
        boys.push(students[i]);
    }
}

console.log(girls);