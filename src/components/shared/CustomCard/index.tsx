import { ReactNode } from "react";
import clsx from "clsx";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = {
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

const CustomCard = ({ title, description, className, children }: CardProps) => {
  return (
    <Card className={clsx("max-w-[400px] w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {children}
    </Card>
  );
};

export default CustomCard;
