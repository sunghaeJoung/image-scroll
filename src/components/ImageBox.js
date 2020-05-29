import React from "react";
import styled from "styled-components";
import Image from "./Image";

const ImageBox = (data) => {
  return (
    <ImageBoxWrapper>
      {data.images.map((item, i) => {
        return <Image image={item} key={i} />;
      })}
    </ImageBoxWrapper>
  );
};

export default ImageBox;

const ImageBoxWrapper = styled.div`
  margin: 20px 50px 0;
  line-height: 0;
  column-width: 400px;
  column-gap: 0px;
`;
