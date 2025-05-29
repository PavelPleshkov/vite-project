import Button from "../Button/Button";

import { styled } from "styled-components";
// import s from "./Footer.module.css";

const FooterContainer = styled.footer`
  min-height: 100px;
  background-color: #1a1a1a;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const DivContainer = styled.div`
  margin-right: 2rem;
`;

function Footer({ page, setPage }) {
  function handleGoStartBtnClick() {
    setPage("home");
  }

  return (
    <FooterContainer>
      {page !== "home" && (
        <>
          <DivContainer>Press</DivContainer>
          <Button onClick={handleGoStartBtnClick}>Go to start</Button>
        </>
      )}
    </FooterContainer>
  );
}

export default Footer;
