import React from "react";
import { connect } from "react-redux";
import { openFilter, closeFilter, openLikeBox } from "Redux/Actions";
import styled, { css } from "styled-components";
import { Heart } from "@styled-icons/boxicons-solid/Heart";
import { Filter } from "@styled-icons/foundation/Filter";
import { Close } from "@styled-icons/evaicons-solid/Close";

const Header = (props) => {
  const { filter, openFilter, closeFilter, openLikeBox, like } = props;

  return (
    <HeaderWrapper>
      <IconWrapper mode={filter}>
        <HeartIcon
          className={like.length !== 0 && "fill-heart"}
          onClick={() => {
            openLikeBox();
          }}
        />
        <FilterIcon
          onClick={() => {
            openFilter();
          }}
        />
        <CloseIcon
          onClick={() => {
            closeFilter();
          }}
        />
      </IconWrapper>
    </HeaderWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.controlFilter.filter,
    likeBox: state.controlLikeBox.likeBox,
    like: state.addLike,
  };
};

export default connect(mapStateToProps, {
  openFilter,
  closeFilter,
  openLikeBox,
})(Header);

const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  background-color: black;
  position: fixed;
  z-index: 1;
`;

const IconWrapper = styled.div`
  width: 250px;
  position: absolute;
  top: 10px;
  right: -160px;
  ${(props) => {
    if (props.mode) {
      return css`
        transform: translateX(-150px);
        transition: transform 0.3s ease-in-out;
      `;
    } else {
      return css`
        transform: translateX(0px);
        transition: transform 0.3s ease-in-out;
      `;
    }
  }}
`;

const Icon = css`
  width: 30px;
  height: auto;
  color: #efefef;
  margin-right: 10px;

  path {
    cursor: pointer;
  }
`;

const HeartIcon = styled(Heart)`
  ${Icon}

  &.fill-heart {
    color: red;
  }
`;

const FilterIcon = styled(Filter)`
  ${Icon}
`;

const CloseIcon = styled(Close)`
  ${Icon}
  width: 38px;
  position: absolute;
  top: -5px;
  right: 5px;
`;
