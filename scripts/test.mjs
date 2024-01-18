import { Contract, networks } from "hello-soroban-client";

const greeter = new Contract({
  ...networks.testnet,
  rpcUrl: "https://soroban-testnet.stellar.org", // from https://soroban.stellar.org/docs/reference/rpc#public-rpc-providers
});

const { result } = await greeter.hello({ to: "Soroban" });
console.log("🚀 ~ doSomething ~ result:", result);
