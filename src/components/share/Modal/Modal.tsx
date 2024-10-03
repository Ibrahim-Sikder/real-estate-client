import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, onClose }) => {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event: { target: { value: string } }) => {
    setCategory(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Book an Appointment</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Your Name"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="email"
          label="Your Email"
          type="email"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="phone"
          label="Your Number"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="date"
          label="Date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          variant="outlined"
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            value={category}
            label="Category"
            onChange={handleCategoryChange}
            variant="outlined"
          >
            <MenuItem value="Buy Property Share">Buy Property Share</MenuItem>
            <MenuItem value="Land Wanted">Land Wanted</MenuItem>
            <MenuItem value="Buy Flat or Floor">Buy Flat or Floor</MenuItem>
            <MenuItem value="Interior Design">Interior Design</MenuItem>
            <MenuItem value="Construction">Construction</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <button
          onClick={onClose}
          className="bg-[#135F4A] px-6 py-2 text-white uppercase text-sm"
        >
          Cancel
        </button>
        <button
          onClick={onClose}
          className="bg-[#135F4A] px-6 py-2 text-white uppercase text-sm"
        >
          Submit
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
