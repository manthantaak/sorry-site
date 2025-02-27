import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const ValentineQr: React.FC = () => {
  const qrValue = 'https://sorry-site.vercel.app/Valentine-Page'; // URL to be added here

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ border: '2px solid #ff69b4', borderRadius: '15px', padding: '20px', textAlign: 'center', backgroundColor: '#fff0f5' }}>
        
        <QRCodeSVG 
          value={qrValue} 
          size={256}
          bgColor="#ffffff"
          fgColor="#ff69b4"
          level="Q"
          includeMargin={true}
          imageSettings={{
            src: 'https://example.com/heart.png', // Replace with the URL of a heart image
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            excavate: true,
          }}
        />
      </div>
    </div>
  );
};

export default ValentineQr;
