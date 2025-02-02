import React, { useState, useEffect } from "react";

/**
 * @param {string} text - The entire sentence to type out.
 * @param {number} speed - Time (ms) between typing each character.
 * @param {number} pause - Time (ms) to show the '|' after each word.
 */
const Writer = ({ text, speed = 30, pause = 80 }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const words = text.split(" ");

    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const typeSentence = async () => {
      let currentText = "";

      for (let w = 0; w < words.length; w++) {
        const word = words[w];

        for (let i = 0; i < word.length; i++) {
          currentText += word[i];
          setTypedText(currentText);
          await wait(speed);
        }

        currentText += "|";
        setTypedText(currentText);
        await wait(pause);

        currentText = currentText.slice(0, -1);
        setTypedText(currentText);

        if (w < words.length - 1) {
          currentText += " ";
          setTypedText(currentText);
        }
      }
    };

    typeSentence();
  }, [text, speed, pause]);

  return <span>{typedText}</span>;
};

export default Writer;
