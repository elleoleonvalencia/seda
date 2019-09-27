

import styled from 'styled-components'

const GlobalStyleL = styled.div`
&#components-layout-demo-top .logo {
  width: 150px;
  height: 31px;
  float: left;
  margin-right: 50px;
  font-family: Times New Roman, serif;
  font-weight: 900;
  font-size: 20px;
}
&#components-layout-demo-top .card_graf:hover {
    transform: scale(1.010);
    box-shadow: 0 0 10px 0 #3aa1ff;
}
.card_graf {
  transition: all 0.7s;
}

&#components-layout-demo-top .card_graf1:hover {
  transform: scale(1.3);
  box-shadow: 0 0 5px 0 #3aa1ff;
  cursor: pointer;
}
.card_graf1 {
transition: all 1s;
}
&#components-layout-demo-top .resumen {
  background-color: #ffffff;
  font-family: Times New Roman, serif;
  font-weight: 900;
  font-size: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 #b8bfc6;
}
&#components-layout-demo-top .menu-inicio {
  float: right;
}
&#components-layout-demo-top .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background-color: transparent;
  color: rgba(255, 255, 255, 0.65);
}
&#components-layout-demo-top .ant-menu.ant-menu-dark .ant-menu-item-active , .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-active {
  background-color: transparent;
  color: #ffffff;
}
&#components-layout-demo-top .ant-menu-dark .ant-menu-item-selected .anticon {
  color: inherit;
}
&#components-layout-demo-top .ant-menu-item {
  margin-left: 10px;  
  text-align: center;
}
&#components-layout-demo-top h1.Iniciolink {
  color: rgba(255, 255, 255, 0.65);
}
&#components-layout-demo-top .ant-layout {
  display: -ms-flexbox;
  display: flex;
  -ms-flex: auto;
  flex: auto;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 0;
  background: #fff;
}
`;
const Imagen = styled.img`
  width: 55px;
  height: 55px;
  margin-top: 5px;
  margin-right: 10px;
  float: left;
`;
const Imagen1 = styled.img`
  width: 300px;
  height: 100px;
`;
export { GlobalStyleL, Imagen, Imagen1 }