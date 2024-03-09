import React, { useContext } from "react";
import { MovieDataType } from "@/assets/data";
import { MovieContext } from "@/context/movie-context";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import moviesIcon from "@/assets/icons/filmIcon.svg";
import tvSeriesIcon from "@/assets/icons/tvIcon.svg";
import StarIcon from "../icons/star-icon";
import StarEmptyIcon from "../icons/star-empty-icon";

interface MovieCardProps {
  movie: MovieDataType;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOOGLE BOOKMARK", id });
  };
  return (
    <Card
      variant="outlined"
      sx={{ bgcolor: "transparent", color: "#E0E0E0", my: 3, border: "none" }}
    >
      <CardContent sx={{ p: 0, position: "relative" }}>
        <Grid container>
          <Grid item>
            <img
              src={movie.thumbnail.regular.large}
              alt=""
              style={{ width: "300px", height: "180px", borderRadius: "8px" }}
            />
          </Grid>
        
          <Grid item xs={8}>
            <Grid container spacing={1} alignItems="center">
              
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="year of movie"
                >
                  {movie.year}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
                <img
                  src={movie.category === "TV Series" ? tvSeriesIcon : moviesIcon}
                  alt=""
                  width={16}
                  height={16}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="movie category"
                >
                  {movie.category}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="movie rating"
                >
                  {movie.rating}
                </Typography>
              </Grid>
            </Grid>
            <Typography aria-label="movie rating" padding={0}>
              {movie.title}
            </Typography>
            
          </Grid>
             <Grid item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "1rem",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "transparent",
                  borderRadius: "50%",
                  cursor: "pointer",
                  "&:hover": { opacity: 0.5 },
                }}
                onClick={() => handleToggleBookmark(movie.id)}
              >
                {movie.isBookmarked ? (
                  <StarIcon />
                ) : (
                  <StarEmptyIcon />
                )}
              </Box>
            </Box>
          </Grid> 
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
