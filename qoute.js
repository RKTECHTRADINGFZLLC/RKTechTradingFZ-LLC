function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phno: document.getElementById("phno").value,
    location: document.getElementById("location").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_wmcu7vi";
  const templateID = "template_j22sq0i";
//   const templateIDs = "template_lenlt49";


    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phno").value = "";
        document.getElementById("location").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
