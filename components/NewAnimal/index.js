import { useState } from "react";
import Select from "../../atoms/Select";
import TextInput from "../../atoms/TextInput";
import Label from "../../atoms/Label";
import animalTypes from "../../constants/animalTypes";
import animalDiets from "../../constants/animalDiets";
import isValid from "../../utils/isFormValid";

const NewAnimal = ({ onSubmit }) => {
  const initialFormState = { name: "", type: "", diet: "", isExtinct: "" };
  const [animal, setAnimal] = useState(initialFormState);

  const handleChange = e => {
    const { id, value } = e.target;
    setAnimal({ ...animal, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isValid(animal)) {
      onSubmit(animal);
      setAnimal(initialFormState);
    }
  };

  const { name, type, diet, isExtinct } = animal;

  return (
    <form>
      <Label htmlFor="name" text="Name:" />
      <TextInput fieldId="name" value={name} onChange={handleChange} />

      <Label htmlFor="type" text="Type:" />
      <Select
        options={animalTypes}
        fieldId="type"
        value={type}
        onChange={handleChange}
      />

      <Label htmlFor="diet" text="Diet:" />
      <Select
        options={animalDiets}
        fieldId="diet"
        value={diet}
        onChange={handleChange}
      />

      <Label htmlFor="isExtinct" text="Is extinct:" />
      <Select
        options={["true", "false"]}
        fieldId="isExtinct"
        value={isExtinct}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Add animal
      </button>
    </form>
  );
};

export default NewAnimal;
