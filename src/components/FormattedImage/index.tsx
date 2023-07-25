import React, {ReactNode, CSSProperties} from 'react';
import IdealImage from '@theme/IdealImage';

interface Props {
  children: ReactNode;
  url: string;
  width?: number | string; // This can be either a number (representing pixels) or a string (like '100%')
}

function Image ({children, url, width}:Props): JSX.Element {
  // Prepare style for the image
  const imageStyle: CSSProperties = {
    width: width ? width : 'auto', // If width is provided, use it. Otherwise, default to 'auto'
  };

  return (
    <figure>
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
