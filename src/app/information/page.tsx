import { Metadata } from "next";
import style from "./page.module.css";

export const metadata: Metadata = {
  title: "Alisa Kutsenko - Info",
  description: "...",
};

export default function Page() {
  return (
    <section className={style.section}>
      <div className={style.text}>
        <h4>“No People Here Apart From Myself”</h4>
      </div>

      <img
        src="/information/diagram.jpg"
        alt="diagram"
        className={style.imageDiagram}
      />

      <img
        src="/information/diagram_mobile.jpg"
        alt="diagram"
        className={style.imageDiagramM}
      />

      <div className={style.text}>
        <p>
          The reality is multifaceted and we are never able to see everything at
          the same time. What we perceive instead are levels of cognition, that
          are variations of the same place. The site on the Isle of Mull exists
          within different levels of contraction or relaxation done by a subject
          to the landscape. The more our consciousness contracts the elements
          together, the less degree of detail is shown. The contraction,
          however, is not a sequence of repetitive actions, but rather a fusion
          of elements into a coherent whole. It is the action that we are
          conducting constantly, establishing connections and forming the space.
          Each level contains a totality of elements but keeps them fused into
          different forms, different “wholes”, while the others remain obscured.
          Atoms do not constitute a rock, rocks and soil do not constitute a
          hill, hills and rivers do not constitute a valley, valleys and clouds
          do not constitute a storm. The story takes us through three different
          levels: systematic order, circular order, and chaos. These spaces are
          constructed by taking bits of reality and combining them within the
          rooms of the AA, which are assembled through film. The “alternative
          reality” is then created within the actual site, the “universal space”
          that contains everything at once.
        </p>
      </div>

      <img src="/information/plan.jpg" alt="plan" className={style.imagePlan} />

      <img
        src="/information/plan_mobile.jpg"
        alt="plan"
        className={style.imagePlanM}
      />

      <img
        src="/information/perspective.jpg"
        alt="elevation"
        className={style.imagePerspective}
      />

      <img
        src="/information/perspective_mobile.jpg"
        alt="collage"
        className={style.imagePerspectiveM}
      />
    </section>
  );
}
