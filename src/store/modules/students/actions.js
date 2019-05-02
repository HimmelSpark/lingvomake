import API from '../../../utils/API.js';
import {HTTP} from "../../../plugins/axios";

export default {
  async loadStudents({commit}) {
	console.log('loading students');
	commit('clearError');
	commit('setLoading', true);
	try {
	  const response = await HTTP.get(API.method.loadAllStudents);
	  console.log('students:', response.data);
	  commit('setStudents', response.data)
	} catch (e) {
	  console.log(e);
	  throw e;
	}
  },
  async loadStudentsByGroupId({commit}, id) {
	console.log('loading students');
	commit('clearError');
	commit('setLoading', true);
	try {
	  const response = await HTTP.get(API.method.loadStudentsByGroup + id.toString());
	  console.log('students:', response.data);
	  commit('setStudents', response.data)
	} catch (e) {
	  console.log(e);
	  throw e;
	}
  },
  async loadGroups({commit}) {
	console.log('loading groups');
	commit('clearError');
	commit('setLoading', true);
	try {
	  const response = await HTTP.get(API.method.loadGroups);
	  console.log('groups:', response.data);
	  commit('setGroups', response.data)
	} catch (e) {
	  console.log(e);
	  throw e;
	}
  },
  async createGroup({commit}, group) {
    console.log('creating group');
	commit('clearError');
	commit('setLoading', true);
	try {
	  const response = await HTTP.post(API.method.createGroup, group);

	} catch (e) {
	  console.log(e);
	  throw e;
	}
  }
}