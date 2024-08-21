let dataBtn=document.getElementById('data');
dataBtn.addEventListener("click",getData);
function getData()
{
    //Create XMLHttpRequest Object
    let xhr=new XMLHttpRequest();
    //Need To Create Request
    xhr.open("GET","http://jsonplaceholder.typicode.com/users",true);
    //Send The Request
    xhr.send();
    //Once request sent,it takes some time to load the data
    xhr.onprogress=function(){
        let msgTag=document.getElementById('display-msg');
        msgTag.textContent="data loading......."
    }
    //Once Data is Loaded
    xhr.onload=function(){
        let students=JSON.parse(xhr.responseText);
        //let data=students.studentsArray;
        for(let student of students){
            console.log(student);
        }
        console.log(students);
    }
}