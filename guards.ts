// A Type Guard is a way to check the incoming parameter of a function. By doing that,
// we can verify what is the specific type of a parameter and which properties and methods it has.
// Type Guards are especially useful when the function's parameter takes more than one Type or
// it is assigned the Unknown Type.
type FileSource = {
  type: "file";
  path: string;
};
const fileSource: FileSource = {
  type: "file",
  path: "some/path/to/file.txt",
};

type DBSource = {
  type: "db";
  connectionUrl: string;
};
const dbSource: DBSource = {
  type: "db",
  connectionUrl: "some-connection-url",
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
  //now use the Type Guard to determine whether the function parameter type is FileSource or DBSource
  //   if ("path" in source) {
  // this means the source has a path parameter, which tells us the type is FileSource
  // source.path; -> available
  //     return;
  //   }
  // source.connectionUrl; -> this is available here because Typescript understands that because of the
  // if check above, the FileSource case is handled. And because of the return statement, there's no
  // other way for the code to be reached here if the type is not DBSource.

  // Instead of using a property that might change later, you can set a property on the root type that
  // has a determined value. Like I did on FileSource and DBSource with the property "type". Because
  // it is a literal type, it's not set to any string, it's set to a specific string.
  // So now we can Type Guard using that property instead of a property that can change later:
  if (source.type === "file") {
    source.path; // -> available
    return;
  }
  source.connectionUrl; // -> available after guard
}

// There is a similar feature you can use when dealing with classes instead of types and interfaces.
// That's the "instanceof" operator. With is used inside the type guards if statement to check
// from which class the functions parameter is instantiated from.

class SomeUser {
  constructor(public name: string) {}

  greet() {
    // someUser-only method
  }
}

class Admin {
  constructor(public name: string, public level: 1 | 2 | 3) {}

  deleteUser() {
    // admin-only method
  }
}

type CurrentUser = SomeUser | Admin;

function useUserMethods(currentUser: CurrentUser) {
  // now we apply the instanceof operator on the type guard
  if (currentUser instanceof Admin) {
    currentUser.deleteUser(); // admin-only method
    return;
  }
  currentUser.greet(); // someUser-only method
}
