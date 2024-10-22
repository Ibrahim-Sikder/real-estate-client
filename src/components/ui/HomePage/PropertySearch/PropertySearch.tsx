// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import './PropertySearch.css'

// interface TabPanelProps {
//     children?: React.ReactNode;
//     index: number;
//     value: number;
// }

// function CustomTabPanel(props: TabPanelProps) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//         </div>
//     );
// }

// function a11yProps(index: number) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

// export default function PropertySearch() {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//         setValue(newValue);
//     };

//     const tabStyle = {
//         textTransform: 'none',
//         fontWeight: 'bold',
//         background: 'rgba(227, 200, 13, 0.56)',
//         color: '#fff',
//         marginRight: '2px',
//         marginLeft: '2px',
//         borderRadius: '3px',
//         Opacity: '.5',
//         "&.Mui-selected": {
//             backgroundColor: "#fff",

//             zIndex: 10,
//         },
//     }
//     const propertyStyle = {
//         width: '50%', margin: '0 auto', display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center', flexDirection: 'column',

//     }

//     return (
//         <div className="properyWrap">
//             <Box sx={propertyStyle}>
//                 <Box sx={{ borderBottom: 'none', }}>
//                     <Tabs
//                         value={value}
//                         onChange={handleChange}
//                         aria-label="basic tabs example"
//                         sx={{
//                             '& .MuiTabs-indicator': { display: 'none' },

//                         }}
//                     >
//                         <Tab
//                             label="All Status"
//                             {...a11yProps(0)}
//                             sx={tabStyle}
//                         />
//                         <Tab
//                             label="Land Share"
//                             {...a11yProps(1)}
//                             sx={tabStyle}
//                         />
//                         <Tab
//                             label="For Sale"
//                             {...a11yProps(2)}
//                             sx={tabStyle}
//                         />
//                     </Tabs>
//                 </Box>
//                 <CustomTabPanel value={value} index={0}>
//                     <PropertyCard />
//                 </CustomTabPanel>
//                 <CustomTabPanel value={value} index={1}>
//                     <PropertyCard />
//                 </CustomTabPanel>
//                 <CustomTabPanel value={value} index={2}>
//                     <PropertyCard />
//                 </CustomTabPanel>
//             </Box>
//         </div>
//     );
// }
