import { useSelector } from "react-redux";

import { CalcTool } from "../components/CalcTool";

export const CalcToolContainer = () => {

  const result = useSelector(state => state.result);


  return <CalcTool result={result} />;

};