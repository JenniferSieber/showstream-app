import React, { useContext } from "react";
import { MovieDataType } from "@/assets/data";
import { MovieContext } from "@/context/movie-context";
import { Box, Card, CardContent, Stack, Typography, Grid } from "@mui/material";
import moviesIcon from "@/assets/icons/filmIcon.svg";
import tvSeriesIcon from "@/assets/icons/tvIcon.svg";
import StarIcon from "../icons/star-icon";
import StarEmptyIcon from "../icons/star-empty-icon";

interface MovieTrendCardProps {
  movie: MovieDataType;
}

const MovieTrendCard = ({ movie }: MovieTrendCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOOGLE BOOKMARK", id });
  };

  return (
    <Card
      key={movie.id}
      elevation={0}
      style={{ backgroundColor: "transparent" }}
    >
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          overflowX: "scroll",
          display: "flex",
        }}
      >
        <img
          src={movie.thumbnail.regular.large}
          alt=""
          style={{ width: "300px", height: "100%", borderRadius: "8px", color: "#FFF" }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgcolor="rgba(0,0,0,0.6)"
          borderRadius="8px"
        />
        <Stack
          mt="6"
          spacing={0}
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={4}
        >
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Typography
                fontSize={10}
                color="#FFF"
                aria-label="year of movie"
              >
                {movie.year}
              </Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  bg: "#E0E0E0",
                  borderRadius: "full",
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
                color="#FFF"
                aria-label="movie category"
              >
                {movie.category}
              </Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  bg: "#E0E0E0",
                  borderRadius: "full",
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                fontSize={10}
                color="#FFF"
                aria-label="movie rating"
              >
                {movie.rating}
              </Typography>
            </Grid>
          </Grid>
          <Typography color="#FFF" padding={0} aria-label="movie title">
            {movie.title}
          </Typography>
        </Stack>
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
          }}
        >
          <Box
            sx={{
              p: "1rem",
              color: "#FFF",
              borderRadius: "100%",
              cursor: "pointer",
              "&: hover": { opacity: 0.8 },
            }}
            onClick={() => handleToggleBookmark(movie.id)}
          >
            {movie.isBookmarked ? (
              <StarIcon  />
            ) : (
              <StarEmptyIcon />
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieTrendCard;