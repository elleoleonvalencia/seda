

import styled from 'styled-components'

const GlobalStyleL = styled.div`
&#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  float: left;
  margin-right: 50px;
}
&#components-layout-demo-top .menu-inicio {
  float: right;
}
&#components-layout-demo-top .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background-color: #20a0f7;
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
`
const Imagen = styled.img`
  width: 55px;
  height: 55px;
  margin-top: 5px;
  margin-right: 10px;
  float: left;
`;

export { GlobalStyleL, Imagen }