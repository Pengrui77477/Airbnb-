import { getEntireListData } from "@/services/modules/entire";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchEntireDataAction = createAsyncThunk("fetchData", async (requestCount, { dispatch }) => {
    dispatch(changeCurrentPageAction(requestCount));
    dispatch(changeIsLoadingAction(true));

    const res = await getEntireListData(requestCount * 20);
    dispatch(changeIsLoadingAction(false));
    dispatch(changeEntireDataAction(res));
})

const entireSlice = createSlice({
    name: "entire",
    initialState: {
        currentPage: 0,
        entireList: {},
        totalCount: 0,
        isLoading: false
    },
    reducers: {
        changeEntireDataAction(state, { payload }) {
            state.entireList = payload.list;
            state.totalCount = payload.totalCount
        },
        changeCurrentPageAction(state, { payload }) {
            state.currentPage = payload;
        },
        changeIsLoadingAction(state, { payload }) {
            state.isLoading = payload
        }
    },
})

export const { changeEntireDataAction, changeCurrentPageAction,changeIsLoadingAction } = entireSlice.actions


export default entireSlice.reducer