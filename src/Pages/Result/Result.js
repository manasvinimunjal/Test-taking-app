import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css"

const Result = ({name, score}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!name) {
      navigate("/");
    }
  }, [name, navigate]);

    return (
        <div className="result">
          <span className="title">Final Score : {score}</span>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{alignSelf: "center", marginTop: 20}}
            href="/">
              Go To Home Page

          </Button>
        </div>
    );
}

export default Result;