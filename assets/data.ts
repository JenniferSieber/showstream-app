export interface MovieDataType {
  id: string;
  title: string;
  thumbnail: {
    trending?: {
      large: string;
    };
    regular: {
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export const moviesData = [
  {
    id: "1",
    title: "Beyond Earth",
    thumbnail: {
      trending: {
        large: "./thumbnails/beyond-earth/large.jpg",
      },
      regular: {
        large: "./thumbnails/beyond-earth/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "2",
    title: "Bottom Gear",
    thumbnail: {
      trending: {
        large: "./thumbnails/bottom-gear/large.jpg",
      },
      regular: {
        large: "./thumbnails/bottom-gear/large.jpg",
      },
    },
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "3",
    title: "Undiscovered Cities",
    thumbnail: {
      trending: {
        large: "./thumbnails/undiscovered-cities/large.jpg",
      },
      regular: {
        large: "./thumbnails/undiscovered-cities/large.jpg",
      },
    },
    year: 2019,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "4",
    title: "1998",
    thumbnail: {
      trending: {
        large: "./thumbnails/1998/large.jpg",
      },
      regular: {
        large: "./thumbnails/1998/large.jpg",
      },
    },
    year: 2021,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "5",
    title: "Dark Side of the Moon",
    thumbnail: {
      trending: {
        large: "./thumbnails/dark-side-of-the-moon/large.jpg",
      },
      regular: {
        large: "./thumbnails/dark-side-of-the-moon/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: true,
    isTrending: true,
  },
  {
    id: "6",
    title: "The Great Lands",
    thumbnail: {
      regular: {
        large: "./thumbnails/the-great-lands/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "7",
    title: "The Diary",
    thumbnail: {
      regular: {
        large: "./thumbnails/the-diary/large.jpg",
      },
    },
    year: 2019,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "8",
    title: "Earth’s Untouched",
    thumbnail: {
      regular: {
        large: "./thumbnails/earths-untouched/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "9",
    title: "No Land Beyond",
    thumbnail: {
      regular: {
        large: "./thumbnails/no-land-beyond/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "10",
    title: "During the Hunt",
    thumbnail: {
      regular: {
        large: "./thumbnails/during-the-hunt/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "11",
    title: "Autosport the Series",
    thumbnail: {
      regular: {
        large: "./thumbnails/autosport-the-series/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "12",
    title: "Same Answer II",
    thumbnail: {
      regular: {
        large: "./thumbnails/same-answer-2/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "13",
    title: "Below Echo",
    thumbnail: {
      regular: {
        large: "./thumbnails/below-echo/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "14",
    title: "The Rockies",
    thumbnail: {
      regular: {
        large: "./thumbnails/the-rockies/large.jpg",
      },
    },
    year: 2015,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "15",
    title: "Relentless",
    thumbnail: {
      regular: {
        large: "./thumbnails/relentless/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "16",
    title: "Community of Ours",
    thumbnail: {
      regular: {
        large: "./thumbnails/community-of-ours/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "17",
    title: "Van Life",
    thumbnail: {
      regular: {
        large: "./thumbnails/van-life/large.jpg",
      },
    },
    year: 2015,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "18",
    title: "The Heiress",
    thumbnail: {
      regular: {
        large: "./thumbnails/the-heiress/large.jpg",
      },
    },
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "19",
    title: "Off the Track",
    thumbnail: {
      regular: {
        large: "./thumbnails/off-the-track/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "20",
    title: "Whispering Hill",
    thumbnail: {
      regular: {
        large: "./thumbnails/whispering-hill/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "21",
    title: "112",
    thumbnail: {
      regular: {
        large: "./thumbnails/112/large.jpg",
      },
    },
    year: 2013,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "22",
    title: "Lone Heart",
    thumbnail: {
      regular: {
        large: "./thumbnails/lone-heart/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "23",
    title: "Production Line",
    thumbnail: {
      regular: {
        large: "./thumbnails/production-line/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "25",
    title: "Dogs",
    thumbnail: {
      regular: {
        large: "./thumbnails/dogs/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "26",
    title: "Asia in 24 Days",
    thumbnail: {
      regular: {
        large: "./thumbnails/asia-in-24-days/large.jpg",
      },
    },
    year: 2020,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "27",
    title: "The Tasty Tour",
    thumbnail: {
      regular: {
        large: "./thumbnails/the-tasty-tour/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "28",
    title: "Darker",
    thumbnail: {
      regular: {
        large: "./thumbnails/darker/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "29",
    title: "Unresolved Cases",
    thumbnail: {
      regular: {
        large: "./thumbnails/unresolved-cases/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "30",
    title: "Mission: Saturn",
    thumbnail: {
      regular: {
        large: "./thumbnails/mission-saturn/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
];