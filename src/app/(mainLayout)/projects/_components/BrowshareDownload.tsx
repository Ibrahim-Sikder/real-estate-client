import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import React from 'react';
import Button from '@mui/material/Button';
import { OverviewProps } from '@/types/project';
import Link from 'next/link';


const BrowshareDownload: React.FC<OverviewProps> = ({ projectData }) => {
    console.log(projectData)

    return (
        <div className="lg:ml-24 lg:mt-10 lg:block flex justify-center items-center mx-auto">
            <Button
                target='_blank'
                component={Link}
                href={`${projectData.brochure_link}`}
                sx={{
                    height: '200px',
                    width: '250px',
                    borderRadius: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#135F4A',
                    color: '#fff'

                }}
            >
                <CloudUploadIcon sx={{ fontSize: '80px', marginBottom: '8px' }} />
                Download Brochure

            </Button>
        </div>
    );
};

export default BrowshareDownload;
