/* eslint-disable @typescript-eslint/no-unused-vars */


import React from "react";
import { Grid, Button, Box } from "@mui/material";
import ADForm from "@/components/Forms/Form";
import { FieldValues } from "react-hook-form";
import ADSelect from "@/components/Forms/Select";
import { budget, location, loginFor, propertySize } from "@/constant/type";
import { useRouter } from "next/navigation";
import ADInput from "@/components/Forms/Input";

const SearchBar = () => {
  const router = useRouter()
  const onSubmit = (data: FieldValues) => {
    const queryString = new URLSearchParams(data).toString();
    router.push(`/projects?${queryString}`);
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
              <label className="block uppercase lg:text-sm text-xs">
                LOOKING FOR
              </label>
              <ADSelect
                size="small"
                name="looking_for"
                label="Looking For"
                items={loginFor}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <label className="block uppercase lg:text-sm text-xs">
                Location
              </label>
              <ADSelect
                size="small"
                name="location"
                label="Location"
                items={location}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <label className="block uppercase lg:text-sm text-xs">
                Property Size
              </label>
              <ADSelect
                size="small"
                name="property_size"
                label="Property Size"
                items={propertySize}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <label className="block uppercase lg:text-sm text-xs">
                Your budget
              </label>
              <ADInput
                size="small"
                name="high_budget"
                label="Your budget"
                // items={budget}
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
                  marginTop: 28,
                },
                alignItems: "center",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                disableElevation
                sx={{
                  height: "40px",
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
