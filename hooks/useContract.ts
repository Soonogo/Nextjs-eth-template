import { contractInstance, useEthersProvider, useEthersSigner } from "./ether"

export const useContract = () => {
    const signer = useEthersSigner()
    const signerContract = contractInstance(signer)
    const provider = useEthersProvider()

    return { signerContract, provider, signer }
}