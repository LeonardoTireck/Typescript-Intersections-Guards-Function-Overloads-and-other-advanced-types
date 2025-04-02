// A Type Guard is a way to check the incoming parameter of a function. By doing that,
// we can verify what is the specific type of a parameter and which properties and methods it has.
// Type Guards are especially useful when the function's parameter takes more than one Type or
// it is assigned the Unknown Type.
type FileSource = {
  path: string;
};
const fileSource: FileSource = {
  path: "some/path/to/file.txt",
};

type DBSource = {
  connectionUrl: string;
};
const dbSource: DBSource = {
  connectionUrl: "some-connection-url",
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
  //now use the Type Guard to determine whether the function parameter type is FileSource or DBSource
  if ("path" in source) {
    // this means the source has a path parameter, which tells us the type is FileSource
    // source.path; -> available
    return;
  }
  // source.connectionUrl; -> this is available here because Typescript understands that because of the
  // if check above, the FileSource case is handled. And because of the return statement, there's no
  // other way for the code to be reached here if the type is not DBSource.
}
