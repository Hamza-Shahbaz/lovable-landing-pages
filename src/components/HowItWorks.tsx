import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, LineChart, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Onboarding",
    description:
      "Our team works with you to understand your business goals, current challenges, and automation needs through a comprehensive discovery process.",
  },
  {
    icon: LineChart,
    number: "02",
    title: "Strategy",
    description:
      "We develop a customized automation strategy tailored to your specific platforms and business objectives.",
  },
  {
    icon: Settings,
    number: "03",
    title: "Implementation",
    description:
      "Our experts set up and integrate all automation systems with your existing workflows seamlessly.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Optimization",
    description:
      "Continuous monitoring and optimization to ensure maximum ROI and business growth.",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
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
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A streamlined process to get your e-commerce automation up and
            running quickly
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-border transform -translate-y-1/2" />

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-card border-4 border-primary rounded-full flex items-center justify-center relative z-10">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <span className="text-6xl font-bold text-muted/20 absolute -top-4 left-1/2 transform -translate-x-1/2">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3 relative">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
