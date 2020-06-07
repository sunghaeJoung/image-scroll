import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { openFilter, closeFilter, getResult } from "Redux/Actions";
import styled, { css } from "styled-components";
import FilterData from "./Filter-data";
import { URL } from "config";

const Filter = (props) => {
  const { filter, getResult } = props;
  const [click, setClick] = useState(0);

  const handleFilter = (card) => {
    setClick(card.id);
    sortingImages(card.title);
  };

  const sortingImages = async (val) => {
    try {
      const res = await axios.get(`${URL}/search/photos`, {
        params: {
          client_id: "vJLALMy4yRn8RJ1-Suj2Bktb-nxJLaG0DzmlDMsrB54",
          query: "office",
          color: val,
        },
      });
      getResult(res.data.results);
      window.scrollTo(0, 0);
    } catch (err) {
      alert("필터 적용에 실패하였습니다.");
    }
  };

  return (
    <FilterWrapper mode={filter}>
      <ListWrapper>
        {FilterData.map((card, id) => {
          return (
            <ListTitle key={id}>
              {card.param}
              {card.list.map((card, id) => {
                return (
                  <CardWrapper
                    className={click === card.id && "clicked"}
                    key={id}
                  >
                    <Card onClick={() => handleFilter(card)}>{card.title}</Card>
                    <Check>✔︎</Check>
                  </CardWrapper>
                );
              })}
            </ListTitle>
          );
        })}
      </ListWrapper>
    </FilterWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.controlFilter.filter,
  };
};

export default connect(mapStateToProps, { openFilter, closeFilter, getResult })(
  Filter
);

const FilterWrapper = styled.div`
  width: 250px;
  height: 100vh;
  background: black;
  position: fixed;
  top: 50px;
  right: -250px;
  z-index: 1;
  ${(props) => {
    if (props.mode) {
      return css`
        transform: translateX(-250px);
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

const ListWrapper = styled.div`
  margin: 30px;
`;

const ListTitle = styled.ul`
  font-size: 25px;
  font-weight: bold;
  color: white;
  margin-top: 30px;
`;

const CardWrapper = styled.li`
  margin: 10px 0 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;

  &.clicked {
    div {
      font-weight: bold;
      opacity: 1;
    }
  }
`;

const Card = styled.div`
  font-weight: normal;
  cursor: pointer;
`;

const Check = styled.div`
  font-size: 16px;
  opacity: 0;
`;
