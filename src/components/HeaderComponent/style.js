import styled from "styled-components";

// Container chính của Header
export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #f0f8ff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

// Logo trong Header
export const Logo = styled.div`
 font-size: 36px; /* Tăng kích thước chữ */
  font-weight: bold;
  color: #800000;
  letter-spacing: 2px; /* Giãn cách chữ */
  text-transform: uppercase; /* Chuyển thành chữ in hoa */
  font-family: "Georgia", serif; /* Font chữ sang trọng */
  cursor: pointer;

  &:hover {
    color: #daa520; /* Thay đổi màu khi hover */
  }
`;

// Navigation bar
export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
  color: #555;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: #007bff;
  }
`;

// Dropdown container
export const Dropdown = styled.div`
  position: relative;
`;

// Menu hiển thị khi dropdown mở
export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1000;
  padding: 10px 0;
`;

// Các liên kết trong Dropdown
export const DropdownLink = styled.a`
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #555;

  &:hover {
    background-color: #f0f8ff;
  }
`;

// Button đăng nhập
export const LoginButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #001F3F;
  color: white;
  border: none;
  border-radius: 50%; /* Làm nút hình tròn */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  svg {
    font-size: 24px; /* Kích thước biểu tượng */
  }
`;

export const CartButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #001F3F;
  color: white;
  border: none;
  border-radius: 50%; /* Nút hình tròn */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  svg {
    font-size: 24px; /* Kích thước biểu tượng */
  }
`;

export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: rgb(26, 148, 255);
    }
`
