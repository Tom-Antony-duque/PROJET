import {css} from "styled-components";

export const mobile = (props) =>{
    return css`
    @media only and (max-width:768px){
      ${props};
    }
    `;
};
