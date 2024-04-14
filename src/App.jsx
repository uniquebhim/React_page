
import React from 'react';

const App = () => {
  const handleClick = () => {
    // Replace 'image-url.jpg' with the URL of the image you want to download
    const imageUrl = '../public/nptl_certificate.jpg';
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh',backgroundColor:"white",width:'100vw' }}>
      <img
        src="../public/nptl_certificate.jpg" 
        alt="Displayed Image"
        style={{ cursor: 'pointer', margin: '30px',width:'40%', }}
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
