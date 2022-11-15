// Librairies
import styled from "styled-components";
// Components
import { HiPlay } from "react-icons/hi";
// Styles
import {COLORS} from "../Constants/Colors.js";
import {FONT_SIZES, FONT_WEIGHT} from "../Constants/Typography.js";
import {BREAKPOINTS} from "../Constants/Breakpoints.js";
import {BORDER} from "../Constants/Border.js";
import {SHADOW} from "../Constants/Shadow.js";

export default function Homepage(){
	return (
		<>
			<TopPageWrapper>
				<FirstTitle>Minifiez vos liens gratuitement</FirstTitle>
				<SubTitle>Transformez une longue URL en un lien minifié plus simple et élégant à partager</SubTitle>
				<MinifyForm>
					<MinifyUrlInput type="url" placeholder="https://www.mon-url-tres-longue-a-partager.com" required/>
					<MinifyUrlSubmitButton type="submit">
						<MinifyUrlSubmitTextButton>
							Minifier l'URL
						</MinifyUrlSubmitTextButton>
						<MinifyUrlSubmitIconContainer>
							<HiPlay style={Icon} />
						</MinifyUrlSubmitIconContainer>
					</MinifyUrlSubmitButton>
				</MinifyForm>
			</TopPageWrapper>
		</>
	)
}

// Style
const TopPageWrapper = styled.section`
  	position: relative;
	background-color: ${COLORS.dark_blue};
  	min-height: calc(40vh - 7rem);
  	padding: 0 2rem 4rem 2rem;
  	display: flex;
  	flex-direction: column;
  	justify-content: end;
  	align-items: center;
  
  	@media screen and (min-width: ${BREAKPOINTS.tablet}){
      	height: calc(50vh - 7rem);
      	padding: 0 2rem 6rem 2rem;
	}
`;

const FirstTitle = styled.h1`
	font-size: ${FONT_SIZES.big};
  	font-weight: ${FONT_WEIGHT.bold};
  	color: ${COLORS.white};
  	text-align: center;

  	@media screen and (min-width: ${BREAKPOINTS.tablet}){
      	font-size: ${FONT_SIZES.giant};
  	}
`;

const SubTitle = styled.h2`
  	margin-top: 1.5rem;
	font-size: ${FONT_SIZES.small};
  	font-weight: ${FONT_WEIGHT.semibold};
  	color: ${COLORS.white};
  	text-align: center;

  	@media screen and (min-width: ${BREAKPOINTS.tablet}){
    	font-size: ${FONT_SIZES.regular};
  	}
`;

const MinifyForm = styled.form`
  	display: flex;
  	align-items: center;
  	justify-content: space-between;
	width: 100%;
  	position: absolute;
  	bottom: 0;
  	transform: translateY(50%);
  	padding: 0 2rem;

  	@media screen and (min-width: ${BREAKPOINTS.desktops}){
      padding: 0 7rem;
  	}

  	@media screen and (min-width: ${BREAKPOINTS.large}){
    	padding: 0 14rem;
  	}
`;

const MinifyUrlInput = styled.input`
	height: 3rem;
  	background-color: ${COLORS.white};
  	border: none;
  	border-radius: ${BORDER.radius};
  	box-shadow: ${SHADOW.small};
  	width: 70%;
  	padding: 0.2rem 1rem;
  	color: ${COLORS.black};
  
  	&::placeholder{
	  	color: ${COLORS.gray};
	}
`;

const MinifyUrlSubmitButton = styled.button`
  	height: 3rem;
  	background-color: ${COLORS.blue};
  	border: none;
  	border-radius: ${BORDER.radius};
  	box-shadow: ${SHADOW.small};
  	width: 25%;
  	color: ${COLORS.white};
  	cursor: pointer;
`;

const MinifyUrlSubmitTextButton = styled.span`
	display: none;
  	font-weight: ${FONT_WEIGHT.semibold};
  	font-size: ${FONT_SIZES.standard};
  	
  	@media screen and (min-width: ${BREAKPOINTS.phone}){
	  display: block;
	}
`;

const MinifyUrlSubmitIconContainer = styled.div`
  display: grid;
  place-items: center;

  @media screen and (min-width: ${BREAKPOINTS.phone}) {
    display: none;
  }
`;

const Icon = {
	fontSize: 35,
	color: `${COLORS.white}`,
	cursor: 'pointer',
}