import React from 'react';

const Wrapper = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
