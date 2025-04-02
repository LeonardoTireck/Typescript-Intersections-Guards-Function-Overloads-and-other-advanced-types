// function overloads is a feature that lets you specify the return type of a function
// depending on the type of parameter it receives. This is useful when dealing with a
// function that accepts more than one type of parameter:
function getLength(val: any[]): number;
function getLength(val: string): string;
function getLength(val: string | any[]) {
  if (typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords}`;
  }
  return val.length;
}

// now you can use type specific functions on the function's output:
const numOfWords = getLength("does this work?");
console.log(numOfWords.charAt(0));

const numOfItems = getLength([1, 2, 3, 4]);
console.log(numOfItems.toString());
// that happens because typescript now understands the output type based on the parameter type
