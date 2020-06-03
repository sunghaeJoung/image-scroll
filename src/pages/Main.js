import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getResult, closeFilter } from "Redux/Actions";
import styled from "styled-components";
import { URL } from "config";
import Header from "components/Header/Header";
import LikeBox from "components/LikeBox/LikeBox";
import Filter from "components/Filter/Filter";
import ImageBox from "components/Image/ImageBox";
// import Grid from "components/Grid";

const Main = (props) => {
  const { getResult, data, closeFilter } = props;

  // 이미지 api 가져오는 함수
  const getImages = async () => {
    try {
      const res = await axios.get(`${URL}/photos/random`, {
        params: {
          client_id: "eQbS2u9pVWUs2m5CzR0NI6iBcEAwyDBDRE1R-3bKY_M",
          count: 30,
        },
      });
      getResult(res.data);
      window.scrollTo(0, 0);
    } catch (err) {
      alert("이미지를 불러오는데 실패하였습니다.");
    }
  };
  const controlFilter = () => {
    closeFilter();
  };

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    controlFilter();
  }, [data]);

  return (
    <MainWrapper>
      <Header />
      <LikeBox />
      <Filter />
      {/* <Grid /> */}
      <ImageBox />
      <Button onClick={() => getImages()}>MORE IMAGES 🌉 </Button>
    </MainWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.getResult,
    filter: state.controlFilter.filter,
  };
};

export default connect(mapStateToProps, { getResult, closeFilter })(Main);

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  position: relative;
  overflow-x: hidden;
`;

const Button = styled.button`
  font-size: 18px;
  margin: 40px auto;
  border: none;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
`;
