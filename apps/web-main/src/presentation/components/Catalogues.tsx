import React from "react";
import { MediaCard } from "./MediaCard";
import { catalogues } from "../../data/DataCatalogues";
import { Container, Grid2 as Grid } from "@repo/ui/MaterialUI";

export const Catalogues: React.FC = () => {
    return (
        <Container component="main" sx={{ mt: 4 }}>
            <Grid
                container
                justifyContent={{
                    xs: "center",
                    sm: "flex-start",
                    md: "flex-start",
                    lg: "flex-start",
                }}
                spacing={{ xs: 1, sm: 1, md: 2, lg: 4 }}
                columns={{ xs: 1, sm: 2, md: 4, lg: 6 }}
            >
                {catalogues.map((catalogue) => (
                    <MediaCard
                        route={catalogue.route}
                        image={catalogue.image}
                        title={catalogue.title}
                        subtitle={catalogue.subtitle}
                        linkProject={catalogue.linkProject}
                    />
                ))}
            </Grid>
        </Container>
    );
};
