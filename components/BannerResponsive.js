import styled from "styled-components";
import { Banner, Button } from "rebass";

const BannerResponsive = styled(Banner)`
  background-position: 50% 50%;
  width: 100%;
  min-height: 90vh;
  @media (max-width: 600px) {
    background-repeat: no-repeat;
    min-height: 400px;
  }
`;

export default BannerResponsive;
