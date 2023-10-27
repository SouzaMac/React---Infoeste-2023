import {useState} from "react";
import { CursoWrapper, NomeCurso, TipoCurso, TiposWrapper, Title, View, Wrapper } from "./cursos.styles";
import BachareladoImg from "../../../../assets/images/graduacao.png"
import TecnologoImg from "../../../../assets/images/tec.png"
import PosGraduacaoImg from "../../../../assets/images/pos.png"


export const Cursos = () => {
  const [numCurso, setNumCurso] = useState(0);
  return (
    <>
      <Title>Cursos</Title>
      <Wrapper>
        <TiposWrapper>
          <TipoCurso onClick={() => setNumCurso(0)}>Baxarelado</TipoCurso>
          <TipoCurso onClick={() => setNumCurso(1)}>Tecnólogo</TipoCurso>
          <TipoCurso onClick={() => setNumCurso(2)}>Pós-graduado</TipoCurso>
        </TiposWrapper>
        <CursoWrapper>
          {numCurso == 0 &&(
            <>
                <img src={BachareladoImg}/>
              <View> 
                  <NomeCurso>Ciência da Computação</NomeCurso>
                  <NomeCurso>Sistemas de Informação</NomeCurso>
                  <NomeCurso>Emgenharia de Software(EAD)</NomeCurso>
              </View>
              </>
          )}

          {numCurso == 1 &&(
            <>
                <img src={TecnologoImg}/>
              <View> 
                  <NomeCurso>análise e Desenvolvimento dfe Sistemas</NomeCurso>
                  <NomeCurso>Redes de Computadores</NomeCurso>
                  <NomeCurso>Jogos Digitais</NomeCurso>
                  <NomeCurso>Gestão da Tecnologia da Informação</NomeCurso>
              </View>
              </>
          )}
          {numCurso == 2 &&(
            <>
                <img src={PosGraduacaoImg}/>
              <View> 
                  <NomeCurso>Data Sciences</NomeCurso>
                  <NomeCurso>Desenvolvimento de Aplicações Web</NomeCurso>
                  <NomeCurso>Segurança da Informação</NomeCurso>
              </View>
              </>
          )}

          
        </CursoWrapper>
      </Wrapper>
    </>
  );
};
