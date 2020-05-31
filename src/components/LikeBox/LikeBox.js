import React from "react";
import { connect } from "react-redux";
import { closeLikeBox } from "Redux/Actions";
import styled from "styled-components";
import { Close } from "@styled-icons/evaicons-solid/Close";

const LikeBox = (props) => {
  const { likeBox, closeLikeBox, like } = props;

  return (
    <LikeBoxWrapper mode={likeBox}>
      <CloseIcon
        onClick={() => {
          closeLikeBox();
        }}
      />
      <LikeWrapper>
        {like.length == 0 ? (
          <div>좋아요 목록이 없습니다.</div>
        ) : (
          <LikeList>
            {like.map((card) => {
              return (
                <Like>
                  <img src={card.urls.small} />
                  <div>{card.description}</div>
                </Like>
              );
            })}
          </LikeList>
        )}
      </LikeWrapper>
    </LikeBoxWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    likeBox: state.controlLikeBox.likeBox,
    like: state.addLike,
  };
};

export default connect(mapStateToProps, {
  closeLikeBox,
})(LikeBox);

const LikeBoxWrapper = styled.div`
  width: 350px;
  min-height: 200px;
  background: black;
  border-top: 1px solid white;
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 1;
  display: ${(props) => (props.mode ? "block" : "none")};
`;

const CloseIcon = styled(Close)`
  width: 25px;
  color: white;
  position: absolute;
  top: 5px;
  right: 5px;

  path {
    cursor: pointer;
  }
`;

const LikeWrapper = styled.section`
  width: 100%;
  min-height: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LikeList = styled.ul`
  margin: 20px 0;
`;
const Like = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
  padding: 10px;

  img {
    width: 100px;
    height: auto;
  }

  div {
    width: 150px;
    height: auto;
    margin-left: 10px;
  }
`;
