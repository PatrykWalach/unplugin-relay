import { Environment, Network, RecordSource, Store } from "relay-runtime";

let count = 0;

export const environment = new Environment({
  network: Network.create((_, variables) => {
    return {
      data:
        typeof variables.newCount === "number"
          ? {
              setCount: {
                id: "COUNT_ID",
                count: (count = variables.newCount),
              },
            }
          : {
              counter: { id: "COUNT_ID", count },
            },
    };
  }),
  store: new Store(new RecordSource()),
});
