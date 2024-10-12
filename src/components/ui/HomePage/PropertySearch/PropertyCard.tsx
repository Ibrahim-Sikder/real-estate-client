import React from 'react';
import ADForm from '@/components/Forms/Form';
import ADSelect from '@/components/Forms/Select';
import { FieldValues } from 'react-hook-form';
import { Box, Button, } from '@mui/material';
import Grid from '@mui/material/Grid'; // Standard Grid import
import { budget, location, looginFor, propertySize } from '@/constant/type';
const PropertyCard = () => {

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }
    return (
        <Box className="propertyCard">
            <ADForm onSubmit={onSubmit}>
                <div
                    className='flex items-center gap-x-2 '
                >
                    <Grid container spacing={1} justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={6} lg={3}>
                            <label className='mb-1 block uppercase text-sm '>LOOKIN FOR </label>
                            <ADSelect size="medium" name="looking_for" label="Looking For" items={looginFor} fullWidth />
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <label className='mb-1 block uppercase text-sm '>Location</label>
                            <ADSelect size="medium" name="location" label="Location" items={location} fullWidth />
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <label className='mb-1 block uppercase text-sm '>Property Size</label>
                            <ADSelect size="medium" name="property_size" label="Property Size" items={propertySize} fullWidth />
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <label className='mb-1 block uppercase text-sm '>Your budget</label>
                            <ADSelect size="medium" name="budget" label="Your budget" items={budget} fullWidth />
                        </Grid>
                    </Grid>


                    <Button sx={{ width: '100px', height: '53px', padding: '0px', marginTop: '20px', color:'#fff' }}>
                        Search
                    </Button>
                </div>

            </ADForm>
        </Box>
    );
};

export default PropertyCard;