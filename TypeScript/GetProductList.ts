type StringOrUndefined = string | undefined;
type ValidStringKey = Exclude<string, "" | " ">;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function GetProductList<
  T extends (ValidStringKey | StringOrUndefined | number | null)[],
>(data: T): Promise<Record<ValidStringKey, string> | void> {
  // Check if the first element is not a string, null, undefined, or 0
  if (
    typeof data[0] !== "string" || data[0] === null || data[0] === undefined ||
    data[0] === "0"
  ) {
    return;
  }

  const result: Record<ValidStringKey, string> = {};

  // Iterate through the array in pairs
  for (let i = 0; i < data.length; i += 2) {
    const key = data[i];
    const nextElement = data[i + 1];

    // Simulate network delay
    await delay(1500);

    // Ensure key is a string and is not empty or whitespace
    if (typeof key !== "string" || key.trim() === "") {
      return;
    }

    // Process the value
    if (nextElement === undefined) {
      break;
    }

    let value: string;
    if (nextElement === null || nextElement === 0) {
      value = "NOT Defined";
    } else if (typeof nextElement === "string") {
      if (!nextElement.includes("$")) {
        value = "$" + nextElement;
      } else {
        value = nextElement;
      }
    } else {
      return;
    }

    result[key as ValidStringKey] = value;
  }

  return result;
}

// Sample data
const data = ["Banana", "$22", "Apples", "$10", "Cherries", "100"];
GetProductList(data).then((obj) => console.log(obj));
