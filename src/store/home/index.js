import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";

const state = {
    categoryList: [],
    bannerList: [],
    FloorList: []
};

const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    CATEBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GATFLOORLIST(state, FloorList) {
        state.FloorList = FloorList;
    }
};

const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        console.log(result);
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        console.log(result)
        if (result.code == 200) {
            commit("CATEBANNERLIST", result.data);
        }
    },
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        console.log(result)
        if (result.code == 200) {
            commit("GATFLOORLIST", result.data);
        }
    },

};

const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
}