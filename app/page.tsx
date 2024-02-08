'use client'
import { useContract } from "@/hooks/useContract";
import { Button } from "@nextui-org/react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const { provider, signerContract, signer } = useContract();
  const GetBlockNumber = () => {
    toast.success(provider.blockNumber.toString())
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConnectButton />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <h1 className="text-5xl font-bold text-pink-500">Next.js & Rainbowkit & Ethers.js</h1>

      <Button onClick={GetBlockNumber}>GetBlockNumber</Button>
      <div></div>

    </main>
  );
}
