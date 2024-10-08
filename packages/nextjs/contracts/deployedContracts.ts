/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  11155111: {
    StakeChain: {
      address: "0x0b198c1956D18E8b44ee6aE18fbC28ac60ED11E7",
      abi: [
        {
          inputs: [],
          name: "StakeChain__BetAlreadyPlaced",
          type: "error",
        },
        {
          inputs: [],
          name: "StakeChain__BetAmountZero",
          type: "error",
        },
        {
          inputs: [],
          name: "StakeChain__BetNotOpen",
          type: "error",
        },
        {
          inputs: [],
          name: "StakeChain__BetStillOpen",
          type: "error",
        },
        {
          inputs: [],
          name: "StakeChain__BetsAlreadySettled",
          type: "error",
        },
        {
          inputs: [],
          name: "StakeChain__InvalidOutcome",
          type: "error",
        },
        {
          inputs: [],
          name: "StakeChain__OnlyOwner",
          type: "error",
        },
        {
          inputs: [],
          name: "StakeChain__Unauthorized",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "betEventId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "title",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string[]",
              name: "options",
              type: "string[]",
            },
          ],
          name: "BetEventCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "betEventId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "player",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "outcome",
              type: "uint256",
            },
          ],
          name: "BetPlaced",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "betEventId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "outcome",
              type: "uint256",
            },
          ],
          name: "BetSettled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "betEventId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "player",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "ShareClaimed",
          type: "event",
        },
        {
          inputs: [],
          name: "OWNER",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "PERCENTAGE",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "PLATFORM_FEE",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "PLATFORM_WALLET",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SETTLE_REWARD",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SUSTAINABILITY_FEE",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SUSTAINABILITY_FEE_COLLECTOR",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
          ],
          name: "UpdatePlatformFee",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
          ],
          name: "UpdateSustainabilityFee",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newCollector",
              type: "address",
            },
          ],
          name: "UpdateSustainabilityFeeCollector",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "betEventCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "betEvents",
          outputs: [
            {
              internalType: "string",
              name: "title",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "totalPool",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "outcome",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "betOpen",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "betSettled",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_betEventId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_outcome",
              type: "uint256",
            },
          ],
          name: "closeBetting",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_title",
              type: "string",
            },
            {
              internalType: "string",
              name: "_description",
              type: "string",
            },
            {
              internalType: "string[]",
              name: "_options",
              type: "string[]",
            },
          ],
          name: "createBetEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_betEventId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_outcome",
              type: "uint256",
            },
          ],
          name: "placeBet",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_betEventId",
              type: "uint256",
            },
          ],
          name: "settleBets",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        OWNER: "contracts/StakeChain_States.sol",
        PERCENTAGE: "contracts/StakeChain_States.sol",
        PLATFORM_FEE: "contracts/StakeChain_States.sol",
        PLATFORM_WALLET: "contracts/StakeChain_States.sol",
        SETTLE_REWARD: "contracts/StakeChain_States.sol",
        SUSTAINABILITY_FEE: "contracts/StakeChain_States.sol",
        SUSTAINABILITY_FEE_COLLECTOR: "contracts/StakeChain_States.sol",
        UpdatePlatformFee: "contracts/StakeChain_States.sol",
        UpdateSustainabilityFee: "contracts/StakeChain_States.sol",
        UpdateSustainabilityFeeCollector: "contracts/StakeChain_States.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
