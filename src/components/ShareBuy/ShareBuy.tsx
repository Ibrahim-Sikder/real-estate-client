import React, { useState } from "react";
import "./ShareBuy.css";
import Link from "next/link";
import animation from "../../../src/assets/images/icon/animation.png";
import animation2 from "../../../src/assets/images/icon/animation.png";
import animation3 from "../../../src/assets/images/icon/animation2.png";
import animation4 from "../../../src/assets/images/icon/animation3.png";
import animation5 from "../../../src/assets/images/icon/animation4.png";
import animation6 from "../../../src/assets/images/icon/animation5.png";
import animation7 from "../../../src/assets/images/icon/animation6.png";
import animation8 from "../../../src/assets/images/icon/animation.png";
import animation9 from "../../../src/assets/images/icon/animation.png";
import Image from "next/image";
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

const ShareBuy = () => {
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
    <>
      <div className="donationWraps my-16 rounded overflow-hidden contributionWrap ">
        <div className="bg-image flex justify-center items-center lg:px-0 px-5">
          <div className="animationIcon">
            <Image src={animation} alt="animation" />
          </div>
          <div className="animationIcon2">
            <Image src={animation2} alt="animation" />
          </div>
          <div className="animationIcon3">
            <Image src={animation5} alt="animation" />
          </div>
          <div className="animationIcon4">
            <Image src={animation3} alt="animation" />
          </div>
          <div className="animationIcon5">
            <Image src={animation4} alt="animation" />
          </div>
          <div className="animationIcon6">
            <Image src={animation5} alt="animation" />
          </div>
          <div className="animationIcon7">
            <Image src={animation6} alt="animation" />
          </div>
          <div className="animationIcon8">
            <Image src={animation7} alt="animation" />
          </div>
          <div className="animationIcon9">
            <Image src={animation8} alt="animation" />
          </div>
          <div className="animationIcon10">
            <Image src={animation9} alt="animation" />
          </div>
          <div className="absolute z-10">
            <div className="lg:max-w-2xl mx-auto">
              <h1 className=" text-center text-3xl md:text-5xl text-[#CB2D2E]">
                Affordable Project Shares for Sale
              </h1>
              <p className="mt-5 text-center">
                Build a secure future home for your next generation by
                purchasing shares in our various projects, located in all prime
                areas across Bangladesh.
              </p>
              <p className="mt-5 text-center">
                Book a meeting here to know more.
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/#">
                <button
                  onClick={handleClickOpen}
                  className="bg-[#135F4A] text-white py-3 px-6 mt-5 uppercase"
                >
                  Book Meeting
                </button>
              </Link>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareBuy;
