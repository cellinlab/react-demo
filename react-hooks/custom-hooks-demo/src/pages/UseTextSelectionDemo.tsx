import { useState, useRef } from 'react';

import { useTextSelection } from '../hooks';


const UseTextSelectionDemo = () => {
  const rangeRef = useRef(null);

  const {
    text: selectedText,
    top,
    left,
    bottom,
    right,
    width,
    height,
  } = useTextSelection();
  const selection = useTextSelection(rangeRef);
  return (
    <div>
      <h2>UseTextSelectionDemo</h2>
      <div>
        <p>selectedText: {selectedText}</p>
        <p>top: {top}</p>
        <p>left: {left}</p>
        <p>bottom: {bottom}</p>
        <p>right: {right}</p>
        <p>width: {width}</p>
        <p>height: {height}</p>
      </div>
      <p>You can select text in the block below:</p>
      <div
        style={{
          width: "50%",
          border: "1px solid #ccc",
          padding: "10px",
        }}
        ref={rangeRef}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          scelerisque magna et orci porttitor ullamcorper. Proin euismod
          pretium dolor, quis ultricies nunc. Donec auctor, sapien eget
          ullamcorper fermentum, eros nisl posuere sapien, vel mattis
          nulla eros eget urna. Donec euismod, velit vel euismod
          fermentum, ipsum tortor posuere nisl, ut finibus elit nisl
          vitae mi. Sed vitae odio euismod, ultrices magna vitae,
          ultricies lacus. Donec vitae eros eget odio ultricies
          ultricies. Donec euismod, velit vel euismod fermentum, ipsum
          tortor posuere nisl, ut finibus elit nisl vitae mi. Sed vitae
          odio euismod, ultrices magna vitae, ultricies lacus. Donec
          vitae eros eget odio ultricies ultricies.
        </p>
      </div>
    </div>
  )
}

export default UseTextSelectionDemo