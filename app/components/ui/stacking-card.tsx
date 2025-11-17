// component.tsx
'use client';

import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';

interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] md:-top-[25%] h-[500px] md:h-[550px] w-[90%] md:w-[70%] rounded-md p-4 md:p-10 origin-top`}
      >
        <h2 className="text-xl md:text-2xl text-center font-semibold mb-3 md:mb-0">
          {title}
        </h2>
        <div className={`flex flex-col md:flex-row h-full mt-3 md:mt-5 gap-4 md:gap-10`}>
          <div className={`w-full md:w-[40%] relative md:top-[10%]`}>
            <p className="text-xs md:text-sm leading-relaxed">{description}</p>
            <span className="flex items-center gap-2 pt-2 md:pt-2">
              <a
                href={'#'}
                target="_blank"
                className="underline cursor-pointer text-xs md:text-sm"
              >
                See more
              </a>
              <svg
                width="18"
                height="10"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[22px] md:h-[12px]"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          <div className={`relative w-full md:w-[60%] h-[250px] md:h-full rounded-lg overflow-hidden`}>
            <motion.div className={`w-full h-full`} style={{ scale: imageScale }}>
              <img
                src={url}
                alt="image"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
}

const Component = forwardRef<HTMLElement, ComponentRootProps>(
  ({ projects }, ref) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end'],
    });

    return (
      <main className="bg-white" ref={container}>
        <section className="text-gray-900 h-[70vh] w-full bg-gradient-to-b from-purple-50 to-white grid place-content-center relative">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <h1 className="text-3xl md:text-5xl 2xl:text-7xl px-4 md:px-8 font-bold text-center tracking-tight leading-[120%] relative z-10">
            By Your Side <br /> At Every <span className="text-purple-600">Step</span> 👇
          </h1>
        </section>
        <section className="text-gray-900 w-full bg-white">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

      </main>
    );
  }
);

Component.displayName = 'Component';

export default Component;
