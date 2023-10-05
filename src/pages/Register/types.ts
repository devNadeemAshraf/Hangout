export type TSteps = 1 | 2 | 3 | 4 | 5;
export type TRegisterationSteps = {
  1: ({ handleStepChange }: { handleStepChange: () => void }) => JSX.Element;
  2: ({ handleStepChange }: { handleStepChange: () => void }) => JSX.Element;
  3: ({ handleStepChange }: { handleStepChange: () => void }) => JSX.Element;
  4: ({ handleStepChange }: { handleStepChange: () => void }) => JSX.Element;
  5: ({ handleStepChange }: { handleStepChange: () => void }) => JSX.Element;
};
export type TRegisterStepProps = {
  handleStepChange: () => void;
};
