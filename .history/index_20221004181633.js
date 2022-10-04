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
// for(j = 0; )

// const pairs = getPairs(students);
// console.log(pairs);

function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

var array1 = ["Vijendra","Singh"];
var array2 = ["Singh", "Shakya"];
    // Merges both arrays and gets unique items
var array3 = arrayUnique(array1.concat(array2));

console.log(array3);
