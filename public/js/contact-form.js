// import emailjs from 'emailjs';
const privateKey = 'b6xkrzPfXfnTE3OME';
const contactFormEl = document.getElementById('contact-form');
const inputs = document.querySelectorAll("#name", "#email", "#subject", "#message");
console.log(inputs);



const useEmailJS = () => {
    console.log(inputs);
    event.preventDefault();
    emailjs.sendForm("contact_service", "contact_template", event.target, privateKey)
        .then(() => {
            console.log('Success!')

            alert("Your message has been received (thank you!). I will respond as soon as I can.")

            contactFormEl.reset();

        }, () => {
            console.log('Failed...', error);

            alert("Hm. That didn't work. Why don't you just email me at john.proodian@gmail.com?")
    });
};

contactFormEl.addEventListener("submit", useEmailJS);