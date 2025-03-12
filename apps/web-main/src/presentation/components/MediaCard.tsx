import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface MediaCardProps {
    route: string;
    image: string;
    title: string;
    subtitle: string;
    linkProject: string;
}

export const MediaCard: React.FC<MediaCardProps> = ({
    route,
    image,
    title,
    subtitle,
    linkProject,
}) => {
    return (
        <Card sx={{ width: 250, display: "flex", flexDirection: "column" }} elevation={4}>
            <CardMedia sx={{ height: 150 }} image={image} title={title} />

            {/* CardContent sekarang fleksibel */}
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div" noWrap>
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: "text.secondary",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        overflow: "hidden",
                    }}
                >
                    {subtitle}
                </Typography>
            </CardContent>

            {/* Tombol selalu di bawah */}
            <CardActions sx={{ paddingBottom: 2 }}>
                <Button
                    size="small"
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    href={`${window.location.origin}${route}`}
                    sx={{ ":hover": { backgroundColor: "cyan[800]" }, color: "white" }}
                >
                    Visit
                </Button>
                <Button
                    size="small"
                    component="a"
                    variant="contained"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={linkProject}
                    sx={{ ":hover": { backgroundColor: "cyan[800]" }, color: "white" }}
                >
                    Code
                </Button>
            </CardActions>
        </Card>
    );
};
