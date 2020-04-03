import Head from "next/head";
import { useState, useEffect } from "react";
import AnimalList from "../components/AnimalList";
import NewAnimal from "../components/NewAnimal";
import { v4 as uuidv4 } from "uuid";
import initialState from "../mocks/data";
import EditAnimal from "../components/EditAnimal";
import Modal from "../components/Modal";
import AnimalDetail from "../components/AnimalDetail";

const Home = () => {
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
    show: <AnimalDetail currentAnimal={currentAnimal} />,
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
        <h1>Animal Top Trumps</h1>
        <AnimalList
          animals={animals}
          onDelete={handleDelete}
          onEdit={handleEditButtonClick}
          onShow={handleShowClick}
        />
        <button onClick={handleAddButtonClick}>Add New</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            {renderModalContent()}
          </Modal>
        )}
      </main>
    </div>
  );
};

export default Home;
