import { VideoGallery } from "@alisa/components";
import { Metadata } from "next";
import style from "./page.module.css";

export const metadata: Metadata = {
  title: "Alisa Kutsenko - Circular Order",
  description: "...",
};

export default function Page() {
  return (
    <section className={style.section}>
      <div className={style.circleContainer}>
        <p className={style.text1}>
          Approaching, the author found themselves standing in a perfect circle
          formed by three of those structures. The lights now shifted and were
          shining above each roofless house, revealing the interiors.
        </p>
      </div>

      <VideoGallery
        background={"/spaces/circular-order/background-setup.jpg"}
        videoSources={[
          "/spaces/circular-order/level_2.mp4",
          "/spaces/circular-order/projection.mp4",
        ]}
      />

      <div className={style.sheep}>
        <video width={320} height={320} muted autoPlay loop>
          <source src="/spaces/circular-order/houses_1.mp4" type="video/mp4" />
        </video>

        <video width={320} height={320} muted autoPlay loop>
          <source
            src="/spaces/circular-order/houses_sheep_1.mp4"
            type="video/mp4"
          />
        </video>

        <video width={320} height={320} muted autoPlay loop>
          <source
            src="/spaces/circular-order/houses_2_sheep.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <img
        src="/spaces/circular-order/plan_web.jpg"
        alt="plan"
        className={style.imagePlan}
      />

      <img
        src="/spaces/circular-order/plan_web_m.jpg"
        alt="plan"
        className={style.imagePlanM}
      />

      <img
        src="/spaces/circular-order/elevation-setup.jpg"
        alt="elevation"
        className={style.image}
      />

      <img
        src="/spaces/circular-order/collage.jpg"
        alt="collage"
        className={style.imageCollage}
      />

      <img
        src="/spaces/circular-order/collage_mobile.jpg"
        alt="collage"
        className={style.imageCollageM}
      />

      <img
        src="/spaces/circular-order/1_2000.jpg"
        alt="map"
        className={style.imagePlanLevel2}
      />
      <img
        src="/spaces/circular-order/1_2000_mobile.jpg"
        alt="map"
        className={style.imagePlanLevel2M}
      />

      <img
        src="/spaces/circular-order/1_2000_cut_1_mobile.jpg"
        alt="map"
        className={style.imageCut}
      />

      <img
        src="/spaces/circular-order/1_2000_cut_2_mobile.jpg"
        alt="map"
        className={style.imageCut}
      />

      <img
        src="/spaces/circular-order/1_2000_cut_3_mobile.jpg"
        alt="map"
        className={style.imageCut}
      />
    </section>
  );
}
