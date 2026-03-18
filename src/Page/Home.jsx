import styled from "styled-components"
import Logo from '../assets/Logo.png'
import { HiMagnifyingGlass } from "react-icons/hi2";
import '../Styles/Style.css'
import { useEffect, useRef, useState } from "react";



const Nav = styled.div`

`
const NavLogo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-left: 55px;
    margin-top: 50px;
    align-items: center;
    color: #FFFFFF;
`

const Img = styled.img`
    width: 61px;
    height: 48px;
`

const Input = styled.input`
    position: relative;
    background: none;
    width: 79%;
    height: 40px;
    margin-left: 55px;
    border-radius: 10px;
    border: 3px solid #404A5C;
`

const BtnPesquisa = styled.button`
    position: absolute;
    width: 106px;
    height: 36px;
    border-radius: 5px;
    left: 75%;
    top: 145px;
    font-family: Ubuntu;
    font-size: 18px;
    background: #404A5C;
    color: #FFFFFF;
    font-weight: 700;
`
const BtnCad = styled.button`
    color: #FFFFFF;
    background: linear-gradient(to right, #1f6fe5, #22c1e8);
    width: 11%;
    height: 50px;
    border-radius: 10px;
    font-family: Ubuntu;
    font-size: 18px;
    font-weight: 700;
    margin-left: 5px;
`

const Lupa = styled.div`
    position: absolute;
    left: 55px;
    top: 141px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #404A5C;
    width: 40px;
    height: 40px;
    background: #404A5C;
    border-radius: 5px;
`


function home(){
    const boxRef = useRef(null);

    useEffect(()=> {
        const elemento = boxRef.current;

        console.log("width Calculado", elemento.offsetWidth);
        console.log("Heigh Calculado", elemento.offsetHeight);
    }, []);

    return(
        <div>
            <Nav ref={boxRef}>
                <NavLogo>
                    <Img src={Logo} alt="Logo"/>
                    <h1>SoftPet</h1>
                </NavLogo>
                <Lupa>
                 <HiMagnifyingGlass className="icon"/>
                </Lupa>
                <Input
                type="text"
                
                />
                <BtnPesquisa>Pesquisar</BtnPesquisa>
                <BtnCad>+ Cadastrar</BtnCad>
            </Nav>

            <div>
                <h1>Main da pag</h1>
            </div>
        </div>
    )
}

export default home