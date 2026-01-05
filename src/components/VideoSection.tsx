import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Watch How We
            <br />
            <span className="text-gradient-gold">Transform Businesses</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See our automation platform in action and discover how we help
            businesses scale efficiently
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative aspect-video bg-card rounded-3xl overflow-hidden border border-border shadow-2xl">
            {!isPlaying ? (
              <>
                {/* Video Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-primary/10" />

                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-gold-lg"
                  >
                    <Play className="w-10 h-10 text-primary-foreground ml-1" />
                  </motion.div>
                </button>

                {/* Decorative elements */}
                <div className="absolute top-8 left-8 text-muted-foreground font-medium">
                  eCommerce Automation
                </div>
                <div className="absolute bottom-8 right-8 text-muted-foreground text-sm">
                  Duration: 2:45
                </div>
              </>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="E-commerce Automation Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
