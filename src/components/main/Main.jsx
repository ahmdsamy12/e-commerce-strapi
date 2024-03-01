import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ProductsDetails from "./ProductsDetails";
import { useGetProductByNameQuery } from "../../redux/product";

const Main = () => {
  const [open, setOpen] = useState(false);
  const allProducts = "products?populate=*";
  const menProducts = "products?populate=*&filters[productCategory][$eq]=men";
  const womenProducts =
    "products?populate=*&filters[productCategory][$eq]=women";
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productsData, setProductsData] = useState(allProducts);

  const { data, error, isLoading } = useGetProductByNameQuery(productsData);

  if (isLoading) return "Loading";
  if (error) return alert(error.message);

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAlignment = (event, newAlignment) => {
    setProductsData(newAlignment);
  };

  return (
    <Container>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography variant="body1" fontWeight={300}>
            All Our New arrivals in a exulusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          value={productsData}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, 0.5) !important",
              color: "#e94560 !important",
              backgroundColor: "initial !important",
            },
          }}
        >
          <ToggleButton
            className="btn-filter"
            value={allProducts}
            aria-label="left aligned"
          >
            ALL PRODUCTS
          </ToggleButton>
          <ToggleButton
            className="btn-filter"
            value={menProducts}
            aria-label="centered"
          >
            MEN CATEGORY
          </ToggleButton>
          <ToggleButton
            className="btn-filter"
            value={womenProducts}
            aria-label="right aligned"
          >
            WOMEN CATEGORY
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        {data.data.map((product) => {
          const {
            productDescription,
            productImg,
            productPrice,
            productTitle,
            productRating,
          } = product.attributes;

          return (
            <Card
              key={productPrice}
              sx={{
                maxWidth: 345,
                mt: 6,
                ":hover .MuiCardMedia-root": {
                  scale: "1.1",
                  transition: ".3s",
                  rotate: "1deg",
                },
              }}
            >
              <CardMedia
                sx={{ height: 240 }}
                image={`${productImg.data[0].attributes.url}`}
                title="green iguana"
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography gutterBottom variant="h6" component={"div"}>
                    {productTitle}
                  </Typography>

                  <Typography variant="subtitle1" component={"p"}>
                    ${productPrice}
                  </Typography>
                </Stack>

                <Typography variant="body2" color={""}>
                  {productDescription}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                  onClick={() => handleClickOpen(product)}
                  size="large"
                  sx={{ textTransform: "capitalize" }}
                >
                  <AddShoppingCartOutlined fontSize="small" sx={{ mr: 1 }} />
                  add to cart
                </Button>
                <Rating
                  precision={0.5}
                  name="read-only"
                  value={productRating}
                  readOnly
                />
              </CardActions>
            </Card>
          );
        })}
      </Stack>

      <Dialog
        sx={{
          ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <IconButton
          onClick={handleClose}
          sx={{
            color: "#000",
            position: "absolute",
            right: 10,
            top: 10,
            ":hover": { rotate: "180deg", transition: "0.3s", color: "red" },
          }}
        >
          <Close />
        </IconButton>

        {selectedProduct && <ProductsDetails product={selectedProduct} />}
      </Dialog>
    </Container>
  );
};

export default Main;
