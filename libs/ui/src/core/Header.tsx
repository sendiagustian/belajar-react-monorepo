"use client";

import React from "react";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

export const Header: React.FC = () => {
    return (
        <AppBar position="fixed">
            <Container>
                <Toolbar>
                    <Typography variant="h5" component="div" color="white" fontWeight={500} sx={{ flexGrow: 1 }}>
                        The Results React Courses
                    </Typography>
                    <Button variant="contained" sx={{ color: "white", fontWeight: 500 }}>
                        Home
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
