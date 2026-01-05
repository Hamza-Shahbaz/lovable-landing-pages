import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag, DollarSign, Store, Video, Zap } from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Driving Drone Automation",
    description:
      "Automate your ecommerce operations with cutting-edge AI-powered drones for faster delivery and inventory management.",
  },
  {
    icon: DollarSign,
    title: "Amazon FBA Store Automation",
    description:
      "Complete Amazon store management including product research, listing optimization, and inventory control.",
  },
  {
    icon: Store,
    title: "Walmart Store Automation",
    description:
      "Scale your Walmart marketplace presence with automated listing management and order fulfillment.",
  },
  {
    icon: Video,
    title: "TikTok Shop Automation",
    description:
      "Leverage viral content and automated shop management to boost sales on TikTok's growing marketplace.",
  },
  {
    icon: Zap,
    title: "Etsy Automation",
    description:
      "Streamline your handmade and vintage business with smart automation tools designed for Etsy sellers.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-surface-light relative" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Comprehensive Automation Services
            <br />
            Across All{" "}
            <span className="text-gradient-gold">E-Commerce Platforms</span> in
            the USA
          </h2>
          <p className="text-muted-foreground text-lg">
            We specialize in end-to-end automation solutions that transform how
            you sell online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-gold"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
