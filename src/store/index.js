import Vue from 'vue'
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import data from '../assets/data';

Vue.use(Vuex);

const state = {
    posts: [
      ...data
    ]
};

const getters = {
    allPost(state) {
        return state.posts;
    },
    findPost: state => id => {
        return state.posts.find(p => p.id === id);
    }
};

const mutations = {
    addPost(state, payload){
        state.posts.push(payload);
    },
    addComment(state, {postID, comment}){
        const candidate = state.posts.find(p => p.id === postID);
        candidate.comments.push(comment)
    },
    addReplyComment(state, {postID, commentID, reply}){
        const candidatePost = state.posts.find(p => p.id === postID)
        // eslint-disable-next-line no-unused-vars
        const candidateCommit = deepSearch(candidatePost.comments, commentID);
        candidateCommit.reply.push(reply);
    },
    delPost(state, payload){
        state.posts = state.posts.filter(p => p.id != payload);
        console.log(state.posts);
    }
};

const deepSearch = (comments, commentID) => {
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == commentID) return comments[i];
        else if (comments[i].reply.length) return deepSearch(comments[i].reply, commentID);
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    plugins: [createPersistedState()]
})