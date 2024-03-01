import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ py: 2 }}>
      <Typography textAlign={"center"}>
        Designed and Developed By
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          Ahmed Samy
        </Button>
        2024
      </Typography>
    </Box>
  );
};

export default Footer;
