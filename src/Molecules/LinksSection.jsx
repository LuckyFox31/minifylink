import styled from "styled-components";
import {COLORS} from "../Constants/Colors.js";
import {BORDER} from "../Constants/Border.js";
import {SHADOW} from "../Constants/Shadow.js";
import {FONT_SIZES, FONT_WEIGHT} from "../Constants/Typography.js";
import {BREAKPOINTS} from "../Constants/Breakpoints.js";
import {HiTrash, HiDuplicate} from "react-icons/hi";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../Contexts/UserContext.jsx";
import {collection, onSnapshot} from "firebase/firestore";
import {database} from "../Firebase/FirestoreConfig.js";

export default function LinksSection(){
	const {user} = useContext(UserContext);
	const [links, setLinks] = useState([]);

	useEffect(() => {
		const unsubcribe = onSnapshot(collection(database, user.uid), (docs) => {
			const data = [];
			docs.forEach(doc => {
				data.push(doc.data());
			});
			data.sort((x, y) => {
				return y.timestamp - x.timestamp;
			});

			setLinks(data);
		})

		return () => {
			unsubcribe();
		}
	}, []);

	return (
		<>
			<SectionTitle>Mes liens</SectionTitle>
			<Container>
				{
					links.length > 0 ?
						<ContainerTable>
							<thead>
							<tr>
								<th>Liens originaux</th>
								<th>Liens minifiés</th>
							</tr>
							</thead>
							<tbody>
							{
								links.map((link) => {
									return (
										<tr key={link.minifiedLink}>
											<td data-label="Lien original"><a href={link.originalLink} target="_blank">{link.originalLink}</a></td>
											<td data-label="Lien minifié"><a href={`https://minlk.me/${link.minifiedLink}`} target="_blank">https://minlk.me/{link.minifiedLink}</a></td>
											<td data-label="Actions">
												<ActionList>
													<li>
														<ActionButton>
															<HiDuplicate color={COLORS.gray} />
														</ActionButton>
													</li>
													<li>
														<ActionButton>
															<HiTrash color={COLORS.red} />
														</ActionButton>
													</li>
												</ActionList>
											</td>
										</tr>
									)
								})
							}
							</tbody>
						</ContainerTable>
						:
						<NoLinkParagraph>Vous n'avez pas (encore) de lien minifié :(</NoLinkParagraph>
				}
			</Container>
		</>
	)
}

const SectionTitle = styled.h3`
	font-size: ${FONT_SIZES.regular};
  	text-align: center;
  	margin-top: 3rem;

  	@media screen and (min-width: ${BREAKPOINTS.phone}) {
      	font-size: ${FONT_SIZES.medium};
  	}
`;

const Container = styled.section`
  	margin-top: 1rem;
	background-color: ${COLORS.white};
	border-radius: ${BORDER.radius};
  	box-shadow: ${SHADOW.small};
  	padding: 1rem;

  	@media screen and (min-width: ${BREAKPOINTS.desktops}){
	  	margin: 1rem 5rem 0 5rem;
	}
	
  	@media screen and (min-width: ${BREAKPOINTS.large}){
		margin: 1rem 12rem 0 12rem;
	}

  	@media screen and (min-width: ${BREAKPOINTS.tablet}){
    	padding: 0;
  	}
`;

const ContainerTable = styled.table`
  	border-collapse: collapse;
  	margin: 0;
  	padding: 0;
  	width: 100%;
  	table-layout: fixed;

  	@media screen and (min-width: ${BREAKPOINTS.tablet}){
		border-spacing: 1rem;
      	border-collapse: separate;
  	}
  
  	thead{
      	clip: rect(0 0 0 0);
      	height: 1px;
      	margin: -1px;
      	overflow: hidden;
      	padding: 0;
      	position: absolute;
      	width: 1px;

      	@media screen and (min-width: ${BREAKPOINTS.tablet}){
        	clip: initial;
		  	margin: 0;
		  	height: auto;
		  	overflow: auto;
		  	position: initial;
		  	width: 100%;
      	}
	}
  
  	tr{
      	display: block;
      	margin-bottom: .625em;

      	@media screen and (min-width: ${BREAKPOINTS.tablet}){
			display: table-row;
		  	margin: 0;
      	}
	}
  	
  	th, td{
	  	text-align: left;
	  	font-size: ${FONT_SIZES.small};

      	@media screen and (min-width: ${BREAKPOINTS.tablet}){
        	font-size: ${FONT_SIZES.standard};
      	}
	}
  
  	td{
      	border-bottom: 1px solid #ddd;
      	display: block;
      	text-align: right;
	  	padding: 0.5rem 0;

      	overflow: hidden;
      	text-overflow: ellipsis;
      	white-space: nowrap;
	  
	  	a{
		  	color: ${COLORS.black};
		  	text-decoration: none;
		}
	  
	  	&::before{
          	content: attr(data-label);
          	float: left;
          	font-weight: ${FONT_WEIGHT.semibold};
          	font-size: ${FONT_SIZES.small};
		  	margin-right: 1rem;

          	@media screen and (min-width: ${BREAKPOINTS.tablet}){
              	content: none;
              	float: none;
          	}
		}
	  
	  	&:last-child{
		  	border: none;
		}

      	@media screen and (min-width: ${BREAKPOINTS.tablet}){
          	border: none;
          	display: table-cell;
          	text-align: left;
          	padding: 0;
      	}
	}
`;

const ActionList = styled.ul`
	list-style-type: none;
  	display: flex;
  	align-items: center;
  	justify-content: flex-end;
  
  	li:not(:first-child){
	  	margin-left: 0.5rem;
	}
`;

const ActionButton = styled.button`
	border: none;
  	background: none;
  	height: 2rem;
  	width: 2rem;
  	padding: 0.2rem;
  	cursor: pointer;
  	opacity: 1;
  	transition: opacity 0.3s ease;
  	
  	&:hover{
	  	opacity: 0.7;
	}
  
  	svg{
	  height: 100%;
	  width: 100%;
	}
`;

const NoLinkParagraph = styled.p`
	text-align: center;
  	font-weight: ${FONT_WEIGHT.semibold};
  	padding: 2rem 1rem;
`;