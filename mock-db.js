"use strict";

const examples = [
  { id: 1, name: "Helios" },
  { id: 2, name: "Eos" },
  { id: 3, name: "Eris" },
];

async function getExampleById(exampleId) {
  return examples.find((example) => example.id === exampleId);
}

export { getExampleById };
