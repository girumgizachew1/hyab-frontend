import emailjs from "@emailjs/browser";

export const sendEmail = (e, refForm) => {
  e.preventDefault();
  console.log(refForm.current);
  console.log(refForm);
  emailjs
    .sendForm(
      "service_ti8z5s9", // service key
      "template_wf8uowi", // template key new
      refForm.current, // select the form to be sent
      "1fiMNHDFHzYxPTCIj" // public key
    )
    .then(
      () => {
        alert("Email sent successfully!");
        window.location.reload(false);
      },
      () => {
        alert("Failed to send Email, please try again");
      }
    );
};
