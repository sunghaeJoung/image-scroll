// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { getResult } from "Redux/Actions";
// import styled from "styled-components";
// import { DateAdd } from "styled-icons/zondicons";

// const Grid = (props) => {
//   const { data } = props;
//   const [load, setLoad] = useState(false);

//   const resizeGridItem = () => {
//     let grid = document.getElementsByClassName("grid")[0];
//     let rowHeight = parseInt(
//       window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
//     );
//     console.log("height", rowHeight);
//     let rowGap = parseInt(
//       window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
//     );
//     console.log("gap", rowGap);
//     let rowSpan =
//       Math.ceil(
//         data.querySelector(".content").getBoundingClientRect().height + rowGap
//       ) /
//       (rowHeight + rowGap);
//     data.style.gridRowEnd = "span" + rowSpan;
//   };

//   useEffect(() => {
//     if (load) {
//       resizeGridItem(data);
//     }
//   }, [load]);

//   return (
//     <GridWrapper className="grid">
//       {data.map((item, i) => {
//         return (
//           <Item className="item" key={i}>
//             <Content className="content">
//               <img onLoad={() => setLoad(true)} src={item.urls.small} alt="" />
//             </Content>
//           </Item>
//         );
//       })}
//     </GridWrapper>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     data: state.getResult,
//   };
// };

// export default connect(mapStateToProps, { getResult })(Grid);

// const GridWrapper = styled.section`
//   margin-top: 70px;

//   .grid {
//     display: grid;
//     grid-gap: 10px;
//     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     grid-auto-rows: 20px;
//   }
// `;

// const Item = styled.div``;

// const Content = styled.div``;
