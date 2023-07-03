/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import '../App.css';
import bg from '../assets/images';
import dropDown from '../assets/images/down-arrow.svg';

function Section(props) {
	const [bgImg, setBgImg] = useState(bg.model3);
	useEffect(() => {
		switch (props.backgroundImg) {
			case 'model-s.jpg':
				setBgImg(bg.modelS);
				break;
			case 'model-x.jpg':
				setBgImg(bg.modelX);
				break;
			case 'model-y.jpg':
				setBgImg(bg.modelY);
				break;
			case 'solar-roof.jpg':
				setBgImg(bg.solarRoof);
				break;
			case 'accessories.jpg':
				setBgImg(bg.accessories);
				break;
			case 'model-3.jpg':
				setBgImg(bg.model3);
				break;
			case 'solar-panel.jpg':
				setBgImg(bg.solarPanel);
				break;
			default:
				setBgImg(bg.model3);
		}
	}, [props]);
	return (
		<Wrap
			id={props.ID}
			bgImage={bgImg}
		>
			<Fade bottom>
				<ItemText>
					<h1>{props.title}</h1>
					<p>
						{props.description}
						{props.link && <a href="/">{props.link}</a>}
					</p>
				</ItemText>
			</Fade>
			<Buttons>
				{(props.leftBtnText && props.rightBtnText && (
					<ButtonGroup>
						<Fade left>
							<LeftButton>{props.leftBtnText}</LeftButton>
						</Fade>
						<Fade right>
							<RightButton>{props.rightBtnText}</RightButton>
						</Fade>
					</ButtonGroup>
				)) ||
					(props.leftBtnText && (
						<ButtonGroup>
							<Fade bottom>
								<LeftButton>{props.leftBtnText}</LeftButton>
							</Fade>
						</ButtonGroup>
					)) ||
					(props.rightBtnText && (
						<ButtonGroup>
							<Fade bottom>
								<RightButton>{props.rightBtnText}</RightButton>
							</Fade>
						</ButtonGroup>
					))}
				{(props.footer && <Footer footer={props.footer} />) || (
					<DownArrow src={dropDown} />
				)}
			</Buttons>
		</Wrap>
	);
}
export default Section;

const Wrap = styled.div`
	max-width: 100vw;
	max-height: 100vh;
	min-width: 100vw;
	min-height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: ${(props) => `url(${props.bgImage})`};
	scroll-snap-align: start;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	z-index: -1;
	@media (max-width: 768px) {
		// max-height: 95vh;
		// min-height: 95vh;
	}
`;

const ItemText = styled.div`
	z-index: -1;
	padding-top: 15vh;
	text-align: center;
	a {
		text-decoration: underline;
		color: rgba(0, 0, 0, 0.6);
		font-weight: 500;
	}
	p {
		color: rgba(0, 0, 0, 0.6);
		font-weight: 500;
	}
	a:hover {
		color: rgba(0, 0, 0, 0.9);
	}
`;

const ButtonGroup = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	margin-bottom: 25px;
	min-width: 100vw;
	justify-content: center;
	@media (max-width: 768px) {
		grid-template-columns: auto;
	}
	@media (max-height: 200px) {
		margin-bottom: -15px;
	}
`;

const LeftButton = styled.div`
	background-color: #171a20cc;
	height: 40px;
	width: 256px;
	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;
	margin: 8px;
`;

const RightButton = styled(LeftButton)`
	background: #ffffff;
	opacity: 0.65;
	color: #393c41;
`;

const DownArrow = styled.img`
	overflow-x: hidden;
	height: 40px;
	margin: 0 auto;
	animation: animateDown infinite 1.5s;
	color: red;
`;

const Buttons = styled.div`
	min-width: 100vw;
	display: grid;
	grid-template-columns: auto;
	margin-bottom: 30px;
`;
