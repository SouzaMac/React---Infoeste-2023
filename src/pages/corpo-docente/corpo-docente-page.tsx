import {useEffect, useState} from "react";
import { MainWrapper, ProfessorWrapper, Title, TitleWrapper } from "./corpo-docente-page.styles";
import { CorpoDocente } from "@/entities/corpo-docente";
import { CardItem } from "./components/card-item/card-item";

export const CorpoDocentePage = () => {
  const [listaProfessores, setListaProfessores] = useState<CorpoDocente[]>([]);

  useEffect(() => {
    fetch(URL, {
      method: 'GET'
    }).then((response) => response.json()).then((value:{corpoDocente:CorpoDocente[]}) => {
      setListaProfessores(value.corpoDocente);
      console.log(value);
    });
  },[])

  const URL = "https://infoeste-back-end-fm89.vercel.app/";
  return <MainWrapper>
    <TitleWrapper>
        <Title>Corpo Docente</Title>
    </TitleWrapper>
    <ProfessorWrapper>
      {listaProfessores.sort((a,b)=>{
        if(a.nome>b.nome) return 1;
        if(b.nome>a.nome) return -1;

        return 0;
      }).map((professor) =>(
        <CardItem professor={professor}/>
      ))}
    </ProfessorWrapper>
  </MainWrapper>
};
