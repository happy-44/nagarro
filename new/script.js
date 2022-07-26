function myfunction() {   
    document.getElementById("btn").disabled = true;
    document.getElementById("name").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("msg").disabled = true;
    

    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var msg=document.getElementById("msg").value;
    var body="<span align='center'>A Message From Website<span> <br><br>Name : "+name +"<br><br>Email : "+email+"<br><br>Phone Number : " +phone+"<br><br>Message : "+msg;


    Email.send({
        Host : "smtp.gmail.com",
        Username : "happymittal129@gmail.com",
        Password : "abc@1234",
        To : `happymittal129@gmail.com,${email}`,
        From : "happymittal203@gmail.com",
        Subject : "Email from "+ name,
        Body : body,
        Cc : email
    }).then(
    message => {
        if (message !==""){
            alert('Thank You for Connecting.');
            document.getElementById("myForm").reset();
            document.getElementById("btn").disabled = false;
            document.getElementById("name").disabled = false;
            document.getElementById("email").disabled = false;
            document.getElementById("phone").disabled = false;
            document.getElementById("msg").disabled = false;
            
        }
        else{
            console.log(message);
            alert("Sorry,Cannot send Message");
            document.getElementById("myForm").reset();
            document.getElementById("btn").disabled = false;
            document.getElementById("name").disabled = false;
            document.getElementById("email").disabled = false;
            document.getElementById("phone").disabled = false;
            document.getElementById("msg").disabled = false;
            
        }
    }
    );
}