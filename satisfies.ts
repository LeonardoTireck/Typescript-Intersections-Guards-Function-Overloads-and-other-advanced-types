// The satisfies operator is used to tell typescript to infer the type while being as strict as possible.
// It first checks the type you assign after the "satisfies" operator agains the actual data,
// then it goes and assigns the type to the variable:

const dataEntries: Record<string, number> = {
  entry1: 0.5,
  entry2: 2.2,
  // ...
};
// because the Record type acts as an index type, we can set new properties to the dataEntries object
// on-the-fly:
dataEntries.entry3 = 4;
// the keys and values just have to follow the types you assigned in the definition...

// Now using the "satisfies" operator, we'll see that typescript doesn't allow that to happen,
// instead, it generates the narrowest type based on the type you assign after the "satisfies" operator:

const dataEntries2 = {
  entry1: 0.5,
  entry2: 2.2,
} satisfies Record<string, number>;
// the type becomes: entry1: number; entry2: number;
// instead of: Record<string, number> which is way broader
dataEntries2.entry1;
dataEntries2.entry2;
// dataEntries2.entry3 = 2; Property 'entry3' does not exist on type '{ entry1: number; entry2: number; }
