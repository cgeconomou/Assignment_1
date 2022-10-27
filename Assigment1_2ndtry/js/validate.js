let students = [];
let firstName = document.getElementById('field1');
let lastName = document.getElementById('field2');
let tuitFees = document.getElementById('field3');
let birthDate=document.getElementById("field4");
let lesson=document.getElementById("field5");;
console.log(lesson);

let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', submit);

let divStudent = document.getElementById('students');

let btnReset = document.getElementById('reset');

 btnReset.addEventListener('click', reset);
let btnUpdate = document.getElementById('update');
btnUpdate.addEventListener('click', update);




function Student(firstname, lastname, tuitfees, birthdate,leSSon) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.tuitfees = tuitfees;
    this.birthdate = birthdate;
    this.lesson = leSSon;
}

function studentToString(stdnt) {
    return (`${stdnt.firstname} ${stdnt.lastname} ${stdnt.tuitfees} ${stdnt.birthdate} ${stdnt.lesson}`);
}


function submit(event) {
    event.preventDefault(); 

    if ((firstName.value=="") || (lastName.value=="")|| (tuitFees.value=="")||(birthDate.value=="") ||(lesson.value=="") ){
        window.alert("Please fill all the required fields!!!");
        btnReset.click();//edw ginete elenxos an exoun sublirw8ei ta ola ta pedia apo ton xristi
    }
    else{

    let myStudent = new Student(firstName.value, lastName.value, tuitFees.value, birthDate.value,lesson.value );
    students.push(myStudent);
    
    let btnedit = document.createElement('button');
    btnedit.textContent = 'edit';
     btnedit.studentIndex = students.length - 1;
    
     btnedit.addEventListener('click', edit);




    createParagraphElement(myStudent, btnedit);
 
    console.log(students);
    btnReset.click();
    }
}
function edit(){
    firstName.value=students[this.studentIndex].firstname;
    lastName.value=students[this.studentIndex].lastname;
    tuitFees.value=students[this.studentIndex].tuitfees;
    birthDate.value=students[this.studentIndex].birthdate;
    lesson.value=students[this.studentIndex].lesson;
    

    btnSubmit.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.studentIndex = this.studentIndex;

    console.log(studentToString(students[this.studentIndex]));

}

function update(event){
    event.preventDefault();
    if ((firstName.value=="") || (lastName.value=="")|| (tuitFees.value=="")||(birthDate.value=="") ||(lesson.value=="")){
        window.alert("Please fill all the required fields!!!");        
    }
    else{
    students[this.studentIndex] = new Student(firstName.value, lastName.value, tuitFees.value, birthDate.value,lesson.value);
    divStudent.innerHTML = '';
    for(let i = 0; i<students.length; i++){
      let btnedit = document.createElement('button');
      btnedit.addEventListener('click', edit);
      btnedit.textContent = 'edit';
      btnedit.studentIndex = i;
      createParagraphElement(students[i], btnedit);
    }
    btnUpdate.hidden = true;
    btnSubmit.hidden = false;
    btnReset.click();
    console.log(students[0]);
    }
  }


 function createParagraphElement(student,editButton){
     let paragraph=document.createElement("p");
     paragraph.innerText=studentToString(student);
    
     divStudent.append(paragraph);

     paragraph.append(" ",editButton);



 }

 function reset() {    
    btnUpdate.hidden = true;
    btnSubmit.hidden = false;
    console.log("Form is reset");    
}