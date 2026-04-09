import styled from "styled-components"
import Logo from '../assets/Logo.png'

import '../Styles/Style.css'
import { useEffect, useRef, useState } from "react";
import { Modal } from "../Components/modal";
import {styleInput} from "../Styles/common"
import {IconLupa, NomeAnimal, NomeTutor, Telefone, Cachorro, Gato, AnimalRaca,  Date} from "../Utils/Icons"






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
const DivMain = styled.div`
    border: 1px solid red;
    height: 60vh;
`
const DivMain2 = styled.div`
    border: 1px solid red;
    margin: 50px;
    width: 300px;
    height: 95px;
    display: flex;
    flex-direction: column;
`
const LabelMain = styled.label`
    
`

/* ------ Style Modal -------- */

const DivModal = styled.div`
    color: white;
`
const DivColuna0 = styled.form`
    display: flex;
    flex-direction: row;
    gap: 100px;
`

const DivColuna1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 231px;
    height: 223px;
    gap: 10px;
`
const InputNomeAnimal = styled.input`
    ${styleInput}
`
const InputNomeTutor = styled.input`
    ${styleInput}
`
const InputTelefone = styled.input`
    ${styleInput}
`

const DivColuna2 =styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`
const InputRaca = styled.input`
    ${styleInput}
`
const InputDate = styled.input`
    ${styleInput}
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
    height: 30px;
    display: flex;
    align-items: center;
    border-radius: 10px;
`
const DivCheck2 = styled.div`
    border: 3px solid white;
    width: 111px;
    height: 30px;
    display: flex;
    align-items: center;
    border-radius: 10px;
`
/*------- Final Style Modal -------- */

function home(){
    const boxRef = useRef(null);

    useEffect(()=> {
        const elemento = boxRef.current;

        console.log("width Calculado", elemento.offsetWidth);
        console.log("Heigh Calculado", elemento.offsetHeight);
    }, []);

    const [open, setOpen] = useState(false);
    
    const [animais, setAnimais] = useState([]);
    const [nomeAnimal, setNomeAnimal] = useState("");
    const [nomeTutor, setNomeTutor] = useState("");
    const [telefone, setTelefone] = useState ("");
    const [checkCachorro, setCheckCachorro] = useState(false);
    const [checkGato, setCheckGato] = useState(false);
    const [raca, setRaca] = useState("");
    const [data, setData] = useState("");


    async function buscarAnimal(){
        const res = await fetch("http://localhost:3000/Animais")
        const data = await res.json();
        setAnimais(data);
    }

    useEffect(() => {
        buscarAnimal();
    }, []); // Se o get retornar valor null o codigo nao quebra

    async function buscarAnimalNome(){
        const res = await fetch(`http://localhost:3000/Animais/${nomeAnimal}`); //crase é o correto para o app ler a url da Api
        const data = await res.json();

        console.log("Resultado", res.status);
       

        setAnimais(data);

        animais.map(animais =>{
        console.log("Nome Animal: ", animais.nomeanimal);
        })

        console.log(animais);
    }



    async function salvarAnimal(e){
        e.preventDefault();

        const res = await fetch("http://localhost:3000/Animais",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeAnimal,
            nomeTutor,
            telefone,
            checkCachorro,
            checkGato,
            raca,
            dataNascimento: data
            }),
        });

        console.log("Resposta Status", res.status);
        console.log("Data", data);
        console.log("Body recebido:",   nomeAnimal,
            nomeTutor,
            telefone,
            checkCachorro,
            checkGato,
            raca,
            data);
        
    }
    
    return(
        <div>
            <Nav ref={boxRef}>
                <NavLogo>
                    <Img src={Logo} alt="Logo"/>
                    <h1>SoftPet</h1>
                </NavLogo>
                <Lupa>
                    {IconLupa}
                </Lupa>
                <Input
                type="text"
                value={nomeAnimal}
                onChange={(e) => setNomeAnimal(e.target.value)}
                
                />
                <BtnPesquisa onClick={buscarAnimalNome}>Pesquisar</BtnPesquisa>
                <BtnCad onClick={() => setOpen(true)}>+ Cadastrar</BtnCad>
            </Nav>

            <DivMain>
                <DivMain2>
                    <label style={{color: 'white'}}>Nome animal: {animais.nomeanimal}</label>
                    <label style={{color: 'white'}}>Nome Tutor: {animais.nometutor}</label>
                </DivMain2>
            </DivMain>

            <DivModal>
                <Modal isOpen={open} onClose={() => setOpen(false)}>
                    <h2>Meu Popup</h2>
                <DivColuna0 onSubmit={salvarAnimal}>
                    <DivColuna1>
                    <label>{NomeAnimal} Nome do animal:</label>
                    <InputNomeAnimal
                        type="text"
                        value={nomeAnimal}
                        onChange={(e) => setNomeAnimal(e.target.value)}
                    />

                    <label>{NomeTutor} Nome do tutor:</label>
                    <InputNomeTutor
                        type="text"
                        value={nomeTutor}
                        onChange={(e) => setNomeTutor(e.target.value)}
                    />

                    <label>{Telefone} Telefone: </label>
                    <InputTelefone
                        type="text"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                    </DivColuna1>

                    <DivColuna2>
                        <label>{AnimalRaca} Animal</label>
                        <DivAnimal>   
                            <DivCheck1>
                                <InputCheckbox
                                    type="checkbox"
                                    checked={checkCachorro}
                                    onChange={(e) => setCheckCachorro(e.target.checked)}
                                />
                                <label>{Cachorro} Cachorro</label>
                            </DivCheck1>
                            <DivCheck2>
                                <input
                                    type="checkbox"
                                    checked={checkGato}
                                    onChange={(e) => setCheckGato(e.target.checked)}
                                />
                                <label>{Gato} Gato</label>
                            </DivCheck2>
                        </DivAnimal>

                    <label>{AnimalRaca} Raça:</label>
                    <InputRaca
                        type="text"
                        value={raca}
                        onChange={(e) => setRaca(e.target.value)}
                    />
                    <label>{Date} Nascimento:</label>
                    <InputDate
                    type="date"
                    value={data}
                    onChange={(e) => {
                        setData(e.target.value);
                        console.log("valor digitado", e.target.value);
                        }}
                    />
                    </DivColuna2>
                    <BtnCad type="submit">Cadastra</BtnCad>
                </DivColuna0>

                
                </Modal>
            </DivModal>

            
        </div>
    )
}

export default home