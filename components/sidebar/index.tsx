import { Link, useLocation } from "react-router-dom";
import { Box, Hidden, Typography, Avatar } from "@mui/material";
import homeIcon from "@/assets/icons/homeIcon.svg";
import directIcon from "@/assets/icons/direct.svg";
import moviesIcon from "@/assets/icons/filmIcon.svg";
import tvSeriesIcon from "@/assets/icons/tvIcon.svg";
import playIcon from "@/assets/icons/icon-play-circle.svg";
import starIcon from "@/assets/icons/starIcon-solid.svg";
import userImage from "@/assets/image6.jpg";

const navLinks = [
  {
    name: "Home",
    icon: homeIcon,
    link: "/home",
  },
  {
    name: "Movies",
    icon: moviesIcon,
    link: "/movies",
  },
  {
    name: "TV",
    icon: tvSeriesIcon,
    link: "/tv-series",
  },
  {
    name: "Watchlist",
    icon: starIcon,
    link: "/watchlist",
  },
  {
    name: "Logout",
    icon: directIcon,
    link: "/",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: "#960E0E",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
        }}
      >
        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            alignItems: { xs: "center", lg: "initial" },
            justifyContent: { xs: "center", lg: "initial" },
            gap: 4,
          }}
        >
          <Hidden smDown>
            <Typography
              variant="h5"
              component="h1"
              p={1}
              my={1}
              fontWeight={400}
              fontSize={25}
              alignItems="center"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={playIcon} alt="logo" width="25px" height="25px" />
              Show Stream
            </Typography>
          </Hidden>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="User Icon"
              src={userImage}
              sx={{ width: 88, height: 88 }}
            />
          </Box>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{
                    width: "18px",
                    filter: `${
                      pathname === item.link
                        ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                        : "invert(84%)"
                    }`,
                  }}
                />
                <Hidden mdDown>
                  <Typography>{item.name}</Typography>
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
