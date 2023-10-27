import { Cursos } from "./components/cursos/cursos"
import { Duvidas } from "./components/duvidas/duvidas"
import { Intro } from "./components/intro/intro"
import { Mapa } from "./components/mapa/mapa"
import { SobreNos } from "./components/sobre-nos/sobre-nos"

export const Home = () => {
  return (
    <>
      <Intro />
      <SobreNos/>
      <Cursos/>
      <Mapa/>
      <Duvidas/>
    </>
  )
}
