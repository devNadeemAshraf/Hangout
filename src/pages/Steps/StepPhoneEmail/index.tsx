import { TStepProps } from "../types";

import CustomCard from "@/components/shared/CustomCard";

import { CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Phone from "./Phone";
import Email from "./Email";

const StepPhoneEmail = ({ handleStepChange }: TStepProps) => {
  return (
    <Tabs defaultValue="phone" className="w-full max-w-[400px] animate-fade-in">
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger value="phone">Phone</TabsTrigger>
        <TabsTrigger value="email">Email</TabsTrigger>
      </TabsList>
      <TabsContent value="phone">
        <CustomCard title="📞 Phone Number">
          <Phone handleStepChange={handleStepChange} />
          <CardFooter>
            <p className="w-full text-xs text-center font-thin">
              By Signing Up/In you are agreeing to our{" "}
              <span className="text-blue-700 dark:text-blue-200 font-medium">
                Terms and Conditions
              </span>
            </p>
          </CardFooter>
        </CustomCard>
      </TabsContent>
      <TabsContent value="email">
        <CustomCard title="📧 Email Address">
          <CardContent>
            <Email handleStepChange={handleStepChange} />
          </CardContent>
          <CardFooter>
            <p className="w-full text-xs text-center font-thin">
              By Signing Up/In you are agreeing to our{" "}
              <span className="text-blue-700 dark:text-blue-200 font-medium">
                Terms and Conditions
              </span>
            </p>
          </CardFooter>
        </CustomCard>
      </TabsContent>
    </Tabs>
  );
};

export default StepPhoneEmail;
