// Sending Data to Mail

// Listenig to form
const contactForm = document.querySelector(".contact__form");

async function handleFormSubmit(event) {
  event.preventDefault();
  const subject = document.querySelector(".subject");
  const msgStatus = document.querySelector(".msg__status");
  subject.value = "Msg via Naruto Webpage";

  const form = event.currentTarget;

  const url = form.action;

  try {
    const formData = new FormData(form);

    const fetchOptions = {
      method: contactForm.method,
      headers: {
        Accept: "application/json",
      },
      body: formData,
    };

    await fetch(url, fetchOptions);

    msgStatus.innerHTML = "Your message has been sent.";
    msgStatus.style.display = "block";
    msgStatus.style.textAlign = "center";
    setTimeout(() => {
      msgStatus.style.display = "none";
    }, 4000);
    form.reset();
  } catch (err) {
    msgStatus.innerHTML =
      "Oops! There was a problem delivering your message, please contact via other means.";
    msgStatus.style.display = "block";
    msgStatus.style.textAlign = "center";
    setTimeout(() => {
      msgStatus.style.display = "none";
    }, 4000);
    form.reset();
  }
}

contactForm.addEventListener("submit", handleFormSubmit);
