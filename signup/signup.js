 function add() {
let obj = {
     lastName : validLastName(document.getElementById('LastName').value),
      firstName : validLastName(document.getElementById('FirstName').value),
      date : document.getElementById('date').value,
      email : document.getElementById('email').value,
     password : document.getElementById('password').value,
     userName : document.getElementById('UserName').value,
     presence : false,
     messages : []
 }
 if(!localStorage.getItem('key')){
     var tab = [];
     tab.push(obj);
     localStorage.setItem('key',JSON.stringify(tab));
     window.location.replace("../login/login.html");
 }
 else {
    tab =JSON.parse(localStorage.getItem('key'));
    tab.push(obj);
    localStorage.setItem('key',JSON.stringify(tab));
    window.location.replace("../login/login.html");
 }}
 const validLastName = (value)=>{
     if(value.length < 6 ){
         return alert(value +''+ ' is court')
     }else{
         return value;
     }
 }

