import { RichText, Title } from "@gamiui/standard";
import { INews } from ".";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import * as S from "./styles";

export interface INewsSlider {
  news: INews[];
}

export const NewsSlider = ({ news }: INewsSlider) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <S.News ref={sliderRef} className="keen-slider">
      {news.map(
        (
          { id, title, description, backgroundColor, imageUrl }: INews,
          index: number
        ) => (
          <S.KeenSliderSlide
            key={id}
            className={`keen-slider__slide number-slide${index + 1}`}
            $backgroundColor={backgroundColor}
            $backgroundImg={imageUrl}
            // $color={color}
            // width='full'
          >
            <Title level="h3">{title}</Title>
            <RichText text={description} />
          </S.KeenSliderSlide>
        )
      )}
    </S.News>
  );
};
