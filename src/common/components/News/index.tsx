import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { RichText, Title } from '@gamiui/standard';

import { get } from '../../../config/api';
import * as S from './styles';

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
export const News = ({
  // id,
  // title,
  // description,
  // backgroundColor,
  // color,
  // imageUrl
}) => {

  const [news, setNews] = useState<INews[]>([]);

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  useEffect(() => {
    async function newsFetch(){
      try {
        const { data } = await get(`news?startDate=2023-01-03&companyId=1`);
        console.log(data);
        setNews(data);
      }catch(e){
        console.log(e);
      }
    }
    newsFetch();
  }, [])

  return (
    <S.News ref={sliderRef} className='keen-slider'>
      {
        news?.map( 
          ({ id, title, description, backgroundColor, imageUrl }: INews ) => (
            // <News
            //   key={id}
            //   title={title}
            //   description={description}
            //   backgroundColor={backgroundColor}
            //   imageUrl={imageUrl}
            // />
            <S.KeenSliderSlide
              key={id}
              className={`keen-slider__slide number-slide${id}`}
              $backgroundColor={backgroundColor}
              $backgroundImg={imageUrl}
              // $color={color}
              // width='full'
            >
              <Title level='h3'>{title}</Title>
              <RichText text={description} />
            </S.KeenSliderSlide>
          )
        )
      }
    </S.News>
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
