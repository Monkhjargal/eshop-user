import React from "react";

import api from "../../api";
import { compose } from "react-komposer";
import Loader from "../../components/Loader";
import { Season } from "../../pages";

const options = {
  loadingHandler: () => <Loader />
};

const fetch = async (props, onData) => {
  try {
    const products = await api.recipe.findAll();
    const primaryBanners = await api.banner.findAll({ type: "F1" });
    const secondaryBanners = await api.banner.findAll({ type: "F2" });
    const tag = await api.tag.findAll({ slug: "recipe" });
    const menu = await api.menu.findAll();

    onData(null, {
      container: {
        products: products.data,
        primaryBanner: primaryBanners.data[0],
        secondaryBanners: secondaryBanners.data,
        tag: tag.data[0],
        menu: menu.data
      }
    });
  } catch (e) {
    console.log("CUSTOM ERROR: ");
    console.log(e);
  }
};

const dataLoader = (props, onData) => {
  fetch(props, onData);
};

export default compose(
  dataLoader,
  options
)(Season);