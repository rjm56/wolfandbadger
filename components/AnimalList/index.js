const AnimalList = ({ animals, onDelete, onEdit, onShow }) => {
  return animals.map(animal => {
    const { id, name } = animal;
    return (
      <div key={id}>
        <p onClick={() => onShow(animal)}>{name}</p>
        <button onClick={() => onEdit(animal)}>Edit</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    );
  });
};

export default AnimalList;
