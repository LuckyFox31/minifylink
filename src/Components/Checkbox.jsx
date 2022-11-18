import styled from "styled-components";
import {FONT_SIZES, FONT_WEIGHT} from "../Constants/Typography.js";
import {COLORS} from "../Constants/Colors.js";
import {FormErrorMessage} from "./FormErrorMessage.jsx";

export default function Checkbox({name, required, onChange, value, error, children}){
	return (
		<>
			<CheckboxContainer>
				<InputCheckbox type="checkbox" name={name} id={name} required={required} onChange={onChange} value={value} />
				<CheckboxLabel htmlFor={name}>{children}</CheckboxLabel>
			</CheckboxContainer>
			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</>
	)
}

const CheckboxContainer = styled.div`
  	width: 100%;
	display: flex;
  	align-items: center;
`;

const InputCheckbox = styled.input`
  	margin-right: 0.5rem;
`;

const CheckboxLabel = styled.label`
	font-size: ${FONT_SIZES.tiny};
  	font-weight: ${FONT_WEIGHT.regular};
  	color: ${COLORS.gray};

  	a{
    	color: ${COLORS.gray};
  	}
`;