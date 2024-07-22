import styled from "@emotion/styled";
import Button from "../Button/Button";

const PickerButton = styled(Button)`
  height: 24px;
  padding: 0 8px;
  /* border-radius: 6px; */
`;
PickerButton.defaultProps = {
  colorScheme: "primary"
};

export default PickerButton;
