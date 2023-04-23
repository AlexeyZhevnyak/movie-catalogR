export interface MovieFull {
    id: number;
    externalId: {
        kpHD: string;
        imdb: string;
        tmdb: number;
    };
    name: string;
    alternativeName: string;
    enName: string;
    names: {
        name: string;
        language: string;
        type: string;
    }[];
    type: string;
    typeNumber: number;
    year: number;
    description: string;
    shortDescription: string;
    slogan: string;
    status: string;
    rating: {
        kp: number;
        imdb: number;
        tmdb: number;
        filmCritics: number;
        russianFilmCritics: number;
        await: number;
    };
    votes: {
        kp: string;
        imdb: string;
        tmdb: number;
        filmCritics: number;
        russianFilmCritics: number;
        await: number;
    };
    movieLength: number;
    ratingMpaa: string;
    ageRating: number;
    logo: {
        url: string;
    };
    poster: {
        url: string;
        previewUrl: string;
    };
    backdrop: {
        url: string;
        previewUrl: string;
    };
    videos: {
        trailers: {
            url: string;
            name: string;
            site: string;
            type: string;
            size: number;
        }[];
        teasers: {
            url: string;
            name: string;
            site: string;
            type: string;
            size: number;
        }[];
    };
    genres: {
        name: string;
    }[];
    countries: {
        name: string;
    }[];
    persons: {
        id: number;
        photo: string;
        name: string;
        enName: string;
        description: string;
        profession: string;
        enProfession: string;
    }[];
    reviewInfo: {
        count: number;
        positiveCount: number;
        percentage: string;
    };
    seasonsInfo: {
        number: number;
        episodesCount: number;
    }[];
    budget: {
        value: number;
        currency: string;
    };
    fees: {
        world: {
            value: number;
            currency: string;
        };
        russia: {
            value: number;
            currency: string;
        };
        usa: {
            value: number;
            currency: string;
        };
    };
    premiere: {
        country: string;
        world: string;
        russia: string;
        digital: string;
        cinema: string;
        bluray: string;
        dvd: string;
    };
    similarMovies: {
        id: number;
        name: string;
        enName: string;
        alternativeName: string;
        type: string;
        poster: {
            url: string;
            previewUrl: string;
        };
    }[];
    sequelsAndPrequels: {
        id: number;
        name: string;
        enName: string;
        alternativeName: string;
        type: string;
        poster: {
            url: string;
            previewUrl: string;
        };
    }[];
    watchability: {
        items: {
            name: string;
            logo: {
                url: string;
            };
            url: string;
        }[];
    };
    releaseYears: {
        start: number;
        end: number;
    }[];
    top10: number;
    top250: number;
    facts: {
        value: string;
    }[];
}
