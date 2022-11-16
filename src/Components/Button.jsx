import styled from "styled-components";
import {COLORS} from "../Constants/Colors.js";
import {BORDER} from "../Constants/Border.js";
import {SHADOW} from "../Constants/Shadow.js";

export const Button = styled.button`
  	height: 3rem;
  	border: none;
  	border-radius: ${BORDER.radius};
  	box-shadow: ${SHADOW.small};
  	width: 25%;
  	cursor: pointer;
  	transition: background-color 0.3s ease;
  
  	&.blue{
      color: ${COLORS.white};
      background-color: ${COLORS.blue};

      &:hover{
        background-color: ${COLORS.light_blue};
      }
	}
`;