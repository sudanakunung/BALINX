import Vue from 'vue'
import Vuex from 'vuex'
// import router from '@/router'
import axios from 'axios';

Vue.use(Vuex)
const api = axios.create({baseURL: 'http://localhost:3000/api/'})

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        loading: false,
        user: localStorage.user,
        event: null
    },
    getters: {
        loading: state => {
            return state.loading;
        },
        currentUser: state => {
            return JSON.parse(state.user);
        },
        isAuthenticated: state => !!state.token,
        events: state => {
            return state.event
        }
    },
    mutations: {
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
        SET_USER(state, user) {
            state.user = user;
            localStorage.user = JSON.stringify(user);
        },
        SET_TOKEN(state, token) {
            state.token = token;
            localStorage.token = token;
        },
        SET_EVENT(state, event) {
            state.event = event;
        }
    },
    actions: {
        async auth(context, form) {
            context.commit("SET_LOADING", true);
            try {
                const response = await api.post('/user/login', {
                    email: form.email,
                    password: form.password
                });

                context.commit("SET_TOKEN", response.data.token);
                context.commit("SET_USER", response.data.user);
                window.location = '/';
            } catch (error) {

                console.error(error);

            }
            context.commit("SET_LOADING", false);
        },
        async register(context, form) {
            context.commit("SET_LOADING", true);
            try {
                await api.post('/user/register', {
                    name: form.name,
                    email: form.email,
                    password: form.password,
                    confirm_password: form.confirm_password
                });
                window.location = '/login';
                context.commit("SET_LOADING", false);
            } catch (error) {

                console.error(error);
                context.commit("SET_LOADING", false);
            }
        },
        async searching(context, search) {
            context.commit("SET_LOADING", true);
            try {
                var result = await api.get('/user/search/' + search);

                context.commit("SET_LOADING", false);
                return result
            } catch (error) {

                console.error(error);
                context.commit("SET_LOADING", false);
            }
        },
        async getUser(context, userId) {

            context.commit("SET_LOADING", true);
            try {
                var result = await api.get('/user/' + userId);

                context.commit("SET_LOADING", false);
                return result.data
            } catch (error) {

                console.error(error);
                context.commit("SET_LOADING", false);
            }
        },
        async getProfile(context, userId) {

            context.commit("SET_LOADING", true);
            try {
                var result = await api.get('/user/profile/' + userId, {
                    headers: {
                        'auth-token': this.state.token,
                        'Content-Type': 'application/json'
                    }
                });

                context.commit("SET_LOADING", false);
                return result.data
            } catch (error) {

                console.error(error);
                context.commit("SET_LOADING", false);
            }
        },
        async follow(context, data) {
            context.commit("SET_LOADING", true);
            try {
                var result = await api.post('/user/follow', data, {
                    headers: {
                        'auth-token': this.state.token,
                        'Content-Type': 'application/json'
                    }
                })
                context.commit("SET_LOADING", false);
                return result
            } catch (error) {
                context.commit("SET_LOADING", false);
            }
        },
        async logout(context) {
            await localStorage.clear();
            context.commit('SET_USER', false);
            context.commit('SET_USER', false);
            window.location='/login'
        },
        async getEvent(context) {
            const response = await api.post('/event/all');
            context.commit("SET_EVENT", response.data)
        },
        async uploadpost(data) {
            console.log(data.postImage);
            var response = await api.post('/post/create', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return response;
        },
        async getPost(context, userId) {
            var response = await api.get('/post/all/' + userId)
            return response.data;
        },
        async getComment(context, postId) {
            var response = await api.get('/post/comment/' + postId, {
                headers: {
                    'auth-token': this.state.token,
                    'Content-Type': 'application/json'
                }
            })
            return response.data;
        },
        async Like(context, data) {

            var response = await api.post('/post/like', data, {
                headers: {
                    'auth-token': this.state.token,
                    'Content-Type': 'application/json'
                }
            })
            return response.data;
        },
        async getSinglePost(context, postId) {
            var response = await api.get('/post/single/' + postId)
            return response.data;
        },
        async addFriend(context, userId) {
            var data = {
                "userId": userId
            }
            var response = await api.post('/user/friend', data, {
                headers: {
                    'auth-token': this.state.token,
                    'Content-Type': 'application/json'
                }
            })
            return response.data;
        },
        async getFriend(context) {
            context.commit("SET_LOADING", true);
            var response = await api.get('/conver/get-conver/' + this.state.token)
            context.commit("SET_LOADING", false);
            return response.data;

        },
        async getConver(context, roomId) {
            context.commit("SET_LOADING", true);
            var response = await api.post('/conver/room', {
                "roomId": roomId
            }, {
                headers: {
                    'auth-token': this.state.token,
                    'Content-Type': 'application/json'
                }
            })

            response = response.data;

            var user = response.user.find(data => {
                return data._id != this.getters.currentUser._id;
            })
            response.user = user

            context.commit("SET_LOADING", false);
            return response;

        }
    },
    modules: {}
})
