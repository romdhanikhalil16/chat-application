function signup(){
    window.location.replace('../signup/signup.html');
}
  const validation = () => {
    const inputEmail = document.getElementById('email').value;
    const inputPassword = document.getElementById('password').value;
    var get = JSON.parse(localStorage.getItem('key'));
    let email = get.find(r => r.email === inputEmail);
    if(email) {
      if(email.password === inputPassword) {
          let index = get.indexOf(email);
           email.presence = true;
           get[index] = email;
           localStorage.setItem('key', JSON.stringify(get));
           window.location.replace("../chatHome/chatHome.html");
      } else {
        alert("wrong information");
      }
    } else {
      alert("no user with this email");
    }
  }
