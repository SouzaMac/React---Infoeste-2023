import { CardContent } from "./card-content";
import { Card, Message, SubTitle, Title, Wrapper } from "./sobre-nos.styles";
import { CardType } from "./types";

export const SobreNos = () => {
  const messages: CardType[] = CardContent();

  console.log(messages, "Minhas mensagens");
  return <Wrapper>
    <Title> Sobre nós</Title>
    <SubTitle> console.log("Hello World!")</SubTitle>

    {messages.map((item) => 
    <Card key={item.id}>
      <Message> {item.message} </Message>
    </Card>)}

  </Wrapper>
};
