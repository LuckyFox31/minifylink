import styled from "styled-components";
import {COLORS} from "../Constants/Colors.js";
import {BORDER} from "../Constants/Border.js";
import {BREAKPOINTS} from "../Constants/Breakpoints.js";
import {FONT_SIZES, FONT_WEIGHT} from "../Constants/Typography.js";
import {IoMdCloseCircle} from "react-icons/io"

export function Modal({onClose, children}){
	return (
		<>
			<ModalBackground onClick={onClose} />
			<ModalContainer>
				<CloseButtonContainer>
					<IoMdCloseCircle size={28} color={COLORS.gray} onClick={onClose} />
				</CloseButtonContainer>
				{children}
			</ModalContainer>
		</>
	)
}

export function ModalTitle({children}){
	return (
		<>
			<ModalHeader>
				<ModalHeaderTitle>{children}</ModalHeaderTitle>
			</ModalHeader>
		</>
	)
}

const ModalContainer = styled.article`
  	z-index: 10000000;
  	position: fixed;
  	top: 50%;
  	left: 50%;
  	transform: translate(-50%, -50%);
	width: 90vw;
  	min-height: 40vh;
  	background-color: ${COLORS.white};
  	border-radius: ${BORDER.radius};
  	padding: 0 1rem;

  	@media screen and (min-width: ${BREAKPOINTS.tablet}){
    	width: 60vw;
  	}

  	@media screen and (min-width: ${BREAKPOINTS.desktops}){
    	width: 45vw;
  	}
`;

const CloseButtonContainer = styled.div`
	position: absolute;
  	right: 1rem;
  	top: 1rem;
  	cursor: pointer;
  	transition: filter 0.3s ease;
  
  	&:hover{
	  filter: brightness(0%);
	}
`;

const ModalHeader = styled.header`
	width: 100%;
  	padding: 2rem 0;

  	@media screen and (min-width: ${BREAKPOINTS.desktops}){
    	padding: 3rem 0 2rem 0;
  	}
`;

const ModalHeaderTitle = styled.h3`
	color: ${COLORS.black};
  	font-size: ${FONT_SIZES.medium};
  	font-weight: ${FONT_WEIGHT.bold};
  	text-align: center;
  
  	@media screen and (min-width: ${BREAKPOINTS.desktops}){
	  	font-size: ${FONT_SIZES.big};
	}
`;

const ModalBackground = styled.div`
  	z-index: 1000000;
	position: fixed;
  	top: 0;
  	width: 100vw;
  	height: 100vh;
  	background-color: ${COLORS.modal_background};
`;