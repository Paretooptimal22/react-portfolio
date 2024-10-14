import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ContactMe() {
  return (
    <div className="flex-1 p-6">
      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>

        {/* Make the container flex */}
        <div className="flex flex-row items-center space-x-4 ">
          <a
            href="https://github.com/Paretooptimal22"
            className="flex items-center text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-sky-300 to-blue-300 duration-300 ... rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="size-6 mr-2" />{" "}
            {/* GitHub icon */}
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevincyoung/"
            className="flex items-center text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-sky-300 to-blue-300 duration-300 ... rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="size-6 mr-2" />{" "}
            {/* LinkedIn icon */}
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactMe;
