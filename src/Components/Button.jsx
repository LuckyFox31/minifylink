import styled from "styled-components";
import {COLORS} from "../Constants/Colors.js";
import {BORDER} from "../Constants/Border.js";
import {SHADOW} from "../Constants/Shadow.js";
import {FONT_SIZES, FONT_WEIGHT} from "../Constants/Typography.js";

export const Button = styled.button`
  	height: 3rem;
  	border: none;
  	border-radius: ${BORDER.radius};
  	padding: 0.5rem 2rem;
  	font-weight: ${FONT_WEIGHT.semibold};
  	font-size: ${FONT_SIZES.standard};
  	cursor: pointer;
  	transition: background-color 0.3s ease;
  
  	&.blue{
      color: ${COLORS.white};
      background-color: ${COLORS.blue};

      &:hover{
        background-color: ${COLORS.light_blue};
      }
	}
  
  	&.minify{
      	width: 25%;
	  	padding: 0;
	}
  
  	&.shadow{
      	box-shadow: ${SHADOW.small};
	}
`;