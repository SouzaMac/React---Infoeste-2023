import { Nav, Wrapper, List, ListItem, Image, NavLink,Button} from "./navbar.styles";
import LogoFipp from "../../assets/images/logo-fipp.png";
import LogoUnoeste from "../../assets/images/logo-unoeste.png";
import { MobileNavbar } from "./mobile-navbar";

export const Navbar = () => {
  function onButtonPRess(){
    window.open("https://www.unoeste.br/")
  }




  return (  
  <Wrapper>
      <Nav>
        <Image src={LogoFipp} />
      <List>
        <ListItem>
          <NavLink to={"/"}>Home</NavLink>
        </ListItem> 
        <ListItem>
          <NavLink to={"/corpo-docente"}>Corpo Docente</NavLink>
        </ListItem>
        <ListItem>
          <Button onClick={onButtonPRess}>
            <Image src={LogoUnoeste} />
          </Button>
        </ListItem>
      </List>
      <MobileNavbar/>
      </Nav>
  </Wrapper>
  )
};
