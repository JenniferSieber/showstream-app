import * as React from 'react';
import directIcon from "@/assets/icons/direct.svg";
import cinema from "@/assets/cinema-sm.jpg";
import { Box, Typography, Button } from "@mui/material"
import { useNavigate } from 'react-router-dom';

interface IErrorProps {}

const Error: React.FunctionComponent<IErrorProps> = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log('navgate back to login on error page');
    navigate("/");
  }
  return (
    <Box
      sx={{
        backgroundImage: `url(${cinema})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        color: "#FFF",
      }}
    >
      <Box
        p={1}
        mt={27}
        sx={{
          // background: "rgba(0,0,0,0.25)",
          background: "rgba(0,0,0,0.75)",
          height: "10rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "8px"

        }}
      >
        <Typography variant="h2" mb={1} fontSize="2rem" mt={3}>
          Something went wrong...
         
        </Typography>
        <Button
          type="button"
          onClick={handleClick}
        >
          <img
              src={directIcon}
              alt="loginIcon"
              width={50}
              height={50}
              color="#FFF"
            />
          </Button>
      </Box>
    </Box>
  );
};

export default Error;