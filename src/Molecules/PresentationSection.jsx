import styled from "styled-components";
import {COLORS} from "../Constants/Colors.js";
import {FONT_SIZES, FONT_WEIGHT} from "../Constants/Typography.js";
import {BREAKPOINTS} from "../Constants/Breakpoints.js";

export default function PresentationSection(){
	return(
		<>
			<PresentationTitle>Qu’est-ce que MinifyLink ?</PresentationTitle>
			<PresentationParagraph>
				<strong>MinifyLink</strong> permet de transformer des URL longs et laids en URL courtes, agréables et mémorisables. Utilisez-le pour raccourcir des liens pour toutes les plateformes de médias sociaux, les blogs, les SMS, les e-mails, les publicités, ou à peu près partout où vous voulez les partager. <strong>Twitter</strong>, <strong>Facebook</strong>, <strong>YouTube</strong>, <strong>Instagram</strong>, <strong>WhatsApp</strong>, <strong>e-mails</strong>, <strong>SMS</strong>, <strong>vidéos</strong>...
			</PresentationParagraph>
		</>
	)
}

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