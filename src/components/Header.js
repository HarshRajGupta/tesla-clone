/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import "../App.css";


function Header() {
	const [burgerStatus, setBurgerStatus] = useState(false);
	const cars = useSelector(selectCars);
	console.log(cars);
	return (
		<Container>
			<a href="#">
		<img src="/images/logo.svg" alt="TESLA" />
			</a>
			<Menu>
				{cars &&
					cars.map((car, index) => (
						<span>
							<a key={index} href={"#" + car}>
								{car}
							</a>
						</span>
					))}
			</Menu>
			<RightMenu>
				<a href="#">
					<span>Shop</span>
				</a>
				<a href="#">
					<span>Account</span>
				</a>
				<a href="#">
					<span onClick={() => setBurgerStatus(true)}>Menu</span>
				</a>
			</RightMenu>
			<BurgerNav show={burgerStatus}>
				<CloseWrap>
					<CustomClose onClick={() => setBurgerStatus(false)} />
				</CloseWrap>
				<ListNav>
					{cars &&
						cars.map((car, index) => (
							<li key={index} className="temp">
								<a href="/" key={index}>
									{car}
								</a>
							</li>
						))}

					<li>
						<a href="#">Existing Inventory</a>
					</li>
					<li>
						<a href="#">Used Inventory</a>
					</li>
					<li>
						<a href="#">Trade-in</a>
					</li>
					<li>
						<a href="#">Test Drive</a>
					</li>
					<li>
						<a href="#">Cybertruck</a>
					</li>
					<li>
						<a href="#">Roadster</a>
					</li>
					<li>
						<a href="#">Semi</a>
					</li>
					<li>
						<a href="#"> Charging</a>
					</li>
					<li>
						<a href="#"> Powerwall</a>
					</li>
					<li>
						<a href="#">Commercial Energy</a>
					</li>
					<li>
						<a href="#">Utilites</a>
					</li>
					<li>
						<a href="#">Find us</a>
					</li>
					<li>
						<a href="#">Support</a>
					</li>
					<li>
						<a href="#">Investor Relations</a>
					</li>
				</ListNav>
			</BurgerNav>
		</Container>
	);
}
export default Header;

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  position: fixed;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 10;
  svg {
    z-index: 50;
  }
  height: auto;
`;

const Menu = styled.div`
  position: absolute;
  min-width: max-content;
  right: 25%;
  left: 25%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: 5px;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-size: 14px;
    font-weight: 600;
    color: #181b21;
    text-transform: uppercase;
    padding: 4px 8px;
    flex-wrap: nowrap;
  }
  span {
    margin: 0;
    padding: 0;
    transition: 1s;
  }
  span:hover {
    background: hsla(0, 0%, 0%, 0.05);
    border-radius: 12px;
  }
  @media (max-width: 1125px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  font-size: 14px;
  align-items: center;
  a {
    padding: 4px 8px;
    font-weight: 500;
    color: #181b21;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
  span {
    padding: 8px;
    transition: 1s;
  }
  span:hover {
    background: hsla(0, 0%, 0%, 0.05);
    border-radius: 12px;
  }
  @media (max-width: 768px) {
    a:nth-child(1),
    a:nth-child(2) {
      display: none;
    }
    grid-template-columns: auto;
  }
`;

const BurgerNav = styled.div`
position: absolute;
min-height: 100vh;
top: 0;
right: 0;
background: white;
height: inherit;
padding: 20px;
display: grid;
grid-template-columns: 1fr;
list-style: none;
scroll-snap-align: none;
text-align: center;
scroll-snap-type: y mandatory;
overflow: auto !important;
transform: ${(props) =>
		props.show ? "translate(0, 0)" : "translate(100%, 0)"};
transition: 1s;
li {
    padding: 12px 15px;
	border-radius: 15px;
    a{
        margin-left: 5px;
    }

}
li:hover {
	background: hsla(0,0%,0%,.05);
}
width: 300px;
text-align: start;
@media(min-width:1125px)
{
    .temp {
    	display: none;
    }
`;

const CustomClose = styled(CancelIcon)`
  cursor: pointer;
`;

const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ListNav = styled.div`
overflow: auto;
margin-top: 10px;
height: 85vh;
padding-bottom: 15px;
`;