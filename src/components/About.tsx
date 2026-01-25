export const About = () => {
  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">

          {/* Eyebrow text */}
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            About Me
          </span>

          {/* Main heading */}
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            Building ideas into
            <span className="text-primary"> meaningful digital experiences</span>
          </h2>

          {/* Soft divider */}
          <div className="w-20 h-[2px] bg-primary/50 mx-auto my-10 rounded-full" />

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I’m a self-taught developer driven by curiosity and creativity, with a strong
            interest in <span className="text-foreground font-medium">AI</span>,
            <span className="text-foreground font-medium"> web technologies</span>, and
            thoughtful product design.
            <br /><br />
            I love building bots, apps, and platforms that solve real problems while staying
            clean, scalable, and user-focused. I believe good software is not just functional,
            but simple, elegant, and purposeful.
          </p>

          {/* Subtle signature */}
          <p className="mt-10 text-sm text-muted-foreground italic">
            Always learning. Always building. Always improving.
          </p>

        </div>
      </div>
    </section>
  );
};
