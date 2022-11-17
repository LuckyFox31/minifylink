// Hooks
import styled from "styled-components";
// Components
import { HiPlay } from "react-icons/hi";
import RegisterModal from "../Molecules/RegisterModal";
// Styles
import {COLORS} from "../Constants/Colors.js";
import {FONT_SIZES, FONT_WEIGHT} from "../Constants/Typography.js";
import {BREAKPOINTS} from "../Constants/Breakpoints.js";
import {BORDER} from "../Constants/Border.js";
import {SHADOW} from "../Constants/Shadow.js";
import {Button} from "../Components/Button";

export default function Homepage(){

	return (
		<>
			<TopPageWrapper>
				<FirstTitle>Minifiez vos liens gratuitement</FirstTitle>
				<SubTitle>Transformez une longue URL en un lien minifié plus simple et élégant à partager</SubTitle>
				<MinifyForm>
					<MinifyUrlInput type="url" placeholder="https://www.mon-url-tres-longue-a-partager.com" required/>
					<Button type="submit" className="blue minify shadow">
						<MinifyUrlSubmitTextButton>
							Minifier l'URL
						</MinifyUrlSubmitTextButton>
						<MinifyUrlSubmitIconContainer>
							<HiPlay style={Icon} />
						</MinifyUrlSubmitIconContainer>
					</Button>
				</MinifyForm>
			</TopPageWrapper>
			<Wrapper>
				<CguInfo>En cliquant sur Minifier l’URL, vous acceptez notre <a href="#">politique de confidentialité</a> et nos <a href="#">conditions générales d’utilisation</a></CguInfo>
				<PresentationTitle>Qu’est-ce que MinifyLink ?</PresentationTitle>
				<PresentationParagraph>
					<strong>MinifyLink</strong> permet de transformer des URL longs et laids en URL courtes, agréables et mémorisables. Utilisez-le pour raccourcir des liens pour toutes les plateformes de médias sociaux, les blogs, les SMS, les e-mails, les publicités, ou à peu près partout où vous voulez les partager. <strong>Twitter</strong>, <strong>Facebook</strong>, <strong>YouTube</strong>, <strong>Instagram</strong>, <strong>WhatsApp</strong>, <strong>e-mails</strong>, <strong>SMS</strong>, <strong>vidéos</strong>...
				</PresentationParagraph>
			</Wrapper>
		</>
	)
}

// Style
const TopPageWrapper = styled.section`
  	position: relative;
	background-color: ${COLORS.dark_blue};
  	min-height: 40vh;
  	padding: 0 2rem 4rem 2rem;
  	display: flex;
  	flex-direction: column;
  	justify-content: end;
  	align-items: center;
  
  	@media screen and (min-width: ${BREAKPOINTS.tablet}){
      	height: 50vh;
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

const MinifyUrlSubmitTextButton = styled.span`
	display: none;
  	
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

const Wrapper = styled.section`
	padding: 3rem 2rem 0 2rem;
  	min-height: 42vh;
`;

const CguInfo = styled.small`
	display: block;
  	text-align: center;
  	color: ${COLORS.gray};
  	font-size: ${FONT_SIZES.tiny};
  
  	a{
		color: ${COLORS.gray};
	}
`;

const PresentationTitle = styled.h3`
	font-size: ${FONT_SIZES.regular};
  	text-align: center;
  	margin-top: 3rem;

  	@media screen and (min-width: ${BREAKPOINTS.phone}) {
      	font-size: ${FONT_SIZES.medium};
  	}
`;

const PresentationParagraph = styled.p`
  	margin-top: 1rem;
	text-align: center;
  	color: ${COLORS.black};
  	font-size: ${FONT_SIZES.small};
  	font-weight: ${FONT_WEIGHT.regular};
  	line-height: 1.5rem;
  
  	strong{
	  font-weight: ${FONT_WEIGHT.medium};
	}
  
  	@media screen and (min-width: ${BREAKPOINTS.desktops}){
      	font-size: ${FONT_SIZES.standard};
	  	padding: 0 10rem;
	}
`;

const Icon = {
	fontSize: 35,
	color: `${COLORS.white}`,
	cursor: 'pointer',
}