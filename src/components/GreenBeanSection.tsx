import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import { FiCoffee, FiArrowRight } from "react-icons/fi";

export default function GreenBeanSection() {
  const greenBean = siteData.greenBean;

  return (
    <section className="section green-bean-section" id="green-bean">
      <div className="container green-bean-grid">
        <FadeIn className="green-bean-image">
          <img src={greenBean.image} alt={greenBean.imageAlt} />
        </FadeIn>

        <FadeIn className="green-bean-content">
          <p className="eyebrow">
            <FiCoffee />
            {greenBean.eyebrow}
          </p>

          <h2>{greenBean.title}</h2>
          <p>{greenBean.body}</p>

          <a className="btn btn-primary-dark" href={greenBean.href}>
            {greenBean.ctaLabel}
            <FiArrowRight />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}