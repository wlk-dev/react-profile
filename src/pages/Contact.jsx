import React from "react";

import profilePic from "../assets/imgs/profile.png"

export default function Contact() {
    return (
      <form
        target="_blank"
      >
        <div>
          <input type="text" placeholder="Your name" name="name" required />
        </div>
        <div>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div>
          <textarea placeholder="Your message" name="message" required />
        </div>
        <div>
          <button type="submit"> Send a message </button>
        </div>
      </form>
    );
};