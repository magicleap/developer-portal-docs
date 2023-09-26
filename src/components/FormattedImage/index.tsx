import React, { ReactNode, CSSProperties, useState, useEffect } from 'react';
import IdealImage from '@theme/IdealImage';

interface Props {
  children: ReactNode;
  url: string;
  width?: number | string; 
}

function Image ({children, url, width}:Props): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // On component mount, check the window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is a common breakpoint for tablets, adjust as needed
    };

    // Initial check
    handleResize();

    // Set up the event listener
    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    // Prepare style for the figure div
    const figureStyle: CSSProperties = isMobile ? {
      marginInlineStart:  '0px',
      marginInlineEnd:  '0px'
    }:
    { 
      marginInlineStart:  '15px',
      marginInlineEnd:  '15px'
    };
    
  // Prepare style for the image
  const imageStyle: CSSProperties = isMobile ? 
    { width: '100%' } : 
    { width: width ? width : 'auto' };

  return (
    <figure className="custom-figure" style={figureStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <IdealImage img={url} alt={children} style={imageStyle} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <figcaption>
          <span
            style={{
              fontStyle: 'italic',
              fontSize: 'small',
              color: '#5c5d60',
              fontWeight: `300`,
              textAlign: 'center',
            }}>
            {children}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

export default Image;
