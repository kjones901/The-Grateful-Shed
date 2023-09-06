import styled from 'styled-components'
import colors from '../../colors'



export const FooterContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 10rem;
	bottom: 0;
	width: 100vw;
	background: ${colors.light};
	padding: 1rem;
`

export const FooterText = styled.div`
	font-weight: 700;
	padding: .3rem;
	color: black;
`
export const FooterLinks = styled.div`
	
`

export const FooterLink = styled.i`
	color: black;
	font-size: 2rem;
	padding: 1rem;

	&:hover{
		color: white;
	}
`


