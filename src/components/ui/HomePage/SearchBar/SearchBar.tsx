/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Grid, Button } from "@mui/material";
import ADForm from "@/components/Forms/Form";
import { FieldValues } from "react-hook-form";
import ADSelect from "@/components/Forms/Select";
import { budget, location, loginFor, propertySize } from "@/constant/type";

const SearchBar = () => {
  const onSubmit = (data: FieldValues) => {
  };
  return (
    <div>
      <ADForm onSubmit={onSubmit}>
        <div className="bg-white lg:p-10 p-5 rounded shadow-md">
          <Grid
            container
            spacing={2}
            alignItems="center"
            sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
          >
            <Grid item xs={12} md={6} lg={3}>
              <label className="mb-1 block uppercase text-sm ">
                LOOKIN FOR
              </label>
              <ADSelect
                size="medium"
                name="looking_for"
                label="Looking For"
                items={loginFor}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <label className="mb-1 block uppercase text-sm ">Location</label>
              <ADSelect
                size="medium"
                name="location"
                label="Location"
                items={location}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <label className="mb-1 block uppercase text-sm ">
                Property Size
              </label>
              <ADSelect
                size="medium"
                name="property_size"
                label="Property Size"
                items={propertySize}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <label className="mb-1 block uppercase text-sm ">
                Your budget
              </label>
              <ADSelect
                size="medium"
                name="budget"
                label="Your budget"
                items={budget}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={2}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: "flex-end",
                  marginTop: 22,
                },
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                disableElevation
                sx={{
                  height: { xs: "auto", md: "56px" },
                  px: 4,
                  backgroundColor: "#eeb808",
                  color: "white",
                }}
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
