import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import phoneMockup from "@/assets/phone-mockup.png";

const features = [
  "AI-Powered Analytics Dashboard",
  "Real-time Inventory Sync",
  "Automated Order Processing",
  "Multi-platform Integration",
  "24/7 Monitoring & Alerts",
];

const Innovation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone Mockup */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl scale-110" />
              
              <img
                src={phoneMockup}
                alt="E-commerce Mobile App"
                className="relative rounded-3xl shadow-2xl w-full"
              />

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-card p-3 rounded-xl border border-border shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium text-foreground">Live Sync</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-12 -left-4 bg-card p-4 rounded-xl border border-border shadow-xl"
              >
                <div className="text-xs text-muted-foreground mb-1">Today's Orders</div>
                <div className="text-xl font-bold text-primary">+234</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Powered By Innovation,
              <br />
              <span className="text-gradient-gold">Driven By Results</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Our cutting-edge platform combines artificial intelligence with
              proven e-commerce strategies to deliver exceptional results for
              your business.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-gold"
              >
                Schedule a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted"
              >
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
