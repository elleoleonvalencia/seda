

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
  background-color: transparent;
  border-bottom: 3px solid #ffffff;
}
&#components-layout-demo-top .ant-menu-item {
  border-bottom: 3px solid transparent;
}
&#components-layout-demo-top .menu-inicio li:hover {
  border-bottom: 3px solid #ffffff;
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
&#components-layout-demo-top .card__three {
  &::before,
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scale3d(0, 0, 1);
    transition: transform .3s ease-out 0s;
    background: rgba(255, 255, 255, .1);
    content: '';
    pointer-events: none;
  }

  &::before {
    transform-origin: left top;
  }

  &::after {
    transform-origin: right bottom;
  }

  &:hover,
  &:focus {
    &::before,
    &::after {
      transform: scale3d(1, 1, 1);
    }
  }
}
`
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
export { GlobalStyleL, Imagen,Imagen1 }