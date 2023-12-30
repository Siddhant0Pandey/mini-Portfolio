import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  // // const handleSubmit = async (e) => {
  // //   e.preventDefault();

  // //   const formData = new FormData();
  // //   formData.append("name", name);
  // //   formData.append("email", email);
  // //   formData.append("message", message);

  // //   try {
  // //     const response = await fetch("https://formspree.io/f/mbjvpqlo", {
  // //       method: "POST",
  // //       body: formData,
  // //     });

  // //     if (response.ok) {
  // //       setName("");
  // //       setEmail("");
  // //       setMessage("");
  // //     } else {
  // //       setErrorMessage("Form submission failed. Please try again later.");
  // //     }
  // //   } catch (error) {
  // //     setErrorMessage("Network error. Please check your internet connection.");
  // //   }
  // // };

  return (
    <div className="form_section">
      <p>&lt; Query &gt;</p>
      <form
        // onSubmit={handleSubmit}
        className="form_container"
        action="https://formspree.io/f/mbjvpqlo"
        method="POST"
      >
        <div className="input_group">
          <label htmlFor="name">Hello, I am </label>
          <div className="underline-input">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="input_group">
          <label htmlFor="email">my email is</label>
          <div className="underline-input">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter the Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="input_group">
          <label htmlFor="message">My message for you is </label>
          <div className="underline-input">
            <textarea
              id="message"
              name="message"
              cols={30}
              rows={5}
              placeholder="Enter Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" className="submit_btn">
          Submit
        </button>
      </form>
      {/* {errorMessage && <div className="error_message">{errorMessage}</div>} */}
    </div>
  );
}
