import styles from "./Dashboard.modules.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TicksPriceWs } from "./TicksPriceWs";
import linegraph from "../asset/images/linegraph.png";
import walleticon from "../asset/images/Wallet.svg";
import TableData from "../Charts/TableData";
import { Header } from "components/Header";
import { AssestAnalysis } from "./AssestAnalysis";

const options = [
  { value: "realtime", label: "Real-Time" },
  { value: "5min", label: "5 Minutes" },
  { value: "10min", label: "10 Minutes" },
  { value: "15min", label: "15 Minutes" },
  { value: "30min", label: "30 Minutes" },
  { value: "1hr", label: "1 Hour" },
  { value: "2hr", label: "2 Hours" },
  { value: "3hr", label: "3 Hours" },
  { value: "4hr", label: "4 Hours" },
  { value: "1day", label: "1 Day" },
];

export const DashBoard = () => {
  const [balance, setBalance] = useState();

  async function getBalance() {
    try {
      const response = await fetch(
        "http://157.245.57.54:5000/display/balance",
        {
          method: "GET",
          headers: { token: localStorage.token },
        }
      );

      const parseRes = await response.json();
      setBalance(parseRes[0].balance);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    const unsubscribe = getBalance(); //subscribe
    return unsubscribe; //unsubscribe
  }, []);

  return (
    <>
      <Header title={"DASHBOARD"} />
      <div className="m-10 ">
        <div className="flex w-full gap-x-10">
          <div className="flex flex-col w-full gap-y-10">
            <div className="bg-[#075F93] rounded-xl h-full">
              <div className="flex justify-around w-full h-full py-6 align-middle ">
                <TicksPriceWs asset={"frxXAUUSD"} />
                <TicksPriceWs asset={"frxXAGUSD"} />
                <TicksPriceWs asset={"frxXPTUSD"} />
                <TicksPriceWs asset={"frxXPDUSD"} />
              </div>
            </div>
          </div>
          <div className="h-80 bg-[#075F93] w-96 p-4 rounded-xl">
            <div className="flex flex-col justify-center h-full text-2xl text-center text-white testt">
              <p>Current Balance</p>
              <img
                src={walleticon}
                className="w-auto my-6 h-36"
                draggable="false"
                dragstart="false;"
              />
              <p>${balance}</p>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full mt-10 gap-x-10">
          <div className="flex flex-col w-full gap-y-10">
            <div className="bg-[#075F93] rounded-xl h-full"></div>
          </div>
          <AssestAnalysis />
        </div>
      </div>
    </>
  );
};
