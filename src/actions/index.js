export const FAVORITE = "FAVORITE";
export const UN_FAVORITE = "UN_FAVORITE";

export const addfavorite =(payload) => {
    return {
        type: FAVORITE,
        payload
    };
};

export const removefavorite =(id) => {
    return {
        type: UN_FAVORITE,
        id
    };
};

