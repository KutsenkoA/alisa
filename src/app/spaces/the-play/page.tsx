import style from "./page.module.css";
export default function Page() {
  return (
    <section className={style.section}>
      <img src="/spaces/the-play/map.jpg" alt="map" className={style.image} />

      <video muted autoPlay loop className={style.play}>
        <source src="/spaces/the-play/play.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
