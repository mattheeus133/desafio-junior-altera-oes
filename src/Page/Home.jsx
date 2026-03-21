import styled from "styled-components"
import Logo from '../assets/Logo.png'
import { HiMagnifyingGlass } from "react-icons/hi2";
import '../Styles/Style.css'
import { useEffect, useRef, useState } from "react";
import { Modal } from "../Components/modal";



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
const DivModal = styled.div`
    color: white;
`
const DivColuna0 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
`

const DivColuna1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 231px;
    height: 223px;
`
const DivColuna2 =styled.div`
    display: flex;
    flex-direction: column;

`
const DivAnimal = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

const InputCheckbox = styled.input`
    border-radius: 50px;

`
const DivCheck1 = styled.div`
    border: 3px solid white;
    width: 111px;
    height: 39px;
    display: flex;
    align-items: center;
    border-radius: 10px;
`
const DivCheck2 = styled.div`
    border: 3px solid white;
    width: 111px;
    height: 39px;
    display: flex;
    align-items: center;
    border-radius: 10px;
`

function home(){
    const boxRef = useRef(null);

    useEffect(()=> {
        const elemento = boxRef.current;

        console.log("width Calculado", elemento.offsetWidth);
        console.log("Heigh Calculado", elemento.offsetHeight);
    }, []);

    const [open, setOpen] = useState(false);

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
                <BtnCad onClick={() => setOpen(true)}>+ Cadastrar</BtnCad>
            </Nav>

            <div>
                <h1>Main da pag</h1>
            </div>

            <DivModal>
                <Modal isOpen={open} onClose={() => setOpen(false)}>
                    <h2>Meu Popup</h2>
                <DivColuna0>
                    <DivColuna1>
                    <label>Nome do animal:</label>
                    <input
                        type="text"
                    />

                    <label>Nome do tutor:</label>
                    <input
                        type="text"
                    />

                    <label>Telefone: </label>
                    <input
                        type="text"
                    />
                    </DivColuna1>

                    <DivColuna2>
                        <label>Animal</label>
                        <DivAnimal>   
                            <DivCheck1>
                                <InputCheckbox
                                    type="checkbox"
                                />
                                <label>Cachorro</label>
                            </DivCheck1>
                            <DivCheck2>
                                <input
                                    type="checkbox"
                                />
                                <label>Gato</label>
                            </DivCheck2>
                        </DivAnimal>

                    <label>Raça:</label>
                    <input
                        type="text"
                    />
                    <label>Nascimento:</label>
                    <input
                    type="date"
                    />
                    </DivColuna2>
                </DivColuna0>
                </Modal>
            </DivModal>
        </div>
    )
}

export default home