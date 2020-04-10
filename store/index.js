export const state =() =>({
entries:[],
filter:[],

})
export const mutations = {
    setEntries(state,data){
        state.entry= data
    },
    setFilter(state,data){
        state.filter= data
    }
}