let stu_1={id:101,name:"Aditya Rath",email:"rathaditya@gmail.com",gender:"Male",marks:[37,56,89,54,62],role:"Student",pw:1234};
let stu_2={id:102,name:"Ravi Teja",email:"ravi@gmail.com",gender:"Male",marks:[73,65,27,42,92],role:"Student",pw:2345};
let stu_3={id:103,name:"Sai Kumar",email:"sai@gmail.com",gender:"Male",marks:[54,79,97,83,67],role:"admin",pw:3456};
let stu_4={id:104,name:"Srujana Thinnavara",email:"srj@gmail.com",gender:"Female",marks:[100,86,76,67,89],role:"Student",pw:4567};
let stu_5={id:105,name:"Deepthi Sharma",email:"Deepthia@gmail.com",gender:"Female",marks:[64,72,87,91,34],role:"Student",pw:5678};
let students=[stu_1,stu_2,stu_3,stu_4,stu_5];
console.log(students);
//Create Username
function createUsername(student){
    student.username=student.name.toLowerCase().split(" ").map((name)=>
    {return name[0]}).join("");
    console.log(student);
}
createUsername(students[2]);
//Total Marks
function totalMarks(marks){
    let sum=0;
    for(let m of marks)
    {
        sum+=m;
    }
    return sum;
}
//Calc Percentage
let maxMarks=500;
function calcPercentage(marks){
    let Percentage=(marks/maxMarks)*100;
    return Percentage;
}
//Display All Students
function displayStudents(Students){
    if(students.length!=0){
        let eachStu=``;
        students.forEach(function(stu)
    {
        let tMarks=totalMarks(stu.marks);
        let per=calcPercentage(tMarks);
        let res=per>=40?'pass':'Fail';
        eachStu=`<tr>
            <td>${stu.id}</td>
            <td>${stu.name}</td>
            <td>${stu.email}</td>
            <td>${stu.gender}</td>
            <td>${tMarks}</td>
            <td>${res}</td>
        </tr>`;
    });
    document.getElementById('display-data').innerHTML=eachStu;
    }
}