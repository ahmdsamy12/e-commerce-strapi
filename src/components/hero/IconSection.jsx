import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

const IconSection = () => {
  return (
    <Container sx={{ my: 4 }}>
      <Stack
        bgcolor={"#000"}
        direction="row"
        flexWrap={"wrap"}
        alignItems="center"
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
      >
        <BoxSection
          icon={<ElectricBolt fontSize="large" />}
          title="Fast Delivery"
          subTitle="Start from $10"
        />
        <BoxSection
          icon={<WorkspacePremiumOutlined fontSize="large" />}
          title="Money Guarantee"
          subTitle="7 Days Back"
        />
        <BoxSection
          icon={<AccessAlarmOutlined fontSize="large" />}
          title="305 Days"
          subTitle="for free return"
        />
        <BoxSection
          icon={<CreditScoreOutlined fontSize="large" />}
          title="Payment"
          subTitle={"scure system"}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

// eslint-disable-next-line react/prop-types
const BoxSection = ({ icon, title, subTitle }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
        alignItems: "center",
        gap: 6,
        py: 3,
        color: "#fff",
        flexGrow: 1,
        width: useMediaQuery("(min-width:600px)") ? "auto" : "100%",
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1" color={"#fff"}>
          {title}
        </Typography>
        <Typography sx={{ fontWeight: 300, color: "#fff" }} variant="body1">
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
