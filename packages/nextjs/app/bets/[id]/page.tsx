"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import request, { gql } from "graphql-request";
import { formatEther } from "viem";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export default function Page({ params }: { params: { id: string } }) {
  const [options, setOptions] = useState<string[]>();
  const { writeContractAsync } = useScaffoldWriteContract("StakeChain");

  const query = gql`
    {
      betEventCreateds(where: {betEventId: ${params.id}}) {
        id
        betEventId
        title
        options
      }
      betPlaceds(where: {betEventId: ${params.id}}){
        id
        betEventId
        player
        amount
        outcome
      }
        betSettleds(where: {betEventId: ${params.id}}) {
            id
            betEventId,
            outcome
         }
           shareClaimeds(where: {betEventId: ${params.id}}){
            id
            betEventId
            transactionHash
  }
    }
  `;
  const url = "https://api.studio.thegraph.com/query/87621/stakechain/version/latest";

  const { data, error, isLoading } = useQuery({
    queryKey: ["betsPlaceds"],
    async queryFn() {
      return (await request(url, query)) as {
        betEventCreateds: {
          id: string;
          betEventId: string;
          title: string;
          options: string[];
        }[];
        betPlaceds: {
          id: string;
          betEventId: string;
          player: string;
          amount: string;
          outcome: string;
        }[];
        betSettleds?: {
          id: string;
          betEventId: string;
          outcome: string;
        }[];
        shareClaimeds?: {
          id: string;
          betEventId: string;
          transactionHash: string;
        }[];
      };
    },
  });

  const handleSettle = async () => {
    try {
      await writeContractAsync({
        functionName: "settleBets",
        args: [BigInt(params.id)],
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (data && data.betEventCreateds.length > 0 && data.betEventCreateds[0].options !== options) {
      setOptions(data.betEventCreateds[0].options);
    }
  }, [data, options]);

  return (
    <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
      <h1 className="text-6xl font-bold">{data?.betEventCreateds[0].title}</h1>
      {data && data.betSettleds && data.betSettleds.length > 0 && options && (
        <div className="flex my-6 gap-x-4 items-center">
          {data.shareClaimeds && data.shareClaimeds.length > 0 && (
            <Link
              className="btn btn-success"
              href={`https://sepolia.etherscan.io/tx/${data.shareClaimeds[0].transactionHash}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Claimed
            </Link>
          )}
          <button className="btn" onClick={handleSettle}>
            Settle
          </button>
          <button className="btn">Final Outcome: {options[parseInt(data.betSettleds[0].outcome) - 1]}</button>
        </div>
      )}
      {isLoading ? (
        <div className="w-full flex justify-center items-center h-screen">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : error ? (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Failed to load bets..</span>
        </div>
      ) : data && data.betPlaceds.length > 0 ? (
        <ul className="space-y-4">
          {data.betPlaceds.map(bet => (
            <li key={bet.id} className="gap-y-4 bg-green-700 text-black p-4">
              <p className="font-medium text-lg">Player: {bet.player}</p>
              <p className="font-medium text-lg">Amount: {formatEther(BigInt(bet.amount))}</p>
              <p className="font-medium text-lg">
                Outcome: {options && options.length > 0 && options[parseInt(bet.outcome) - 1]}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <h4 className="text-center text-5xl font-bold">No bets</h4>
      )}
    </div>
  );
}
