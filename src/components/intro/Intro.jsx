import { useRef, useEffect } from "react";
import "./intro.scss";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    const strings = [
      "Cybersecurity professional.",
      "Software developer.",
      "Lifelong tech enthusiast.",
    ];
    let currentStringIndex = 0;
    let currentCharIndex = 0;
    let typingTimeout;

    function typeText() {
      if (currentCharIndex < strings[currentStringIndex].length) {
        textElement.textContent +=
          strings[currentStringIndex][currentCharIndex];
        currentCharIndex++;
        typingTimeout = setTimeout(typeText, 100);
        // Show the cursor while typing
        cursorElement.style.display = "inline";
      } else {
        setTimeout(deleteText, 2000);
        // Hide the cursor while deleting
        cursorElement.style.display = "none";
      }
    }

    function deleteText() {
      if (currentCharIndex > 0) {
        textElement.textContent = textElement.textContent.slice(0, -1);
        currentCharIndex--;
        typingTimeout = setTimeout(deleteText, 50);
      } else {
        currentStringIndex = (currentStringIndex + 1) % strings.length;
        typingTimeout = setTimeout(typeText, 1000);
      }
      // Show the cursor while deleting
      cursorElement.style.display = "inline";
    }

    const textElement = textRef.current;
    const cursorElement = textElement.nextSibling; // Get the cursor element

    typingTimeout = setTimeout(typeText, 1000);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/FALogoWhite.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Francisco Andrade</h1>
          <h3>
            <span ref={textRef}></span>
            <span className="cursor">|</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
