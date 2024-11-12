function printXmasTree(layers: number): void {
  if (layers <= 0) {
    console.log("Number of layers should be greater than 0");
    return;
  }

  const scaleFactor = 5;
  const scaledLayers = layers * scaleFactor;

  for (let i = 0; i < scaledLayers; i++) {
    // Print each layer of the tree
    printLayer(i, scaledLayers);
  }
  // Print the trunk of the tree
  printTrunk(scaledLayers);
}

function printLayer(layer: number, totalLayers: number): void {
  const maxWidth = totalLayers * 2 - 1;
  const stars = 2 * layer + 1;
  const spaces = (maxWidth - stars) / 2;

  const layerStr = " ".repeat(spaces) + "*".repeat(stars);
  console.log(layerStr);
}

function printTrunk(layers: number): void {
  const maxWidth = layers * 2 - 1;
  const trunkWidth = Math.max(1, Math.floor(layers / 3));
  const trunkHeight = Math.floor(layers / 5);
  const spaces = (maxWidth - trunkWidth) / 2;

  const trunkStr = " ".repeat(spaces) + "*".repeat(trunkWidth);

  for (let i = 0; i < trunkHeight; i++) {
    console.log(trunkStr);
  }
}

// Example usage:
const layers: any = 5;
printXmasTree(layers);
