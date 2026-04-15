import HeroSection from '@/components/HeroSection';
import QuoteSection from '@/components/QuoteSection';
import ArticleSection from '@/components/ArticleSection';
import DecorationLayer from '@/components/DecorationLayer';
import Bubbles from '@/components/Bubbles';
import ScrollRevealText from '@/components/ScrollRevealText';
import LightRays from '@/components/LightRays';

const Index = () => {
  return (
    <div className="relative ocean-base-gradient">
      {/* Foreground overlay - BBC style top layer */}
      <div className="ocean-foreground-overlay" />

      {/* Hero - surface level */}
      <HeroSection />

      {/* === SURFACE ZONE === */}
      <div className="relative overflow-hidden">
        <DecorationLayer variant="surface" />
        <Bubbles />

        <ScrollRevealText className="text-xl md:text-3xl lg:text-4xl text-foreground/90 italic">
          The ocean is increasingly filling with plastic waste.
        </ScrollRevealText>

        <div className="max-w-3xl mx-auto px-6 py-8">
          <h3 className="font-display text-lg md:text-xl text-foreground/80 italic text-center leading-relaxed">
            The Healthy Seas foundation, in co-operation with major partners like Hyundai Motor Company, is on a mission to clean up "ghost gear" while raising awareness about protecting the ocean environment.
          </h3>
        </div>

        <QuoteSection
          gradientClass=""
          quotes={[
            { text: "When we arrived, we saw big white rocks along the shoreline" },
            { text: "But drawing closer, we realised they were styrofoam blocks." },
            { text: "When we stepped on them, we began to sink into waste up to our knees." },
            { text: "It smelled toxic – so toxic that butterflies were drawn to it because it smelled so sweet." },
            {
              text: "Ants had started to build their nests in the waste. It was a big mess.",
              author: "Veronika Mikos",
              title: "founder and director, Healthy Seas",
            },
          ]}
        />
      </div>

      {/* === MID DEPTH ZONE === */}
      <div className="relative ocean-gradient-mid overflow-hidden">
        <DecorationLayer variant="mid" />
        <LightRays />

        <ArticleSection
          gradientClass=""
          title="Collaboration"
          subtitle="Arriving on the island of Ithaca, Greece, Mikos hadn't been prepared for the sheer scale of the challenge Healthy Seas faced. A beach strewn with discarded litter, old fishing nets, and rubbish that had floated ashore – a gargantuan task to clean up."
          paragraphs={[
            'And under the ocean\'s surface lie "ghost farms", where fish farming debris, like nets, buckets, lines and traps, are left in the sea along kilometres and kilometres of coastlines.',
            'Locals reached out to Healthy Seas; a foundation committed to cleaning up marine pollution as well as raising awareness on ocean health. In 2021, Mikos and a crack team from Healthy Seas teamed up with Hyundai to co-ordinate the big Ithaca clean-up, repurposing waste fishing nets from the sea to produce material for Hyundai floor mats.',
          ]}
        />

        <QuoteSection
          gradientClass=""
          quotes={[
            {
              text: "Ghost farms are significantly worse than floating nets because of the sheer size",
              author: "Veronika Mikos",
              title: "founder and director, Healthy Seas",
            },
          ]}
        />
      </div>

      {/* === DEEP ZONE === */}
      <div className="relative ocean-gradient-deep overflow-hidden">
        <DecorationLayer variant="deep" />
        <Bubbles />

        <ArticleSection
          gradientClass=""
          title="The scale of ocean garbage"
          subtitle='"We have just one ocean, a continuous amount of water, and that ocean is filled with [up to an estimated] 11 million tonnes of waste"'
          paragraphs={[
            'Much of this waste drifts with the current, releasing chemicals, or traps fish in its flotsam. One such culprit is ghost nets: nets discarded by the fishing industry that continue to scoop up fish, dolphins, jellyfish, and sharks long after they\'ve served their initial purpose.',
            'These discarded nets continue to do their work and are often undetectable by animals that can\'t locate them using sonar. Nets and fishing lines may also scrape and break coral and block out sunlight needed by organisms below.',
          ]}
        />

        <ScrollRevealText className="text-xl md:text-3xl lg:text-4xl text-foreground font-light italic">
          Plastics, polystyrenes and other waste continue to decompose and release chemicals into the water.
        </ScrollRevealText>

        <ArticleSection
          gradientClass=""
          title=""
          paragraphs={[
            'This waste, of course, is not just appearing in the ocean, it\'s being created by people on land.',
            '"Education is an important piece of the puzzle," says Mikos, "as it\'s critical that people understand the role each and every one of us play when it comes to protecting the oceans."',
            'Since 2021, Hyundai has supported the activities of Healthy Seas, which include not only significant ocean cleanups but also running educational programmes and community engagement to future-proof the ocean.',
          ]}
        />
      </div>

      {/* === ABYSS ZONE - Making use of ghost gear === */}
      <div className="relative ocean-gradient-abyss overflow-hidden">
        <DecorationLayer variant="abyss" />
        <Bubbles />

        <ArticleSection
          gradientClass=""
          title="Making use of ghost gear"
          subtitle="Once Healthy Seas has fished waste out of the sea, there remains the question of what to do with it."
          paragraphs={[
            'Aquafil, a textiles company specialising in regenerated nylon, was one of Healthy Sea\'s founding partners in 2013. Aquafil has been a pioneer of the circular economy for textiles by leading in the use of regenerated nylon, a fibre that can be recycled indefinitely.',
            'Ghost gear, in short, is returned to life. Hyundai invests in removing waste from the ocean, some of which is processed by Aquafil. The material is then made into usable mats that fit snugly into some of Hyundai\'s cars.',
          ]}
        />

        <QuoteSection
          gradientClass=""
          quotes={[
            {
              text: "We've changed the manufacturing process from a linear to a circular one.",
              author: "Maria Giovanna Sandrini",
              title: "chief communications officer, Aquafil",
            },
          ]}
        />

        <ArticleSection
          gradientClass=""
          title="Education as a solution"
          subtitle="While cleaning up the oceans and reducing waste is important, prevention is better than cure."
          paragraphs={[
            'A significant part of the work done by Healthy Seas and Hyundai is to educate both young and old across the 20 countries in which the foundations work, including those in the Baltics and around the Red Sea.',
            'Healthy Seas prioritises showing rather than telling as part of their educational programme. The programmes focus on children aged 6-18, taking place along coastlines or online.',
          ]}
        />

        <QuoteSection
          gradientClass=""
          quotes={[
            {
              text: "And everything, after its lifetime, should become a material for something else. It comes full circle.",
              author: "Diana Kloster",
              title: "head of CMF, Hyundai Korea",
            },
          ]}
        />
      </div>

      {/* === FOOTER - Hyundai & Healthy Seas (deepest) === */}
      <div className="relative overflow-hidden">
        {/* Video background - no filters, no blend, pure original */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/profondeur_marine.webm" type="video/webm" />
        </video>

        {/* Top gradient to blend from abyss into footer video */}
        <div
          className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
          style={{
            height: '350px',
            background: 'linear-gradient(180deg, hsl(223 97% 10%) 0%, hsl(223 97% 10% / 0.85) 60%, transparent 100%)',
          }}
        />

        <DecorationLayer variant="footer" />
        <Bubbles />

        <div className="relative z-10 py-32 md:py-48 px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4 font-semibold">
            Fin de la plongée - merci de votre visite
          </h2>
          <p className="font-body text-foreground/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            partager ce carnet de plongée avec vos amis et votre famille pour sensibiliser à la beauté de l'océan et à l'importance de le protéger
          </p>
        </div>

        {/* Bottom coral reef overlaid on top */}
        <div className="relative z-20">
          <img
            src="/images/Reef-fish-2.webp"
            alt="Coral reef"
            className="w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
