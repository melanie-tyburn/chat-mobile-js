function addMessage(message, me = true) {
    const template = `<div class="message">
      <div class="${me ? "myMessage" : "fromThem"}"
      data-date="${new Date().toLocaleTimeString()}">
        <p>${message}</p>
        <date> ${new Date().toLocaleTimeString()} </date>
      </div>
    </div>`;
  
    document.querySelector(".chat .messages").innerHTML += template;
  }
  
  function typing() {
    document.querySelector(".typing").classList.toggle("active");
    setTimeout(() => {
      document.querySelector(".typing").classList.toggle("active");
    }, 1000);
  }
  typing();
  
  addMessage("Hi!", false);
  addMessage("In this exercise you will work with events in JS", false);
  addMessage("Let's go!");
  
  /**
   * Listen to the submit of the form and add a new message 
   */
  
  // Code here
  const form = document.querySelector(".chat");
  let addNewMessage = (event) => { 
    let inputValue = document.querySelector("input[type=text]").value;
    event.preventDefault()
    if(inputValue.length < 1) {
      return;
    }
     addMessage(inputValue)
    document.querySelector("input[type=text]").value = ''
    handleAlert()
  }
  
  form.addEventListener("submit", (event) => addNewMessage(event))
  
  /**
   * Listen to the click on each message and create an alert
   */
  let handleAlert = (event) => { 
    const allMessages = document.querySelectorAll('.message')
  allMessages.forEach((message) =>
    message.addEventListener('click', (event) => {
    const date = document.querySelector("date").textContent;
    alert(date);
  }))
  }
  handleAlert()
  
  /**
   * Listen to every Keydown (from the keyboard) in the input and call
   * the function typing()
   */
  const inputField = document.querySelector("input[type='text']");
  inputField.addEventListener("keydown", typing);
  