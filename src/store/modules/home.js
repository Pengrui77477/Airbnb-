import { getHomeGoodPriceData, getHomeHighScoreData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchData", (payload, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res));
    })

    // const res = await Promise.allSettled([getHomeGoodPrice, getHomeHighScore]);
    // return res;
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {

        },
        highScoreInfo: {

        }
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload;
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload;
        }
    },
    // extraReducers: {
    //     [fetchHomeDataAction.fulfilled](state, { payload }) {
    //         // console.log(state, payload);
    //         state.goodPriceInfo = payload;
    //     }
    // }
})

export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction
} = homeSlice.actions

export default homeSlice.reducer