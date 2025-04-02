// Index Type is a feature that allows you to set an undefined number of properties to an object,
// you just need to set the type of the key (string or symbol) and the type of the value they will have:
type DataStore = {
  [prop: string]: number | boolean;
};

let store: DataStore = {};

// ...

store.id = 5;
store.isOpen = false;

// You can only set this properties at the same time you're creating them because of the Index Type
// we set back in the type definition.

interface DBStore {
  [prop: string]: string;
}

let dbStore: DBStore = {};
dbStore.hey = "oi";

class PenDrive implements DBStore {
  [prop: string]: string;
  public version: string = "v1";
}

let penDrive = new PenDrive();

penDrive.mode = "stick";
penDrive.version;
