import React from "react";
import styled from "styled-components";

const Images = (data) => {
  return (
    <Image>
      <img src={data.image} alt="" />
    </Image>
  );
};

export default Images;

const Image = styled.div`
  display: inline-block;
  height: auto;
  margin-bottom: 0.5rem;
`;
