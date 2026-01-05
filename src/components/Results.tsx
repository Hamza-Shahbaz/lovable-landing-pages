import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "Amazon", logo: "🛒" },
  { name: "Walmart", logo: "🏪" },
  { name: "eBay", logo: "🛍️" },
  { name: "Etsy", logo: "🎨" },
  { name: "Shopify", logo: "🏬" },
  { name: "TikTok", logo: "📱" },
];

const stats = [
  { value: "$500K+", label: "Average Annual Revenue Increase" },
  { value: "85%", label: "Reduction in Manual Tasks" },
  { value: "3x", label: "Faster Order Processing" },
  { value: "99.9%", label: "Platform Uptime" },
];

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="clients">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Proven Results. <span className="text-gradient-gold">Real Scale.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by leading e-commerce businesses worldwide
          </p>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="w-24 h-24 bg-card rounded-2xl border border-border flex items-center justify-center hover:border-primary/50 transition-colors group"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform">
                {partner.logo}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-primary text-primary-foreground p-8 rounded-2xl text-center"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
