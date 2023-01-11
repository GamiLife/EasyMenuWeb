import React, { Fragment, useEffect, useState } from "react";

import { get } from "../../../config/api";
import { NewsSlider } from "./NewsSlider";

export interface INews {
  id: number;
  title: string;
  description: string;
  backgroundColor?: string;
  color?: string;
  imageUrl: string;
  // backgroundImg?: string;
}

// : React.FC<INews>
export const News = (
  {
    // id,
    // title,
    // description,
    // backgroundColor,
    // color,
    // imageUrl
  }
) => {
  const [news, setNews] = useState<INews[] | undefined>(undefined);

  useEffect(() => {
    async function newsFetch() {
      try {
        const { data } = await get(`news?startDate=2023-01-03&companyId=1`);
        console.log(data);
        setNews(data);
      } catch (e) {
        console.log(e);
      }
    }
    newsFetch();
  }, []);

  return (
    <Fragment>{!!news?.length && <NewsSlider news={news} />}</Fragment>

    // <div style={{overflow: 'hidden', width: '100%'}}>
    //   <div ref={sliderRef} className="keen-slider">
    //     <div className="keen-slider__slide number-slide1">1</div>
    //     <div className="keen-slider__slide number-slide2">2</div>
    //     <div className="keen-slider__slide number-slide3">3</div>
    //     <div className="keen-slider__slide number-slide4">4</div>
    //     <div className="keen-slider__slide number-slide5">5</div>
    //     <div className="keen-slider__slide number-slide6">6</div>
    //   </div>
    // </div>
  );
};
