function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        msg:document.getElementById("msg").value,
    };

    const serviceID="service_p4hrhwk";
const templateID="template_wh2vvvs";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value;
        document.getElementById("email").value;
        document.getElementById("msg").value;
        console.log(res);
        alert("Your message sent successfully");
    })
    .catch((err) =>console.log(err));
}

 