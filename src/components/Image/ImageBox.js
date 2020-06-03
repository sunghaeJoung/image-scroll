import React from "react";
import { connect } from "react-redux";
import { getResult } from "Redux/Actions";
import styled from "styled-components";
import Image from "components/Image/Image";

const ImageBox = (props) => {
  const { data } = props;

  return (
    <ImageBoxWrapper className="grid">
      {data.length > 0 &&
        data.map((card, i) => {
          return <Image card={card} key={i} />;
        })}
    </ImageBoxWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.getResult,
  };
};

export default connect(mapStateToProps, { getResult })(ImageBox);

const ImageBoxWrapper = styled.section`
  margin: 70px 50px 0;
  column-width: 350px;
`;
