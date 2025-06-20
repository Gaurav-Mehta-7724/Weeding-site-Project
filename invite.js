function emailSend() {

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "gauravmehta7724@gmail.com",
        Password : "948E44F5E3646848055BFBAA2F3BF87A368B",
        To : 'gauravmehta7724@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}