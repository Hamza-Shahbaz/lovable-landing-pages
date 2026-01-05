import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-primary relative overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready To Scale
              <br />
              Your Business?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Join hundreds of successful e-commerce businesses that have
              transformed their operations with our automation platform.
            </p>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card p-8 rounded-3xl shadow-2xl">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Get Started Today
              </h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                  />
                  <Input
                    placeholder="Last Name"
                    className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                />
                <Input
                  placeholder="Company Name"
                  className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                >
                  Submit
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
