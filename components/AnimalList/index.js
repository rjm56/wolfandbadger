import { Wrapper, Card, Title, Action, ActionWrapper } from "./styles";

const AnimalList = ({ animals, onDelete, onEdit, onShow }) => {
  return (
    <Wrapper>
      {animals.map(animal => (
        <Card key={animal.id} onClick={() => onShow(animal)}>
          <Title>{animal.name}</Title>

          <ActionWrapper>
            <Action
              isPrimary
              onClick={e => {
                e.stopPropagation();
                onEdit(animal);
              }}
            >
              Edit
            </Action>
            <Action
              onClick={e => {
                e.stopPropagation();
                onDelete(animal.id);
              }}
            >
              Delete
            </Action>
          </ActionWrapper>
        </Card>
      ))}
    </Wrapper>
  );
};

export default AnimalList;
