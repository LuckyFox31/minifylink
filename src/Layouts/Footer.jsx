import styled from "styled-components";
import {FONT_SIZES} from "../Constants/Typography.js";
import {COLORS} from "../Constants/Colors.js";

export default function Footer(){
	return (
		<FooterSection>
			<Copyrights>&copy; Copyrights 2022 minlk.me - All rights reserved</Copyrights>
		</FooterSection>
	)
}

const FooterSection = styled.footer`
	display: flex;
  	justify-content: center;
`;

const Copyrights = styled.small`
	font-size: ${FONT_SIZES.tiny};
  	color: ${COLORS.gray};
`;