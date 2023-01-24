import React, {ReactNode} from 'react';
import IdealImage from '@theme/IdealImage';

interface Props {
  children: ReactNode;
  url: string;
}

function Image ({children, url}:Props): JSX.Element {
  return (
     <figure>
         <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}><IdealImage img={url} alt={children} />
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
                }}>{children}</span></figcaption></div>
      </figure>
);
}

export default Image;
