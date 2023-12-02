const valueFile = Bun.file("./values.txt");

const values = await valueFile.text();
const words = values.split("\n");

console.log(words);
