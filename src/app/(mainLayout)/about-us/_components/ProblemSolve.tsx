"use client"
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import img1 from "../../../../../src/assets/images/about/3.jpg";
import img2 from "../../../../../src/assets/images/about/4.jpg";

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

const ProblemSolve = () => {
  // State to control dialog visibility
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");

  // Functions to open and close dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handle category selection
  const handleCategoryChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCategory(event.target.value);
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-20">
        <div>
          <div className="space-y-5">
            <p className="uppercase text-[#135F4A]">We Solve Problem</p>
            <h2 className="uppercase">
              We Can Be a Solution For House Developer
            </h2>
            <p>
              We believe in creating opportunities for all types of investors,
              making land ownership accessible and affordable, while promoting
              sustainable development.
            </p>
          </div>
          <div className="flex items-center gap-5 bg-[#76B486] p-5 border-l-8 border-[#135F4A] mt-5">
            <span>
              <HomeIcon fontSize="large" />
            </span>
            <div>
              <h3>Professional Team Work</h3>
              <p>
                Feel free to adjust any details as needed for your specific
                business goals!
              </p>
            </div>
          </div>
          <button
            onClick={handleClickOpen}
            className="bg-[#135F4A] px-6 py-2 text-white mt-5"
          >
            Let&apos;s Talk
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Image src={img1} alt="" className="mt-10" />
          <Image src={img2} alt="" />
        </div>
      </div>

      {/* Dialog component */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Book an Appointment</DialogTitle>
        <DialogContent>
          {/* Form inside the dialog */}
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
            type="email"
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
          {/* Category Select */}
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
            onClick={handleClose}
            className="bg-[#135F4A] px-6 py-2 text-white uppercase text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleClose}
            className="bg-[#135F4A] px-6 py-2 text-white uppercase text-sm"
          >
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProblemSolve;
