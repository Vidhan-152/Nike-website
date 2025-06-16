import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You&nbsp;
          <span className="text-coral-red inline-block mt-3">Super</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Quality</span>{" "}
          Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium quality shoes for every step you take, blending style
          and comfort seamlessly.Experience the perfect fusion of style and
          comfort with our premium quality shoes, designed to elevate your every
          step. From classic designs to modern trends.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our collection is curated to meet the highest standards of quality and style.</p>

        <div className="mt-11">

        <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
    <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
