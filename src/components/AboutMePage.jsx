import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the GitHub icon
import '../assets/AboutMePage.css'; // Adjust the path to the CSS file
import Me from '../assets/images/me.jpeg';

function AboutMePage() {
  const aboutTextRef = useRef(null); // Create a ref for the paragraph

  useEffect(() => {
    // Check if the ref has been set
    if (aboutTextRef.current) {
      // Get the paragraph's text content
      let innerHTML = aboutTextRef.current.innerHTML;

      // The keywords you want to highlight
      const keywords = ['web developer', 'React', 'Rails', 'Japan', 'applications'];

      // Wrap each keyword with a span
      keywords.forEach((word) => {
        const styledWord = `<span class="highlight">${word}</span>`;
        if (!innerHTML.includes(styledWord)) {
          innerHTML = innerHTML.replace(new RegExp(`(${word})`, 'gi'), styledWord);
        }
      });

      // Update the paragraph's innerHTML with the new changes
      aboutTextRef.current.innerHTML = innerHTML;

      // Gradually add the highlight class to each keyword
      const highlightElements = document.querySelectorAll('.highlight');
      const initialDelay = 500; // 1-second delay for the first keyword
      const intervalDelay = 500; // 500ms delay between each subsequent keyword

      highlightElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('highlight-animate');
        }, initialDelay + index * intervalDelay); // Delay for the first keyword + interval for others
      });
    }
  }, []);

  return (
    <main className="flex-1 p-6">
      {/* About Me Section */}
      <section id="about" className="mb-8">
        <div className="flex flex-col md:flex-row items-start">
          {/* Image */}
          <img
            src={Me} // Replace this with the actual path to your image
            alt="Kevin Young"
            className="size-72 rounded-lg mb-4 md:mb-0 md:mr-6 shadow-lg"
          />

          {/* Text */}
          <div>
            <p ref={aboutTextRef} className="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold">
              Hello! I'm Kevin, a web developer with experience working with React, Rails,
              and more. I love creating applications that make life easier.
            </p>

            <p className="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold">
              When I am not coding, I like to exercise, play sports, study Japanese, and learn new technologies!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>

        {/* Make the container flex */}
        <div className="flex flex-row items-center space-x-4 ">
          <a
            href="https://github.com/Paretooptimal22"
            className="flex items-center text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-sky-300 to-blue-300 duration-300 ... rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="size-6 mr-2" /> {/* GitHub icon */}
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevincyoung/"
            className="flex items-center text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-sky-300 to-blue-300 duration-300 ... rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="size-6 mr-2" /> {/* LinkedIn icon */}
            LinkedIn
          </a>
        </div>
      </section>

    </main>
  );
}

export default AboutMePage;
