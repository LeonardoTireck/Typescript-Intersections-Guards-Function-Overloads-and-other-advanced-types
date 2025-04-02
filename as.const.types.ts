// Constant Types are a feature that lets you narrow down the options that a variable can have.
// Much like tuples, but instead:
let roles = ["admin", "guest", "editor"]; // without Constant Type -> roles: string[]

let roles2 = ["admin", "guest", "editor"] as const; // with Constant Type -> roles2: readonly ["admin", "guest", "editor"]
