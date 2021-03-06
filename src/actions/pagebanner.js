import api from "../api";
import Banner from "../api/PagesBanner";

let actions = {};
Banner.forEach(a => {
  if (a.METHOD !== "GET") {
    actions[a.NAME] = data => dispatch => api.banner[a.NAME](data);
  }
});

export default actions;
