import ServiceCard from "../components/ServiceCard";
import { services } from "../constants/index";
const Services = () => {
  return (
    <section className="flex flex-wrap justify-center max-container gap-9">
      {services.map((service) => (
        <ServiceCard key={service.imgURL} {...service} />
      ))}
    </section>
  );
};

export default Services;
