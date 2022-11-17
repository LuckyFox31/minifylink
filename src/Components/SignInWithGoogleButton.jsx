import styled from "styled-components";
import { IoLogoGoogle } from "react-icons/io";
import {BORDER} from "../Constants/Border.js";
import {COLORS} from "../Constants/Colors.js";
import {FONT_SIZES, FONT_WEIGHT} from "../Constants/Typography.js";
import {BREAKPOINTS} from "../Constants/Breakpoints.js";

export default function SignInWithGoogleButton(){
	return (
		<Button><IoLogoGoogle color="white" size={24} /><ButtonTitle>Continuer avec Google</ButtonTitle></Button>
	)
}

const Button = styled.button`
  	display: flex;
  	align-items: center;
  	justify-content: center;
  	height: 2.5rem;
  	border: none;
  	border-radius: ${BORDER.radius};
  	background-color: ${COLORS.blue};
  	width: 100%;
  	cursor: pointer;
  	opacity: 1;
  	transition: opacity 0.3s ease;

  	&:hover{
    	opacity: 0.8;
  	}

  	@media screen and (min-width: ${BREAKPOINTS.tablet}){
    	width: 49%;
  	}
`;

const ButtonTitle = styled.span`
	margin-left: 1rem;
  	color: ${COLORS.white};
  	font-size: ${FONT_SIZES.small};
  	font-weight: ${FONT_WEIGHT.semibold};
`;