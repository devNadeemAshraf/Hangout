export type TSteps = 1 | 2 ;
export type TActivationSteps = {
  1: ({ handleStepChange }: { handleStepChange: () => void }) => JSX.Element;
  2: ({ handleStepChange, handleStepChangeBack }: { handleStepChange: () => void, handleStepChangeBack: ()=> void }) => JSX.Element;
};
