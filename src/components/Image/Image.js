import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { addLike } from "Redux/Actions";
import styled from "styled-components";
import { Heart } from "@styled-icons/boxicons-solid/Heart";

const Images = (props) => {
  const image = props.card;
  const [load, setLoad] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef();
  const { addLike } = props;

  const handleLike = (like) => {
    addLike(like);
  };

  // 이미지가 로딩된 후 높이를 가져와야 하기 때문에 onLoad를 사용해서 이미지가 화면에 뿌려지기 전에 높이를 가져오는 코드 작성
  // 스켈레톤 스크린을 구현하려고 높이를 구한 것이기 때문에 지금은 높이값 auto로 해줘도 됨
  useEffect(() => {
    if (load) {
      setHeight(ref.current.clientHeight);
    }
  }, [load]);

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
