import styled from 'styled-components'
import { Link } from "react-router-dom";
import LogoSrc from "../../assets/logo-small.png"

export const HeaderContainer = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	width: 100vw;
	background: grey;
`

export const NavContainer = styled.div`
	display: flex;
	padding-right: 2rem;
	gap: 2rem;
`

export const NavLinks = styled(Link)`
	font-size: 1.3rem;
	color: black;

	&:hover{
		color: white;
	}
`

export const LogoLink = styled(Link)`
	display: flex;
`

export const Logo = styled.img.attrs({
	src: `${LogoSrc}`
})`
	height: 5rem;
	padding: .6rem;

	&:hover{
		filter: drop-shadow(0 0 .5rem white);
	}
`