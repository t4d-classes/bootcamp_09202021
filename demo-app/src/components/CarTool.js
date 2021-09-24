import { ToolHeader } from "./ToolHeader";
import { CarTableContainer } from "../containers/CarTableContainer";
import { CarFormContainer } from "../containers/CarFormContainer";
import { ToolFooter } from "./ToolFooter";

export const CarTool = () => {

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTableContainer />
      <CarFormContainer />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );
};

CarTool.defaultProps = {
};

CarTool.propTypes = {
};