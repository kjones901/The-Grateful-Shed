import styled from 'styled-components'
import colors from '../../colors'



export const FooterContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 25vh;
	bottom: 0;
	width: 100vw;
	background: ${colors.light};
`

export const FooterText = styled.div`
	font-weight: 700;
	padding: .3rem;
	color: black;

@media (max-width: 550px) {
	flex-direction: column;
	font-size: 3.3vw;
  }
`

export const FooterLink = styled.i`
	color: black;
	font-size: 2rem;
	padding: 1rem;

	&:hover{
		color: white;
	}
`

export const FooterLinkContainer = styled.div`
	display: flex;
	flex-direction: row;
`



