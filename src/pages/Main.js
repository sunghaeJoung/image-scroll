import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ImageBox from "../components/ImageBox";

const Main = () => {
  const [images, setImages] = useState([]);

  // 이미지 api 가져오는 함수
  const getImages = async () => {
    try {
      const res = await axios.get("https://api.unsplash.com/photos/random", {
        params: {
          client_id: "awB5iym0OQVCR3nZDmiOIVuksZvEC_HcEpuuon76VoU",
          count: 27,
        },
      });
      const data = await res.data.map((card) => card.urls.small);
      console.log(data);
      setImages(data);
      window.scrollTo(0, 0);
    } catch (err) {
      alert("이미지를 불러오는데 실패하였습니다.");
    }
  };

  //   훅스에서 컴디마
  useEffect(() => {
    getImages();
  }, []);

  return (
    <MainWrapper>
      <ImageBox images={images} />
      <Button onClick={() => getImages()}>📬 OTHERS </Button>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
