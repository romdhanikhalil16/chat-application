const getUser = () => {
  let get = JSON.parse(localStorage.getItem("key"));
  let user = get.find((r) => r.presence === true);
  document.getElementById("userName").innerHTML = `hello ${user.userName}`;
};
const sendMessage = () => {
  // get element by id
  const inputMessage = document.getElementById("inputMessage").value;
  // get time with Date.now();
  // message = {value : get element by id , time : get time}
  // lezmk tjib l'object koll mel local storage
  let get = JSON.parse(localStorage.getItem("key"));
  let messageDone = {
    value: inputMessage,
    date: new Date()
  };
  // user.message.push()
  let user = get.find((r) => r.presence === true);
  let index = get.indexOf(user);
  get[index].messages.push(messageDone);
  // set to local storage
  localStorage.setItem("key", JSON.stringify(get));
  // getMessage()
  getMessage();
};
const getMessage = () => {
 let user = JSON.parse(localStorage.getItem('key'));
 let message = rangeTime(user);
 let html = "";
 message.map((mess) => {
   if(mess.user === true) {
     html += `<div class="user">
      <p class="userMessage">${mess.value}</<p>
       </div>`
    } else {
    html += `<div class="noUser">
    <p class="noUserMessage">${mess.value}</<p>
     </div>`
   }
 })
 document.getElementById("message").innerHTML = html;
};
const logout = () => {
  let users = JSON.parse(localStorage.getItem('key'));
  users.map((user,i) => {
    if(user.presence === true) {
      users[i] = {...user,presence:false};
      i = users.length;
      localStorage.setItem('key',JSON.stringify(users));
      window.location.replace("../login/login.html");
    }
  })
}
const rangeTime = (tab) => {
  let message = [];
  let arangeMessage = [];
  tab.map((user) => {
     user.messages.map(mess => {
      if(user.presence === true) {
         message.push({...mess,user : true})
      } else {
        message.push({...mess,user : false})
      }
     })
  })
  while(message.length > 0) {
     let old = new Date(Math.min.apply(null,message.map((time) => {
        return new Date(time.date);
     })))
     let oldMessage = message.find(r => new Date(r.date).getTime() === new Date(old).getTime());
     arangeMessage.push(oldMessage);
     let index = message.indexOf(oldMessage);
     message.splice(index,1);
  }
  return arangeMessage;
}
const send = document.getElementById("send-button");
send.addEventListener("click", function () {
  if (document.getElementById("inputMessage").value == "") {
    alert("please Enter something in Chat....");
  } else {
    sendMessage();
  }
});
window.addEventListener("load", () => {
  getUser();
  getMessage();
});
