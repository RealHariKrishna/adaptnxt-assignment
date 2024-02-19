import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Chip from "@mui/material/Chip";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TabComponent from "./TabComponent";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Avatar from "@mui/material/Avatar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import translate from "../images/translate.svg";
import dashboard from "../images/dashboard.svg";
import inventory from "../images/inventory.png";

const drawerWidth = 240;

export default function Navbar() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [selectedElement, setSelectedElement] = useState("Orders");

  const handleListItemClick = (e, i) => {
    setSelectedIndex(i);
    setSelectedElement(e.target.innerText);
  };

  return (
    <Box className="flex">
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          color: "black",
          backgroundColor: "white",
        }}
      >
        <Toolbar className="flex justify-between">
          <Box
            sx={{ width: drawerWidth, display: "flex", justifyContent: "end" }}
          >
            <MenuOpenIcon />
          </Box>
          <Box className="flex justify-between space-x-4">
            <DarkModeOutlinedIcon />
            <NotificationsNoneOutlinedIcon />
            <img src={translate} alt="translate" height="24px" width="24px" />
            <Avatar sx={{ width: 24, height: 24 }} />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Dashboard", "Inventory", "Orders", "Shipping", "Channel"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    selected={selectedIndex === index}
                    onClick={(event) => handleListItemClick(event, index)}
                    sx={{
                      backgroundColor: selectedIndex === index ? "blue" : "",
                    }}
                  >
                    <ListItemIcon>
                      {index === 0 ? (
                        <img
                          src={dashboard}
                          height="24px"
                          width="24px"
                          alt="dashboard"
                        />
                      ) : index === 1 ? (
                        <img
                          src={inventory}
                          alt="inventory"
                          height="24px"
                          width="24px"
                        />
                      ) : index === 2 ? (
                        <ListAltIcon />
                      ) : index === 3 ? (
                        <LocalShippingOutlinedIcon />
                      ) : index === 4 ? (
                        <ShareOutlinedIcon />
                      ) : (
                        <></>
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
      <Toolbar />
      <Box sx={{ flexGrow: 1, p: 3, marginLeft: "-60px" }}>
        <Toolbar className="-mt-2" />
        <Box className="flex justify-between">
          <Chip
            label={
              <span>
                {selectedElement}
                <CloseOutlinedIcon fontSize="small" />
              </span>
            }
            color="primary"
            variant="outlined"
            sx={{ borderRadius: "0px", backgroundColor: "white" }}
          />
          <SettingsOutlinedIcon />
        </Box>
        <TabComponent />
      </Box>
    </Box>
  );
}
