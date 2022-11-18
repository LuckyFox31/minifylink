import styled from "styled-components";
import {FONT_SIZES, FONT_WEIGHT} from "../Constants/Typography.js";
import {COLORS} from "../Constants/Colors.js";
import {BORDER} from "../Constants/Border.js";
import {FormErrorMessage} from "./FormErrorMessage";

export default function FormInput({name, type, placeholder, required, onChange, value, error, children}){
	return (
		<InputContainer>
			<InputLabel htmlFor={name}>{children}{required ? <sup>*</sup> : null}</InputLabel>
			<Input type={type} name={name} id={name} placeholder={placeholder} required={required} onChange={onChange} value={value} />
			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</InputContainer>
	)
}

const InputContainer = styled.div`
	display: flex;
  	flex-direction: column;
  	margin: 1rem 0;
`;

const InputLabel = styled.label`
	font-size: ${FONT_SIZES.standard};
  	font-weight: ${FONT_WEIGHT.semibold};
  	margin-bottom: 0.5rem;
  
  	sup{
	  color: ${COLORS.red};
	}
`;

const Input = styled.input`
	width: 100%;
  	height: 2.5rem;
  	background-color: ${COLORS.light_gray};
  	padding: 0.5rem 1rem;
  	border: none;
  	border-radius: ${BORDER.radius};
  
  	&::placeholder{
	  color: ${COLORS.gray};
	}
`;