const isValid = data => !Object.values(data).some(val => val === "");

export default isValid;
