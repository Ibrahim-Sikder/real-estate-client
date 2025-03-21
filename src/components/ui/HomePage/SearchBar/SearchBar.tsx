/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Grid, Button, Box } from "@mui/material";
import ADForm from "@/components/Forms/Form";
import { FieldValues } from "react-hook-form";
import ADSelect from "@/components/Forms/Select";
import {
  location,
  lookingFor,
  category,
  low_budget,
  high_budget,
} from "@/constant/type";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const onSubmit = (data: FieldValues) => {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value)
    );
    const queryString = new URLSearchParams(filteredData).toString();

    // console.log(queryString);
    router.push(`/projects?${queryString}`);
  };

  const buttonStyle = {
    height: "40px",
    px: 4,
    backgroundColor: "#135F4A",
    color: "white",
    width: "100%",
  };
  const tabMargin = {
    marginTop: {
      xs: "3px",
      lg: "8px",
    },
  };
  return (
    <div>
      <ADForm onSubmit={onSubmit}>
        <div className="bg-white lg:py-8 lg:px-5 p-3 rounded shadow-md">
          <Grid
            container
            spacing={1}
            alignItems="center"
            sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
          >
            <Grid item xs={12} md={6}>
              <label className="block uppercase lg:text-sm text-xs">
                LOOKING FOR
              </label>
              <ADSelect
                size="small"
                name="looking_for"
                label="Looking For"
                items={lookingFor}
                fullWidth
                sx={tabMargin}
                defaultValue="Commercial"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label className="block uppercase lg:text-sm text-xs">
                Location
              </label>
              <ADSelect
                size="small"
                name="location"
                label="Location"
                items={location}
                fullWidth
                sx={tabMargin}
                defaultValue="Dhaka"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={2}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: "flex-end",
                  flexDirection: "column",
                  marginTop: {
                    xs: 5,
                    md: 28,
                  },
                },
                alignItems: "center",
              }}
            >
              <label className=" uppercase lg:text-sm text-xs opacity-0 hidden md:block">
                Category
              </label>
              <Button
                type="submit"
                variant="contained"
                disableElevation
                sx={buttonStyle}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </div>
      </ADForm>
    </div>
  );
};

export default SearchBar;
