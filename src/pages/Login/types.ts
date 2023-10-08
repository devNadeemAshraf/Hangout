export type TSteps = 1 | 2;
export type TLoginSteps = {
  1: ({ handleStepChange }: { handleStepChange: () => void }) => JSX.Element;
  2: ({ handleStepChange }: { handleStepChange: () => void }) => JSX.Element;
};
export type TLoginStepProps = {
  handleStepChange: () => void;
};
