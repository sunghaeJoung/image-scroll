import React from "react";
import { connect } from "react-redux";
import { addLike } from "Redux/Actions";
import styled from "styled-components";
import { Heart } from "@styled-icons/boxicons-solid/Heart";

const Images = (props) => {
  const { addLike } = props;
  const image = props.card;

  const handleLike = (like) => {
    addLike(like);
  };
  return (
    <Image>
      <img src={image.urls.small} alt="" />
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
  height: auto;
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
