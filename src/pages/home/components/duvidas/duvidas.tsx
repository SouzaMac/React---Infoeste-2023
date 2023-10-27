import { FormGroup, FormLabel, Title, Wrapper, Image, Form, Input, SubmitButton } from "./duvidas.styles";
import DuvidasImage from "../../../../assets/icons/desenho.svg"
import { useState } from "react";


export const Duvidas = () => {

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [duvida, setDuvida] = useState("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(event.target.value)
  };

  const handleNome = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setNome(event.target.value)
  };

  const handleDuvida = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setDuvida(event.target.value)
  };

  const sheetDBUrl = 'https://sheetdb.io/api/v1/p33s9qi7h0f5q';

  const handleEnviarClick = async (event:{preventDefault: () => void}) => {
    event.preventDefault();
    const payload = {
      Nome: nome,
      Email: email,
      Duvidas: duvida,
    }
  
  try{
      const response = await fetch(sheetDBUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if(response.ok){
        alert("Enviado para o SheetBD com sucesso!");
        setNome("");
        setEmail("");
        setDuvida("");
      }else{
        alert("Erro ao enviar oara o SheetBD:");
      }
    }catch(error){
      alert("Erro ao enviar para o SheetBD:");
    }
  };

  return ( 
  <>
    <Title>Duvidas?</Title>
    <Wrapper>
      <Image src = {DuvidasImage} />
      <Form>
        <FormGroup>
          <FormLabel>Nome</FormLabel>
          <Input onChange={handleNome}/>
        </FormGroup>
      
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <Input onChange={handleEmail}/>
        </FormGroup>


        <FormGroup>
          <FormLabel>Duvidas</FormLabel>
          <Input onChange={handleDuvida}/>
        </FormGroup>
        <SubmitButton type="submit" onClick={handleEnviarClick}>
          Enviar
        </SubmitButton>
      </Form>

    </Wrapper>
  </>
  );
};
