import React from 'react';

const labelStyle = {
  color: '#fff', // TODO #fff should be on a theme object as textColor or textColorSecondary
  fontSize: 18
};

export const Label = ({ children }) => <label style={labelStyle}>{children}</label>;
