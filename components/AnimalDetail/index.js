import { Wrapper, Row, Text, Label, Heading } from "./styles";

const AnimalDetail = ({ name, type, diet, isExtinct }) => (
  <Wrapper>
    <Heading>{name}</Heading>
    <Row>
      <Label>Type: </Label>
      <Text>{type}</Text>
    </Row>
    <Row>
      <Label>Diet: </Label>
      <Text>{diet}</Text>
    </Row>
    <Row>
      <Label>Is extinct: </Label>
      <Text>{isExtinct ? "yes" : "no"}</Text>
    </Row>
  </Wrapper>
);

export default AnimalDetail;
