// Intersection Types are a feature that allows you to combine multiple Types into one
// This is very useful if one of the types will get used a lot to define another Type:
type FileData = {
  path: string;
  content: string;
};
type DatabaseData = {
  connectionUrl: string;
  credentials: string;
};
type StatusOfData = {
  isOpen: boolean;
  errorMessage?: string;
};
// Now we can combine multiple types and create an intersection on a Venn Diagram which will be
// the new type. And for that, we use the "&" operator
type AccessedFileData = FileData & StatusOfData;
type AccessedDatabaseData = DatabaseData & StatusOfData;

// The same can be done with interfaces, just need to tweak the syntax a little:
// interface FileData {
//     path: string;
//     content: string;
//   };
//  interface DatabaseData {
//     connectionUrl: string;
//     credentials: string;
//   };
//  interface StatusOfData {
//     isOpen: boolean;
//     errorMessage?: string;
//   };
// interface AccessedFileData extends FileData, StatusOfData {}
// interface AccessedDatabaseData extends DatabaseData, StatusOfData {}
