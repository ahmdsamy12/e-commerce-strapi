import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Close,
  ElectricBikeOutlined,
  ExpandMore,
  KeyboardArrowRightOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
  Window,
} from "@mui/icons-material";
import Links from "./Links";

const Header3 = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            bgcolor: theme.palette.bgSearchList.main,
            color: theme.palette.text.primary,
          }}
        >
          <Window />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Categories
          </Typography>

          <Box flexGrow={1} />
          <KeyboardArrowRightOutlined />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 222,
              bgcolor: theme.palette.bgSearchList.main,
            },
          }}
        >
          <MenuItem onClick={handleClose} sx={{ width: "100%" }}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose} sx={{ width: "100%" }}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose} sx={{ width: "100%" }}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose} sx={{ width: "100%" }}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1200px)") && (
        <>
          <Links title="Home" />
          <Links title="Mega Menu" />
          <Links title="Full Screen Menu" />
          <Links title="Pages" />
          <Links title="User Account" />
          <Links title="Vendor Account" />
        </>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-elevation16": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            width: 444,
            mx: "auto",
            mt: 6,
            position: "relative",
            pt: 10,
          }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              ":hover": { rotate: "180deg", transition: "0.3s", color: "red" },
            }}
          >
            <Close />
          </IconButton>
          {[
            { mainLink: "Home1", subLink: ["Link 1", "Link 2", "Link 3"] },
            { mainLink: "Mega Menu", subLink: ["Link 1", "Link 2", "Link 3"] },
            {
              mainLink: "Full Screen Menu",
              subLink: ["Link 1", "Link 2", "Link 3"],
            },
            { mainLink: "Pages", subLink: ["Link 1", "Link 2", "Link 3"] },
            {
              mainLink: "user account",
              subLink: ["Link 1", "Link 2", "Link 3"],
            },
            {
              mainLink: "Vendor account",
              subLink: ["Link 1", "Link 2", "Link 3"],
            },
          ].map((item) => (
            <Accordion
              key={item.mainLink}
              elevation={0}
              sx={{ bgcolor: "initial" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {item.mainLink}
              </AccordionSummary>

              <List sx={{ p: 0, m: 0 }}>
                {item.subLink.map((link, i) => (
                  <ListItem sx={{ p: 0, m: 0 }} key={i}>
                    <ListItemButton>
                      <ListItemText primary={link} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Accordion>
          ))}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
