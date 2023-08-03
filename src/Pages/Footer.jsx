import { Box, Typography, colors } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FaceBookIcon from '@mui/icons-material/Facebook'
export default function Footer() {
    return (
        <div>
            <Box sx={{
                bgcolor: 'black',
                color: 'white',
                textAlign: 'center',
                padding: 4
            }}>
                <Box sx={{
                    my: 3, '& svg': {
                        fontSize: '60px',
                        cursor: 'pointer',
                        mr: 4
                    }
                    , '& svg: hover': {
                        color:'goldenrod',
                        transform:'translateX(5px)',
                        transition:'all 400px'
                        }
                }}>
                    <InstagramIcon />
                    <TwitterIcon />
                    <YouTubeIcon />
                    <FaceBookIcon />

                </Box>
                <Typography variant="h5">
                    All Rights Reserved &copy; Arif Technology Center
                </Typography>
            </Box>
        </div>
    )
}
