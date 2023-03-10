import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchData", (payload, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res));
    })
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res));
    })
    getHomeDiscountData().then(res => {
        dispatch(changeDiscountInfoAction(res));
    })
    getHomeHotRecommendData().then(res => {
        dispatch(changeRecommendInfoAction(res))
    })
    getHomeLongforData().then(res => {
        dispatch(changeLongforAction(res));
    })
    getHomePlusData().then(res => {
        dispatch(changePlusAction(res));
    })
    // const res = await Promise.allSettled([getHomeGoodPrice, getHomeHighScore]);
    // return res;
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        recommendInfo: {},
        longforInfo: {},
        plusInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload;
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload;
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload;
        },
        changeRecommendInfoAction(state, { payload }) {
            state.recommendInfo = payload;
        },
        changeLongforAction(state, { payload }) {
            state.longforInfo = payload;
        },
        changePlusAction(state, { payload }) {
            state.plusInfo = payload;
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
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeRecommendInfoAction,
    changeLongforAction,
    changePlusAction
} = homeSlice.actions

export default homeSlice.reducer