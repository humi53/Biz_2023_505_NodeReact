import Button from "../../shareComps/Button";
export default {
  title: "Button",
  component: [Button],
};
export const SampleButton = () => <Button>Hello</Button>;
export const Sample2Button = () => <Button>나를 클릭하세요</Button>;
export const RedButton = () => <Button bgColor="red">빨간버튼</Button>;
export const GreenButton = () => (
  <Button bgColor="green" color="yellow">
    그린버튼
  </Button>
);
