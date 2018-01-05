import React from 'react';

let Image = function statelessFunctionComponentClass(props) {
  let source = './images/' + props.source;

  let style = {
    width: '90px',
    margin: '10px 5px 0px 5px'
  };
  return (
    <img src={source} style={style} alt="" />
  );
};

export default Image;
