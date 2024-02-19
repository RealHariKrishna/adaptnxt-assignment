import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Typography,
  Box,
  Card,
  CardContent,
  InputLabel,
  Select,
  Chip,
  Stack,
  Button,
  CardActions,
  FormControl,
  Pagination,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import TableComponent from "./TableComponent";
import order from "../images/order.svg";

function TabComponent() {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Tabs value={tabValue} onChange={handleChange}>
        {[
          "Pending",
          "Accepted",
          "AWB Created",
          "Ready to Ship",
          "Shipped",
          "Completed",
          "Cancelled",
        ].map((ele, index) => (
          <Tab
            label={<Typography className="capitalize">{ele}</Typography>}
            value={index}
          />
        ))}
      </Tabs>
      <Card className="mt-4">
        <CardContent>
          <Box className="flex justify-between">
            <Stack direction="row" spacing={1}>
              <Chip
                label={
                  <span className="flex">
                    <img
                      src={order}
                      alt="import_orders"
                      height="24px"
                      width="24px"
                    />
                    Import Orders
                  </span>
                }
                variant="outlined"
                sx={{ borderRadius: "0px" }}
              />
              <Chip
                label={
                  <span>
                    <SendOutlinedIcon fontSize="small" />
                    Accept
                  </span>
                }
                variant="filled"
                sx={{ borderRadius: "0px" }}
              />
              <Chip
                label={
                  <span>
                    <PrintOutlinedIcon fontSize="small" />
                    Print
                  </span>
                }
                variant="filled"
                sx={{ borderRadius: "0px" }}
              />
            </Stack>
            <Button variant="contained">
              <SyncOutlinedIcon />
              Refresh
            </Button>
          </Box>
          <TableComponent />
        </CardContent>
        <CardActions className="flex justify-end">
          <Pagination
            count={1}
            variant="outlined"
            shape="rounded"
            className="flex items-center"
            color="primary"
          />
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel>20 / page</InputLabel>
            <Select label="20 / page" sx={{ padding: "0px" }}></Select>
          </FormControl>
        </CardActions>
      </Card>
    </>
  );
}

export default TabComponent;
