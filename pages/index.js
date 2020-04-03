import Head from "next/head";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { createGlobalStyle } from "styled-components";
import AnimalList from "../components/AnimalList";
import NewAnimal from "../components/NewAnimal";
import initialState from "../mocks/data";
import EditAnimal from "../components/EditAnimal";
import Modal from "../components/Modal";
import AnimalDetail from "../components/AnimalDetail";
import colors from "../constants/colors";
import styled from "styled-components";
import Button from "../atoms/Button";

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    font-family: 'Open Sans', Helvetica, Arial,sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${colors.background}
  }

  main {
    max-width: 960px;
    margin: 60px auto;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  p {
    margin: 0;
  }
`;

export const Header = styled.h1`
  text-align: center;
  font-weight: 300;
  letter-spacing: -1px;
`;
const Wrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

const App = () => {
  const [animals, updateAnimals] = useState(initialState);
  const [currentAnimal, setCurrentAnimal] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalId, setModalId] = useState();

  const closeModal = () => {
    setShowModal(false);
    setModalId("");
  };

  const handleAddButtonClick = () => {
    setShowModal(true);
    setModalId("add");
  };

  const handleEditButtonClick = animal => {
    setCurrentAnimal(animal);
    setShowModal(true);
    setModalId("edit");
  };

  const handleShowClick = animal => {
    setCurrentAnimal(animal);
    setShowModal(true);
    setModalId("show");
  };

  const handleAdd = newAnimal => {
    updateAnimals([...animals, { id: uuidv4(), ...newAnimal }]);
    closeModal();
  };

  const handleEdit = editedAnimal => {
    const updatedAnimals = animals.map(animal =>
      animal.id === editedAnimal.id ? editedAnimal : animal
    );
    updateAnimals(updatedAnimals);
    closeModal();
  };

  const handleDelete = animalId => {
    const updatedAnimals = animals.filter(animal => animal.id !== animalId);
    updateAnimals(updatedAnimals);
  };

  const modalContent = {
    show: <AnimalDetail {...currentAnimal} />,
    edit: <EditAnimal currentAnimal={currentAnimal} onSubmit={handleEdit} />,
    add: <NewAnimal onSubmit={handleAdd} />
  };

  const renderModalContent = () => modalContent[modalId];

  return (
    <div>
      <Head>
        <title>Animal Top Trumps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header>Animal Top Trumps</Header>
        <Wrapper>
          <AnimalList
            animals={animals}
            onDelete={handleDelete}
            onEdit={handleEditButtonClick}
            onShow={handleShowClick}
          />
          <Button onClick={handleAddButtonClick}>Add a new animal</Button>
        </Wrapper>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            {renderModalContent()}
          </Modal>
        )}
      </main>
      <GlobalStyle />
    </div>
  );
};

export default App;
