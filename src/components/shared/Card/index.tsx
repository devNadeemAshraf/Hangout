import { ReactNode } from "react";

import styles from "./Card.module.css";

type CardProps = {
  title?: string;
  titleEmoji?: string;
  children: ReactNode;
};

const Card = ({ title, titleEmoji, children }: CardProps) => {
  return (
    <div className={`${styles.cardWrapper}`}>
      <div className={`${styles.card}`}>
        <div className={`${styles.headingWrapper}`}>
          <span
            style={{
              fontSize: "24px",
            }}
          >
            {titleEmoji}
          </span>
          <h1>{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
