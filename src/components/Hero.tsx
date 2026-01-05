import { motion } from "framer-motion";
import { ArrowRightIcon, Check, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardPreview from "@/assets/dashboard-preview.png";

const stats = [
  { value: "600+", label: "Business Powered" },
  { value: "$85M", label: "Revenue Generated" },
  { value: "98%", label: "Client Satisfaction" },
];

const features = [
  "Streamline your operations with AI",
  "Increase conversions by 40%",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl text-[#000000] lg:text-6xl font-bold leading-tight mb-6">
              Automate Your <br />
              {/* ffd700*/}
              <span className="text-[#ffd700]">E-Commerce</span>
              <br />
              <span className="text-[#ffd700]">Business.</span>
            </h1>

            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              From product research to multi-platform integration, we handle the
              technical, logistical and sales processes so you can focus on
              growth.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 shadow-gold"
              >
                Get Started
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground"
              >
                <ChevronRightIcon className="w-4 h-4 fill-[#000000]" />
                Schedule a Consultation
              </Button>
            </div>

            {/* <div className="space-y-3 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div> */}

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl" />

              {/* Dashboard Image */}
              <img
                src={dashboardPreview}
                alt="E-commerce Dashboard Preview"
                className="relative rounded-2xl shadow-2xl border border-border w-full"
              />

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl border border-border shadow-xl"
              >
                <div className="text-sm text-muted-foreground">
                  Monthly Revenue
                </div>
                <div className="text-2xl font-bold text-primary">$247,500</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
