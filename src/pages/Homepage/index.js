import React from "react";
import moment from "moment";
import MessengerCustomerChat from "react-messenger-customer-chat";

import Slider from "../../components/Slider";
import Widget from "../../components/Widget";
import Banner from "../../components/Banner";
import { WIDGET_SLUGS } from "../../utils/consts";

class Homepage extends React.Component {
  renderWidgets(widgets, items) {
    let blocks = [];

    widgets = widgets.sort((obj1, obj2) => obj1.orders - obj2.orders);

    widgets.forEach((widget, index) => {
      if (index !== 0 && index % 2 === 0) {
        blocks.push(
          <Banner
            key={items.banners[index][0].id}
            data={items.banners[index]}
          />
        );
      }

      switch (widget.slug) {
        case WIDGET_SLUGS.onlyemart:
          widget.items = items.prodsEmart;
          //   items.tags.prodsEmart && (widget.label = items.tags.prodsEmart);
          widget.readMore = "Бусад Имартын барааг үзэх";
          break;
        case WIDGET_SLUGS.discount:
          widget.items = items.prodsDiscount;
          //   items.tags.discount && (widget.label = items.tags.discount);
          widget.interval = (
            <span>
              {moment()
                .startOf("month")
                .format("MM/DD")}{" "}
              ~{" "}
              {moment()
                .endOf("month")
                .format("MM/DD")}
            </span>
          );
          widget.readMore = "Бусад хямдралтай барааг үзэх";
          break;
        case WIDGET_SLUGS.package:
          widget.items = items.prodsPackage;
          //   items.tags.package && (widget.label = items.tags.package);
          widget.readMore = "Бусад багцыг үзэх";
          break;
        case WIDGET_SLUGS.recipe:
          widget.items = items.recipes;
          //   items.tags.recipe && (widget.label = items.tags.recipe);
          widget.readMore = "Бусад хоолны жорыг үзэх";
          break;
        case WIDGET_SLUGS.new:
          widget.items = items.prodsNew;
          //   items.tags.recipe && (widget.label = items.tags.recipe);
          widget.readMore = "Бусад шинэ барааг үзэх";
          break;
        default:
      }

      blocks.push(<Widget key={widget.slug} data={widget} />);
    });

    if (widgets.length % 2 === 0) {
      blocks.push(
        <Banner
          key={items.banners[widgets.length][0].id}
          data={items.banners[widgets.length]}
        />
      );
    }

    return blocks;
  }

  render() {
    const {
      categories,
      banners,
      tags,
      brands,
      widgets,
      prodsEmart,
      prodsDiscount,
      prodsPackage,
      prodsNew,
      recipes
    } = this.props.container;

    const items = {
      prodsEmart,
      prodsDiscount,
      prodsPackage,
      prodsNew,
      recipes,
      banners,
      tags
    };

    const root = [];
    categories.forEach(entry => {
      if (entry.parentid === 0) {
        entry.children = [];
        root.push(entry);
      }
      root.forEach(ent => {
        if (ent.id === entry.parentid) {
          ent.children.push(entry);
        }
      });
    });

    const sliderParams = {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      spaceBetween: 0
    };

    const brandParams = {
      slidesPerView: 5,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        type: "bullets",
        clickable: true
      }
    };

    return (
      <div className="top-container">
        {/* Slider */}
        <div className="main-slide">
          <Slider
            data={banners[0]}
            params={sliderParams}
            elContainer={"banner"}
          />
        </div>
        {/* Slider end */}

        {/* Main content */}
        {this.renderWidgets(widgets, items)}
        {/* Main content end */}

        {/* Brand list */}
        <div className="main-slide brands-list">
          <div className="container pad10">
            <Slider data={brands} params={brandParams} elContainer={"brands"} />
          </div>
        </div>
        {/* Brand list */}

        {/* Messenger */}
        <MessengerCustomerChat
          pageId="169275059877520"
          appId="570055533421847"
          htmlRef={window.location.pathname}
        />
        {/* Messenger */}
      </div>
    );
  }
}

export default Homepage;
