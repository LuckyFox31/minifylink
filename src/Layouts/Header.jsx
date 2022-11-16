// Librairies
import styled from "styled-components";
// Components
import {Link} from "react-router-dom";
import { HiMenu, HiOutlineX } from "react-icons/hi"
// Hooks
import {useEffect, useState} from "react";
// Constants
import {COLORS} from "../Constants/Colors.js";
import {FONT_SIZES, FONT_WEIGHT} from "../Constants/Typography.js";
import {BORDER} from "../Constants/Border.js";
import {BREAKPOINTS} from "../Constants/Breakpoints.js";

export default function Header(){
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	function toggleMenu(){
		setMenuIsOpen(!menuIsOpen);
	}

	return (
		<HeaderSection>
			<Wrapper>
				<Title>MinifyLink</Title>
				<IconContainer>
					{
						menuIsOpen ?
							<HiOutlineX onClick={toggleMenu} style={MenuIcon} /> :
							<HiMenu onClick={toggleMenu} style={MenuIcon} />
					}
				</IconContainer>
			</Wrapper>
			<LinksWrapper display={menuIsOpen ? 'block' : 'none'}>
				<LinkContainer>
					<Link>Connexion</Link>
				</LinkContainer>
				<LinkContainer>
					<Link className="cta">Inscription</Link>
				</LinkContainer>
			</LinksWrapper>
		</HeaderSection>
	)
}

// Style
const HeaderSection = styled.header`
  	z-index: 100000;
  	width: 100%;
	min-height: 7rem;
	padding: 2em;
	background-color: ${COLORS.dark_blue};
	display: flex;
  	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	position: fixed;
	top: 0;

  	@media screen and (min-width: ${BREAKPOINTS.desktops}) {
      	flex-direction: row;
      	justify-content: space-between;
  	}
`;

const Wrapper = styled.div`
  	height: calc(7rem - (2 * 2rem));
  	width: 100%;
	display: flex;
  	align-items: center;
  	justify-content: space-between;

  	@media screen and (min-width: 992px) {
		width: auto;
	}
`;

const Title = styled.p`
	font-size: ${FONT_SIZES.medium};
	font-weight: ${FONT_WEIGHT.bold};
	color: ${COLORS.white};

  	@media screen and (min-width: ${BREAKPOINTS.desktops}) {
      	font-size: ${FONT_SIZES.big};
  	}
`;

const LinksWrapper = styled.ul`
	list-style-type: none;
	display: ${props => props.display};

	@media screen and (min-width: ${BREAKPOINTS.desktops}) {
		display: block;
	}
`;

const LinkContainer = styled.li`
	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: space-evenly;
  	height: 3rem;

  	@media screen and (min-width: ${BREAKPOINTS.desktops}) {
      	display: inline-block;
	  	height: auto;

      	&:last-child{
			margin-left: 2rem;
      	}
  	}
	
	a{
		color: ${COLORS.white};
		text-decoration: none;
	  	font-weight: ${FONT_WEIGHT.semibold};
	  	opacity: 1;
	  	transition: opacity 0.3s ease;
	  
	  	&:hover{
		  opacity: 0.7;
		}
	  
		&.cta {
			background-color: ${COLORS.white};
			color: ${COLORS.dark_blue};
			padding: 0.75rem 3rem;
			border-radius: ${BORDER.radius};
		}
	}
`;

const IconContainer = styled.div`
	display: grid;
	place-items: center;

  	@media screen and (min-width: ${BREAKPOINTS.desktops}) {
    	display: none;
  	}
`;

const MenuIcon = {
	fontSize: 35,
	color: `${COLORS.white}`,
	cursor: 'pointer',
}
