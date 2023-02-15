import React, { useMemo } from 'react';

const RainbowText = ({ text }) => {
  const rainbowColors = [
    '#f105f1',
    '#d7b90d',
    '#08c408',
    "#ca0000",
  ];

  const words = useMemo(() => text.split(' '), [text]);
  const colorCount = rainbowColors.length;

  return (
    <h2>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          {Array.from(word).map((char, charIndex) => (
            <span
              key={charIndex}
              style={{
                color: rainbowColors[charIndex % colorCount],
                display: 'inline-block',
                // marginRight: "1px"
              }}
            >
              {char}
            </span>
          ))}
          {' '}
        </React.Fragment>
      ))}
    </h2>
  );
};

export default RainbowText;
