import { shallow, mount } from "enzyme";
import data from "../mocks/data";
import { act } from "react-dom/test-utils";
import App, { Header } from "./index";
import { Card, Action } from "../components/AnimalList/styles";
import AnimalList from "../components/AnimalList";
import Modal from "../components/Modal";
import AnimalDetail from "../components/AnimalDetail";
import { Close } from "../components/Modal/styles";
import EditAnimal from "../components/EditAnimal";
import TextInput from "../atoms/TextInput";
import Select from "../atoms/Select";
import { SubmitButton } from "../atoms/Form";
import Button from "../atoms/Button";
import NewAnimal from "../components/NewAnimal";

describe("Animal top trumps", () => {
  let component;
  let firstCard;

  beforeEach(() => {
    component = mount(<App />);
    firstCard = component.find(Card).at(0);
  });

  describe("Initial load", () => {
    it("should render the title", () => {
      expect(component.find(Header)).toExist;
    });

    it("should render the animal list", () => {
      expect(component.find(AnimalList)).toExist;
    });

    it("should display a card for each animal", () => {
      expect(component.find(Card)).toExist();
      expect(component.find(Card).length).toEqual(data.length);
    });

    describe("Animal card", () => {
      it("should display the animal name on the card", () => {
        expect(firstCard.text()).toContain(data[0].name);
      });

      it("should include edit and delete buttons on firstCard", () => {
        expect(firstCard.find(Action)).toExist();
        expect(firstCard.find(Action).at(0).text()).toContain("Edit");
        expect(firstCard.find(Action).at(1).text()).toContain("Delete");
      });
    });

    it("should show the Add New Animal button", () => {
      expect(component.find(Button)).toExist();
      expect(component.find(Button).text()).toContain("Add a new animal");
    });
  });

  describe("Viewing a specific animal card", () => {
    let modal;
    beforeEach(() => {
      component.find(Card).at(0).simulate("click");
      modal = component.find(Modal);
    });

    it("should open the modal on click of a card", () => {
      expect(modal).toExist();
    });

    it("should show more details about the selected animal", () => {
      const animalDetail = component.find(AnimalDetail);

      expect(animalDetail).toExist();
      expect(animalDetail.text()).toContain(data[0].name);
      expect(animalDetail.text()).toContain(data[0].type);
      expect(animalDetail.text()).toContain(data[0].diet);
    });
  });

  describe("Deleting an animal card", () => {
    it("should remove the selected animal card from the list on click of the delete button", () => {
      firstCard.find(Action).at(1).simulate("click");
      expect(component.find(Card).length).toEqual(data.length - 1);
      expect(component.text()).not.toContain(data[0].name);
    });
  });

  describe("Editing an animal card", () => {
    let editAnimalForm;
    beforeEach(() => {
      firstCard.find(Action).at(0).simulate("click");
      editAnimalForm = component.find(EditAnimal);
    });

    it("should open the modal on click of the edit button", () => {
      expect(component.find(Modal)).toExist();
    });

    it("should show the EditAnimal form as the modal content", () => {
      expect(editAnimalForm).toExist();
    });

    it("should show the current details for the selected animal", () => {
      expect(editAnimalForm.find(TextInput).prop("value")).toEqual(
        data[0].name
      );

      expect(editAnimalForm.find(Select).at(0).prop("value")).toEqual(
        data[0].type
      );
    });

    it("should update the name field on change of the text", () => {
      const event = { target: { id: "name", value: "hello" } };
      editAnimalForm.find(TextInput).simulate("change", event);

      const updatedForm = component.find(EditAnimal);
      expect(updatedForm.find(TextInput).prop("value")).toEqual("hello");
    });

    it("should update the animal card with any changed data on submit of the edit animal form", () => {
      const event = { target: { id: "name", value: "hello" } };
      editAnimalForm.find(TextInput).simulate("change", event);

      component.find(SubmitButton).simulate("click");
      const updatedCard = component.find(Card).at(0);

      expect(updatedCard.text()).toContain("hello");
    });

    it("should close the modal on submit of the edit animal form", () => {
      component.find(SubmitButton).simulate("click");
      expect(component.find(Modal)).not.toExist();
    });
  });

  describe("Adding a new animal", () => {
    const nameEvent = { target: { id: "name", value: "new animal" } };
    const events = [
      { target: { id: "type", value: "mammal" } },
      { target: { id: "diet", value: "herbivore" } },
      { target: { id: "isExtinct", value: "not extinct" } }
    ];

    let newAnimalForm;
    beforeEach(() => {
      component.find(Button).simulate("click");
      newAnimalForm = component.find(NewAnimal);
    });

    it("should open the modal on click of the add new button", () => {
      expect(component.find(Modal)).toExist();
    });

    it("should show the NewAnimal form as the modal content", () => {
      expect(newAnimalForm).toExist();
    });

    it("should not include any pre-populated animal data", () => {
      expect(newAnimalForm.find(TextInput).prop("value")).toEqual("");
      expect(newAnimalForm.find(Select).at(0).prop("value")).toEqual("");
    });

    it(`should update the values on change of the fields`, () => {
      const selectFields = component.find(Select);
      newAnimalForm.find(TextInput).simulate("change", nameEvent);

      selectFields.forEach((field, index) => {
        const event = events[index];

        field.simulate("change", event);
        expect(component.find(Select).at(index).prop("value")).toEqual(
          event.target.value
        );
      });
    });

    describe("When not all data has been entered", () => {
      it("should not close the modal on click of the submit button", () => {
        const selectFields = component.find(Select);

        selectFields.forEach((field, index) => {
          const event = events[index];
          field.simulate("change", event);
        });

        newAnimalForm.find(SubmitButton).simulate("click");
        expect(component.find(Modal)).toExist();
      });
    });

    describe("When all data has been entered", () => {
      it("should add the new animal to the animal list and close the modal on submit of the new animal form", () => {
        newAnimalForm.find(TextInput).simulate("change", nameEvent);
        const selectFields = component.find(Select);

        selectFields.forEach((field, index) => {
          const event = events[index];
          field.simulate("change", event);
        });

        newAnimalForm.find(SubmitButton).simulate("click");
        expect(component.find(Card).length).toEqual(data.length + 1);
        expect(component.text()).toContain("new animal");

        expect(component.find(Modal)).not.toExist();
      });
    });
  });
});
