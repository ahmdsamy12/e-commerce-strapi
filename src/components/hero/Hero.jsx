import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import img1 from "../../../public/images/banner-17.jpg";
import img2 from "../../../public/images/banner-16.jpg";
import { ArrowRightAltOutlined } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./hero.css";

const mySlider = [
  { text: "MEN", link: "public/images/banner-15.jpg" },
  { text: "WOMEN", link: "public/images/banner-25.jpg" },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Container sx={{ pt: 3, mt: 2.5, display: "flex", gap: 2 }}>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {mySlider.map((slide) => (
          <SwiperSlide key={slide.text}>
            <img className="slide-img" src={slide.link} alt="slider" />
            <Box
              sx={{
                [theme.breakpoints.up("sm")]: {
                  position: "absolute",
                  left: "10%",
                  textAlign: "left",
                },

                [theme.breakpoints.down("sm")]: {
                  py: 4,
                },
              }}
            >
              <Typography variant="h5" sx={{ color: "#222" }}>
                LIFESTYLE COLLECTION
              </Typography>

              <Typography
                variant="h3"
                sx={{ color: "#222", fontWeight: 400, my: 1 }}
              >
                {slide.text}
              </Typography>

              <Stack direction="row" alignItems="center" gap="5px">
                <Typography
                  variant="body1"
                  fontWeight={600}
                  sx={{ color: "#222" }}
                >
                  SALE UP TO
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={{ color: "red" }}
                >
                  30% OFF
                </Typography>
              </Stack>

              <Typography
                variant="body1"
                sx={{ color: "#999", fontWeight: 300, my: 1 }}
              >
                Get Free Shipping on orders over $99.00
              </Typography>

              <Button
                sx={{
                  px: 3,
                  py: 1,
                  mt: 2,
                  backgroundColor: "#222",
                  boxShadow: "8px 4px 16px rgba(43, 52, 69, 0, 1)",
                  color: "#fff",
                  borderRadius: "1px",
                  "&:hover": {
                    bgcolor: "#151515",
                    boxShadow: "8px 4px 16px rgba(43, 52, 69, 0, 1)",
                  },
                }}
                variant="contained"
              >
                SHOP NOW
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Box sx={{ position: "relative", height: "49%", mb: "2%" }}>
          <img src={img1} alt="image" width="100%" height="100%" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              ml: "30px",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#183445", fontSize: "18px" }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#203445", lineHeight: "18px", mt: 1 }}
            >
              SUMMER
            </Typography>

            <Typography variant="h6" sx={{ color: "#283445" }}>
              SALE 20% OFF
            </Typography>

            <Link
              sx={{
                color: "#283445",
                display: "flex",
                alignItems: "center",
                mt: 1,
                gap: "5px",
                transition: "0.2s",
                "&:hover": { color: "#D23f57" },
              }}
              href="#"
              underline="none"
            >
              Shop Now
              <ArrowRightAltOutlined sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
        <Box sx={{ position: "relative", height: "49%" }}>
          <img src={img2} alt="image" width="100%" height="100%" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              ml: "30px",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#183445", fontSize: "18px" }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#203445", lineHeight: "18px", mt: 1 }}
            >
              SUMMER
            </Typography>

            <Typography variant="h6" sx={{ color: "#283445" }}>
              SALE 20% OFF
            </Typography>

            <Link
              sx={{
                color: "#283445",
                display: "flex",
                alignItems: "center",
                mt: 1,
                gap: "5px",
                transition: "0.2s",
                "&:hover": { color: "#D23f57" },
              }}
              href="#"
              underline="none"
            >
              Shop Now
              <ArrowRightAltOutlined sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
