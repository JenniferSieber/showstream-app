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

// Connect this Data with Database
// Example movie data
export const moviesData = [
  {
    id: "1",
    title: "Example Movie",
    thumbnail: {
      trending: {
        large: "./thumbnails/example-folder/large.jpg",
      },
      regular: {
        large: "./thumbnails/example-folder/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  }
  ]
