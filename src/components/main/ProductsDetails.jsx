/* eslint-disable react/prop-types */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const ProductsDetails = ({ product }) => {
  const { productDescription, productCategory, productImg, productPrice } =
    product.attributes;

  const [imageSrc, setImageSrc] = useState(
    `${productImg.data[0].attributes.url}`
  );

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#fff",
        color: "#000",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img width={300} src={imageSrc} alt="product" />
      </Box>
      <Box sx={{ textAlign: { xs: "center", px: 1, md: "left" } }}>
        <Typography variant="h5">
          {productCategory.toUpperCase()}&apos;S FASHION
        </Typography>

        <Typography my={0.4} fontSize={"22px"} color={"crimson"}>
          ${productPrice}
        </Typography>

        <Typography variant="body1">{productDescription}</Typography>
        <Stack
          direction={"row"}
          gap={1}
          my={2}
          sx={{ justifyContent: { xs: "center", md: "start" } }}
        >
          {productImg.data.map((img, i) => {
            return (
              <img
                src={`${img.attributes.url}`}
                alt="img"
                key={i}
                className="image-cur"
                height={100}
                width={98}
                onClick={() => setImageSrc(`${img.attributes.url}`)}
              />
            );
          })}
        </Stack>

        <Button variant="contained" sx={{ textTransform: "capitalize", my: 1 }}>
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductsDetails;
