import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import goldenSwirlBg from "@/assets/golden-swirl-bg.png";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStore Pro",
    content:
      "Since implementing their automation platform, we've seen a 150% increase in revenue and reduced our operational costs by 60%. The ROI has been incredible.",
    rating: 5,
    stats: { revenue: "+82%", efficiency: "+65%" },
  },
  {
    name: "Michael Chen",
    role: "Founder, StyleHub",
    content:
      "The team at eCommerce helped us scale from $50K to $500K monthly revenue in just 8 months. Their AI-powered solutions are truly game-changing.",
    rating: 5,
    stats: { revenue: "+900%", growth: "8 months" },
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <img
        src={goldenSwirlBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from businesses that have transformed their operations with our
            platform
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-3xl border border-border relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4 border-t border-border">
                {Object.entries(testimonial.stats).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-2xl font-bold text-primary">{value}</div>
                    <div className="text-muted-foreground text-sm capitalize">
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
