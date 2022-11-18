import styled from "styled-components";
import {COLORS} from "../Constants/Colors.js";
import {FONT_SIZES, FONT_WEIGHT} from "../Constants/Typography.js";

export const FormErrorMessage = styled.small`
	color: ${COLORS.red};
  	font-size: ${FONT_SIZES.tiny};
  	font-weight: ${FONT_WEIGHT.regular};
  	margin-top: 0.5rem;
  
  	&.center{
	  display: block;
	  text-align: center;
	}
`;