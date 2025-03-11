import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { cyan } from "../MaterialUI";

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: cyan[500],
                color: "white",
                py: 3,
                textAlign: "center",
                mt: "auto",
            }}
        >
            <Container>
                <Typography variant="body1">
                    © {new Date().getFullYear()} Sendi Studio. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
