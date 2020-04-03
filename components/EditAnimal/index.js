import { useState, useEffect } from "react";
import Select from "../../atoms/Select";
import TextInput from "../../atoms/TextInput";
import Label from "../../atoms/Label";
import animalTypes from "../../constants/animalTypes";
import animalDiets from "../../constants/animalDiets";
import isValid from "../../utils/isFormValid";
import { Form, SubmitButton } from "../../atoms/Form";

const EditAnimal = ({ onSubmit, currentAnimal }) => {
  const [animal, setAnimal] = useState(currentAnimal);

  useEffect(() => {
    setAnimal(currentAnimal);
  }, [currentAnimal]);

  const handleChange = e => {
    const { id, value } = e.target;
    setAnimal({ ...animal, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isValid(animal)) {
      onSubmit(animal);
    }
  };

  const { name, type, diet, isExtinct } = animal;
  return (
    <Form>
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
      <SubmitButton type="submit" onClick={handleSubmit}>
        Update animal
      </SubmitButton>
    </Form>
  );
};

export default EditAnimal;
