import styles from "./Home.module.css";

import { MoveRight } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";

const Home = () => {
  const navigate = useNavigate();

  /**
   * Handle Registeration
   */
  const registerUser = () => {
    navigate("/register");
  };

  return (
    <main className="mainWrapper">
      <Card title="Hangout Welcomes You!" titleEmoji={"😎"}>
        <p>
          Chill out with your friends and family without worrying about being
          spyed be someone 👀
        </p>
        <Button
          handleOnClick={registerUser}
          buttonText="Create an account"
          buttonIcon={<MoveRight />}
        />
        <div className={`${styles.signInWrapper}`}>
          <span>Already have an account?</span>{" "}
          <Link
            to="/login"
            style={{
              fontWeight: "bold",
            }}
          >
            Sign In
          </Link>
        </div>
      </Card>
    </main>
  );
};

export default Home;
