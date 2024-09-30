import React, { useState } from "react";
import Container from "../share/Container";
import HomeIcon from "@mui/icons-material/Home";
import TerrainIcon from "@mui/icons-material/Terrain";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ConstructionIcon from "@mui/icons-material/Construction";
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
import "./Coffee.css";

const CoffeeSection = () => {
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
    <section className="py-20 my-20 text-white text-center coffee-bg relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-10"></div>

      {/* Content inside the section */}
      <div className="relative z-20">
        <Container className="content">
          <div>
            <h2 className="text-2xl font-bold mb-4">Would You Like To</h2>
            <h1 className="text-4xl font-bold mb-8">
              A Meeting with Coffee in Our Office!
            </h1>
          </div>

          {/* Contact options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {/* Buy a Property */}
            <div className="bg-white text-[#135F4A] p-5 rounded">
              <HomeIcon
                className="text-[#135F4A] mb-2"
                style={{ fontSize: "40px" }}
              />
              <h3 className="text-lg font-semibold">Buy Property Share</h3>
            </div>

            {/* Land Owners */}
            <div className="bg-white text-[#135F4A] p-5 rounded">
              <TerrainIcon
                className="text-[#135F4A] mb-2"
                style={{ fontSize: "40px" }}
              />
              <h3 className="text-lg font-semibold">Land Wanted</h3>
            </div>

            {/* Buy Flat or Floor */}
            <div className="bg-white text-[#135F4A] p-5 rounded">
              <ApartmentIcon
                className="text-[#135F4A] mb-2"
                style={{ fontSize: "40px" }}
              />
              <h3 className="text-lg font-semibold">Buy Flat or Floor</h3>
            </div>

            {/* Interior Design */}
            <div className="bg-white text-[#135F4A] p-5 rounded">
              <DesignServicesIcon
                className="text-[#135F4A] mb-2"
                style={{ fontSize: "40px" }}
              />
              <h3 className="text-lg font-semibold">Interior Design</h3>
            </div>

            {/* Construction */}
            <div className="bg-white text-[#135F4A] p-5 rounded">
              <ConstructionIcon
                className="text-[#135F4A] mb-2"
                style={{ fontSize: "40px" }}
              />
              <h3 className="text-lg font-semibold">Construction</h3>
            </div>
          </div>

          {/* Book appointment button */}
          <div className="flex justify-center mt-5">
            <button
              className="bg-[#135F4A] px-6 py-2 text-white uppercase"
              onClick={handleClickOpen}
            >
              Book an appointment
            </button>
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
                  <MenuItem value="Buy Property Share">
                    Buy Property Share
                  </MenuItem>
                  <MenuItem value="Land Wanted">Land Wanted</MenuItem>
                  <MenuItem value="Buy Flat or Floor">
                    Buy Flat or Floor
                  </MenuItem>
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
        </Container>
      </div>
    </section>
  );
};

export default CoffeeSection;
