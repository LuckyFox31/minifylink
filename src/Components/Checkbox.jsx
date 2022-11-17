import styled from "styled-components";
import {FONT_SIZES, FONT_WEIGHT} from "../Constants/Typography.js";
import {COLORS} from "../Constants/Colors.js";

export default function Checkbox({name, required, children}){
	return (
		<CheckboxContainer>
			<InputCheckbox type="checkbox" name={name} id={name} required={required} />
			<CheckboxLabel htmlFor={name}>{children}</CheckboxLabel>
		</CheckboxContainer>
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