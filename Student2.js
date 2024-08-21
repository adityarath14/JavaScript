let stu_1={id:101,name:"Amit Pandey",email:"amit@gmail.com",gender:"Male",marks:[37,56,89,54,62],role:"student",pw:1234};
let stu_2={id:102,name:"Ravi Teja",email:"ravi@gmail.com",gender:"Male",marks:[73,65,27,42,92],role:"student",pw:2345};
let stu_3={id:103,name:"sai kumar",email:"sai@gmail.com",gender:"Male",marks:[54,79,97,83,67],role:"admin",pw:3456};
let stu_4={id:104,name:"Srujana Thinnavara",email:"srj@gmail.com",gender:"Female",marks:[100,86,76,67,89],role:"student",pw:4567};
let stu_5={id:105,name:"Deepthi Sharma",email:"Deepthi@gmail.com",gender:"Female",marks:[64,72,87,91,34],role:"student",pw:5678};
let students=[stu_1,stu_2,stu_3,stu_4,stu_5];
console.log(students);
//Create Username
function createUsername(students)
{
    students.forEach((student)=>
    {
        student.username=student.name.toLowerCase().split(" ").map((name)=>{return name[0]}).join("");
    })
}
createUsername(students);
//Total marks
function totalMarks(marks)
{
    let sum=0;
    for(let m of marks)
    {
        sum+=m;
    }
    return sum;
}
//Calc Percentage
let maxMarks=500;
function calcPercentage(marks)
{
    let percentage=(marks/maxMarks)*100;
    return percentage;
}
//display All Students
function displayStudents(students)
{
    if(students.length!=0)
    {
        let eachStu=``;
        students.forEach(function(stu)
        {
            let tMarks=totalMarks(stu.marks);
            let per=calcPercentage(tMarks);
            let res=per>=40 ?"Pass":"Fail";
            eachStu+=`<tr>
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
displayStudents(students);
//Display Student Details
function studentData(student)
{
    console.log(student);
    let tMarks=totalMarks(student.marks);
    let per=(calcPercentage(tMarks)).toFixed(0);
    let htmlTemplate=`<h2>${student.name}</h2>
                      <h2>${student.email}</h2>
                      <h2>${tMarks}</h2>
                      <h2>${per}%</h2>`;

    document.getElementById('stu-data').innerHTML=htmlTemplate;
}
//LogIn Functionality
let logInBtn=document.getElementById('log-in');
let usernameBox=document.getElementById('usn');
let passwordBox=document.getElementById('pw');
logInBtn.addEventListener('submit',function(e)
{
    e.preventDefault();
    let usn=usernameBox.value.toLowerCase().trim();
    let pw=Number(passwordBox.value.trim());
    let student=students.find(function(stu)
    {
        return stu.username==usn;
    });
    let textTag=document.getElementById('text-display');
    if(student&&student.pw==pw)
    {
        textTag.textContent=`Welcome Back , ${student.name} 😊`;
        if(student.role=='admin') 
        {
            logInAdmin();
        }
        else
        {
            logInStudent();
            studentData(student)
        }
    }
    usernameBox.value=passwordBox.value='';  
})
//Log In Admin Function
function logInAdmin()
{
    let adminEl=document.getElementById("admin-section");
    let filterEl=document.getElementById("filter-section");
    adminEl.classList.remove('hidden');
    filterEl.classList.remove('hidden');
}
//Log In Student Function
function logInStudent()
{
    let stuEl=document.getElementById("student-section");
    stuEl.classList.remove('hidden');
}
//Filter By Name
let filterNameEl=document.getElementById('stu-name');
filterNameEl.addEventListener('keyup',function()
{
    let usn=filterNameEl.value;
    let stts=filterStudents(usn,students);
    if(usn.length==0 || stts.length==0)
    {
        document.getElementById('stu-data').innerHTML="No Data Found!!"; 
    }
    else 
    {
        displayStudents(stts);
    }
});
function filterStudents(enteredName,orgArr)
{
    enteredName=enteredName.toLowerCase().trim();
    let filteredObjects=[];
    for(let student of orgArr)
    {
        let originalName=student.name.toLowerCase().trim();

        if(originalName.startsWith(enteredName))
        {
            filteredObjects.push(student);
        }
    }
    return filteredObjects;
}