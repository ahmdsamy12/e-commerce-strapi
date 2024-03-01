import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const Links = ({ title }) => {
  return (
    <Box
      sx={{
        ":hover .show-hover": { display: "block" },
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        position: "relative",
        zIndex: 99,
      }}
    >
      <Typography variant="body1">{title}</Typography>

      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

      <Box
        className="show-hover"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "none",
        }}
      >
        <Paper
          sx={{
            mt: 0.4,
          }}
        >
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{
                  ":hover .show-hover-child": { display: "block" },
                  position: "relative",
                }}
              >
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Products" />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined fontSize="small" />

                  <Box
                    className="show-hover-child"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: "100%",
                      display: "none",
                    }}
                  >
                    <Paper sx={{ ml: 0.5, width: "80px" }}>
                      <nav aria-label="secondary mailbox folders">
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemText primary="Add Product" />
                            </ListItemButton>
                          </ListItem>

                          <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                              <ListItemText primary="Edit Product" />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Paper>
                  </Box>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Orders" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
