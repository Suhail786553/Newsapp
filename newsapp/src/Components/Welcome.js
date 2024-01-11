import React, { useState, useEffect } from "react";

const WelcomePage = () => {
  const rotatingTexts = [
    "Welcome to Our NewsSite!",
    "Explore Our Features",
    "Read Us Today",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % rotatingTexts.length
      );
    }, 3000); // Change text every 3 seconds (3000 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Set height to occupy full viewport height
    textAlign: "center",
    color: "black",
  };

  const headerStyle = {
    fontSize: "2.5rem",
    marginBottom: "20px",
  };

  const rotatingTextStyle = {
    fontSize: "1.5rem",
    fontStyle: "italic",
    /* Add any additional styles for the rotating text */
  };
  const logoStyle = {
    width: "150px", // Set the width of the logo as needed
    height: "150px", // Set the height of the logo as needed
    marginBottom: "20px", // Adjust the margin as needed
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://icon-library.com/images/news-icon-free/news-icon-free-9.jpg" // Replace this with your news app logo URL
        alt="News App Logo"
        style={logoStyle}
      />
      <h1 style={headerStyle}>Welcome to Our NewsMonkey Website</h1>
      <p style={rotatingTextStyle}>{rotatingTexts[currentTextIndex]}</p>
      {/* Add more content or components as needed */}
    </div>
  );
};

export default WelcomePage;
