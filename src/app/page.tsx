"use client";

// contract
// CD4POVPRLP4OJQGMKJ7HAOYCXZ3T3JB3ZHESIQUFB42XMR5BOVPEHRZ4

import { Contract, networks } from "hello-soroban-client";
export default function HomePage() {
  const doSomething = async () => {
    console.log("start...");
    const greeter = new Contract({
      ...networks.testnet,
      rpcUrl: "https://soroban-testnet.stellar.org", // from https://soroban.stellar.org/docs/reference/rpc#public-rpc-providers
    });
    const { result } = await greeter.hello({ to: "Soroban" });
    console.log("🚀 ~ doSomething ~ result:", result);

    console.log("...end");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Test
        </h1>
        <button
          onClick={() => doSomething()}
          className="rounded-md border bg-slate-700 px-2 py-1"
        >
          Do something
        </button>
      </div>
    </main>
  );
}
