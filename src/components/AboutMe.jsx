import React, { useEffect, useRef } from "react";

import "../assets/AboutMe.css"; // Adjust the path to the CSS file
import Me from "../assets/images/me.jpeg";

function AboutMe() {
  const aboutTextRef1 = useRef(null); // Create a ref for the first paragraph
  const aboutTextRef2 = useRef(null); // Create a ref for the second paragraph

  useEffect(() => {
    const applyHighlighting = (ref) => {
      // Check if the ref has been set
      if (ref.current) {
        // Get the paragraph's text content
        let innerHTML = ref.current.innerHTML;

        // The keywords you want to highlight
        const keywords = [
          "Kevin",
          "web developer",
          "React",
          "Rails",
          "Japan",
          "applications",
          "front-end",
          "back-end",
        ];

        // Wrap each keyword with a span
        keywords.forEach((word) => {
          const styledWord = `<span class="highlight">${word}</span>`;
          if (!innerHTML.includes(styledWord)) {
            innerHTML = innerHTML.replace(
              new RegExp(`(${word})`, "gi"),
              styledWord
            );
          }
        });

        // Update the paragraph's innerHTML with the new changes
        ref.current.innerHTML = innerHTML;

        // Gradually add the highlight class to each keyword
        const highlightElements = document.querySelectorAll(".highlight");
        const initialDelay = 500; // 1-second delay for the first keyword
        const intervalDelay = 500; // 500ms delay between each subsequent keyword

        highlightElements.forEach((element, index) => {
          setTimeout(() => {
            element.classList.add("highlight-animate");
          }, initialDelay + index * intervalDelay); // Delay for the first keyword + interval for others
        });
      }
    };

    applyHighlighting(aboutTextRef1);
    applyHighlighting(aboutTextRef2);
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
            className="size-72 rounded mb-4 md:mb-0 md:mr-6 shadow-lg"
          />

          {/* Text */}
          <div>
            <p
              ref={aboutTextRef1}
              className="text-4xl sm:text-5xl md:text-6xl mb-4 font-bold"
            >
              Hello! I'm Kevin
            </p>

            <p
              ref={aboutTextRef2}
              className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold"
            >
              I'm a web developer with a strong foundation in front-end and
              back-end technologies. I am passionate about creating applications
              that make life easier.
            </p>

            <p className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold">
              When I am not coding, I like to exercise, study Japanese, and
              learn new technologies!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutMe;
