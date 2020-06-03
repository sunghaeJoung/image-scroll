import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { addLike } from "Redux/Actions";
import styled from "styled-components";
import { Heart } from "@styled-icons/boxicons-solid/Heart";

const Images = (props) => {
  const { addLike } = props;
  const image = props.card;
  const [load, setLoad] = useState(false);

  const handleLike = (like) => {
    addLike(like);
  };

  const [height, setHeight] = useState(0);
  const ref = useRef();

  // useEffect(() => {
  //   console.log("ref", ref);
  //   // console.log("ref.current", ref.current);
  // }, []);

  useEffect(() => {
    if (load) {
      setHeight(ref.current.clientHeight);
    }
  }, [load]);

  // const getImageHeight = () => {
  //   console.log(image);
  //   let ele = document.getElementById("card");
  //   let height = ele.clientHeight;
  //   console.log(height);
  // };

  // const getImageHeight = () => {
  //   console.log("heyhey");
  //   let img = document.getElementById("card");
  //   console.log(img);
  //   img.onload = function () {
  //     console.log(img.height);
  //   };
  // };

  return (
    <Image height={height !== 0 && height}>
      <img
        onLoad={() => setLoad(true)}
        ref={ref}
        src={image.urls.small}
        alt=""
      />
      <HeartIcon onClick={() => handleLike(image)} />
    </Image>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { addLike })(Images);

const Image = styled.div`
  display: inline-block;
  height: ${(props) => props.height};
  margin-bottom: 0.5rem;
  border-radius: 20px;
  overflow: hidden;
  opacity: 0.9;
  position: relative;

  &:hover {
    opacity: 1;

    svg {
      opacity: 1;
    }
  }
`;

const HeartIcon = styled(Heart)`
  width: 35px;
  height: auto;
  color: red;
  position: absolute;
  top: 5px;
  right: 10px;
  opacity: 0;

  path {
    cursor: pointer;
  }
`;
