// import Button from "../Button/Button";
import { NavLink } from "react-router";

import { styled } from "styled-components";
import sBtn from "../Button/Button.module.css";

const FooterContainer = styled.footer`
  min-height: 100px;
  background-color: #1a1a1a;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const DescriptionContainer = styled.div`
  margin-right: 2rem;
`;

// function Footer({ page }) {
function Footer({ page, setPage }) {
  function handleGoStartBtnClick() {
    setPage("home");
  }

  return (
    <FooterContainer>
      {page !== "home" && (
        <>
          <DescriptionContainer>Press</DescriptionContainer>
          <NavLink
            to="/vite-project"
            className={sBtn.btn}
            onClick={handleGoStartBtnClick}
          >
            {/* <Button onClick={handleGoStartBtnClick}>Go to start</Button> */}
            Go to start
          </NavLink>
          {/* <Button onClick={handleGoStartBtnClick}>Go to start</Button> */}
        </>
      )}
    </FooterContainer>
  );
}

export default Footer;
