import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import { Checkbox, InputLabel, Chip, MenuItem } from "@mui/material";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import shopify from "../images/shopify-logo.svg";

function TableComponent() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650, marginTop: "15px" }}>
        <TableHead sx={{ backgroundColor: "rgb(245,245,245)" }}>
          <TableRow>
            <TableCell sx={{ padding: "0px" }}></TableCell>
            <TableCell sx={{ padding: "0px" }}>
              <Checkbox />
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              Channel
              <SwapVertOutlinedIcon fontSize="small" />
              <FilterAltIcon fontSize="small" />
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              Order No
              <SwapVertOutlinedIcon fontSize="small" />
              <SearchIcon fontSize="small" />
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              Order Date
              <SwapVertOutlinedIcon fontSize="small" />
              <SearchIcon fontSize="small" />
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              City
              <SwapVertOutlinedIcon fontSize="small" />
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              Customer Name
              <SearchIcon fontSize="small" />
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              Order Value
              <SwapVertOutlinedIcon fontSize="small" />
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              Status
              <SwapVertOutlinedIcon fontSize="small" />
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              Operations
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left" sx={{ padding: "0px" }}>
              <AddIcon />
            </TableCell>
            <TableCell sx={{ padding: "0px" }}>
              <Checkbox />
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              <img src={shopify} alt="shopify" height="28px" width="28px" />
            </TableCell>
            <TableCell align="left" sx={{ color: "#2196f3", padding: "0px" }}>
              #TKN20203754
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              22-05-04
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              Lucknow
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              Abhishek Dixit
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              0.00
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              <Chip
                label="Pending"
                color="success"
                variant="outlined"
                sx={{ borderRadius: "0px", padding: "0px" }}
              />
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel>Actions</InputLabel>
                <Select label="Actions">
                  <MenuItem value="Accept">Accept</MenuItem>
                  <MenuItem value="Reject">Reject</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left" sx={{ padding: "0px" }}>
              <AddIcon />
            </TableCell>
            <TableCell sx={{ padding: "0px" }}>
              <Checkbox />
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              <img alt="shopify" src={shopify} height="28px" width="28px" />
            </TableCell>
            <TableCell align="left" sx={{ color: "#2196f3", padding: "0px" }}>
              #TKN20203753
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              22-05-04
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              Lucknow
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              Abhishek Dixit
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              0.00
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              <Chip
                label="Pending"
                color="success"
                variant="outlined"
                sx={{ borderRadius: "0px", padding: "0px" }}
              />
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel>Actions</InputLabel>
                <Select label="Actions">
                  <MenuItem value="Accept">Accept</MenuItem>
                  <MenuItem value="Reject">Reject</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left" sx={{ padding: "0px" }}>
              <AddIcon />
            </TableCell>
            <TableCell sx={{ padding: "0px" }}>
              <Checkbox />
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              <img alt="shopify" src={shopify} height="28px" width="28px" />
            </TableCell>
            <TableCell align="left" sx={{ color: "#2196f3", padding: "0px" }}>
              #TKN20203752
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              22-05-04
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              Lucknow
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              Abhishek Dixit
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              0.00
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              <Chip
                label="Pending"
                color="success"
                variant="outlined"
                sx={{ borderRadius: "0px", padding: "0px" }}
              />
            </TableCell>
            <TableCell align="left" sx={{ padding: "0px" }}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel>Actions</InputLabel>
                <Select label="Actions">
                  <MenuItem value="Accept">Accept</MenuItem>
                  <MenuItem value="Reject">Reject</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
