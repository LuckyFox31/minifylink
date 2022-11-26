import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {database} from "../Firebase/FirestoreConfig.js";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Redirection() {
	const {link} = useParams();
	const navigate = useNavigate();
	const [redirectLink, setRedirectLink] = useState();

	useEffect(() => {
		getDoc(doc(database, 'links', link))
			.then(document => {
				if(document.data()){
					setRedirectLink(document.data().originalLink);
					return window.location.href = document.data().originalLink;
				}
				return navigate('/');
			})
	},[]);

	return (
		<Container>
			<h1>Redirection en cours...</h1>
			<a href={redirectLink}>La redirection ne fonctionne pas ? Cliquez ici</a>
			<small>Propulsé par <a href="https://minlk.me" target="_blank">minlk.me</a></small>
		</Container>
	)
}

const Container = styled.main`
	height: 100vh;
  	width: 100vw;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: center;
  
  	h1{
	  margin-bottom: 2rem;
	  text-align: center;
	  font-size: 1.8rem;
	}
  
  	a{
	  text-align: center;
	  color: blue;
	}
  
  	small{
	  position: absolute;
	  text-align: center;
	  bottom: 4rem;
	}
`