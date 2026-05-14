import { useNavigate } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import QuoteSection from '@/components/QuoteSection';
import ArticleSection from '@/components/ArticleSection';
import DecorationLayer from '@/components/DecorationLayer';
import Bubbles from '@/components/Bubbles';
import ScrollRevealText from '@/components/ScrollRevealText';
import LightRays from '@/components/LightRays';

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="relative ocean-base-gradient">
      {/* Foreground overlay - BBC style top layer */}
      <div className="ocean-foreground-overlay" />

      {/* Hero - surface level */}
      <HeroSection />

      {/* Vidéo collée sous le hero — le corail du header coule derrière */}
      <div className="relative z-10 w-full flex justify-center px-6 pb-4">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-100xl object-contain block rounded-sm"
          style={{ maxHeight: '625px' }}
        >
          <source src="/videos/presentationenzoschneider.MP4" type="video/mp4" />
        </video>
      </div>

      {/* === SURFACE ZONE === */}
      <div className="relative overflow-hidden">
        <DecorationLayer variant="surface" />
        <Bubbles />

        <ScrollRevealText className="text-xl md:text-3xl lg:text-4xl text-foreground/90 italic">
         👌 Êtes-vous prêt à plonger dans l'aventure avec moi ?
        </ScrollRevealText>

        <div className="max-w-3xl mx-auto px-6 py-8">
          <h3 className="font-display text-lg md:text-xl text-foreground/80 italic text-center leading-relaxed">
            Plongeur niveau 2 FFESSM, j'ai eu la chance d'explorer des fonds marins d'une beauté rare. A chaque descente, le constat est là : ébloui par cette nature que peu ont la chance de voir.
          </h3>
        </div>

        <ScrollRevealText className="text-2xl md:text-4xl lg:text-5xl text-foreground font-light italic leading-tight">
          "En Méditerranée, mon berceau, là où j'ai côtoyé mes premiers poissons et découvert des merveilles sous-marines si près de nous."
        </ScrollRevealText>

        {/* Bouton galerie Méditerranée */}
        <div className="flex flex-col items-center pb-8 -mt-16">
          {/* Limace de mer posée sur le bouton */}
          <img
            src="/images/limace_de_mer.webp"
            alt="Limace de mer"
            className="w-5 md:w-8 object-contain mb-[-8px] relative z-10 pointer-events-none translate-x-20 opacity-60"
          />
          <button
            onClick={() => navigate('/galerie-mediterranee')}
            className="font-body text-sm tracking-widest uppercase px-8 py-3 border border-foreground/30 text-foreground/70 hover:border-foreground/70 hover:text-foreground transition-colors rounded-sm"
          >
            Voir la galerie Méditerranée
          </button>
        </div>

        <QuoteSection
          gradientClass=""
          quotes={[
            { text: "C'est à ce moment-là que tu comprends pourquoi les plongeurs sont accros." },
            { text: "De la Méditerranée à la Mer Rouge, chaque mer a sa propre personnalité — mais toutes méritent le même respect." },
          ]}
        />

        <ScrollRevealText className="text-2xl md:text-4xl lg:text-5xl text-foreground font-light italic leading-tight">
          "En Mer Rouge, la biodiversité est à couper le souffle. Chaque plongeée est une explosion de couleurs et de vie."
        </ScrollRevealText>

        {/* Bouton galerie Mer Rouge */}
        <div className="flex flex-col items-center pb-8 -mt-16">
          {/* Limace de mer posée sur le bouton */}
          <img
            src="/images/limace_de_mer1.webp"
            alt="Limace de mer"
            className="w-5 md:w-8 object-contain mb-[-9px] relative z-10 pointer-events-none -translate-x-16 opacity-60"
          />
          <button
            onClick={() => navigate('/galerie-mer-rouge')}
            className="font-body text-sm tracking-widest uppercase px-8 py-3 border border-foreground/30 text-foreground/70 hover:border-foreground/70 hover:text-foreground transition-colors rounded-sm"
          >
            Voir la galerie Mer Rouge
          </button>
        </div>

        <QuoteSection
          gradientClass=""
          quotes={[
            {
              text: "La mer ne peut pas parler. C'est à nous de le faire à sa place.",
              author: "Enzo Schneider",
              title: "plongeur niveau 2 FFESSM",
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
          title="Ce que l'on voit sous l'eau"
          subtitle="Quand on plonge régulièrement, on finit par développer un regard différent. On voit l'eau non plus comme un décor, mais comme un milieu vivant, complexe, et menacé."
          paragraphs={[
            'Lors de mes plongées, j\'ai pu observer des récifs coralliens d\'une grande diversité — mais aussi des zones entières où les déchets abandonnés étouffent la vie. Ces poisons fantômes dérivent en silence, invisibles depuis la surface, dévastateurs en dessous.',
            'Passer son niveau 2 FFESSM, c\'est apprendre à évoluer en autonomie, à gérer sa flottabilité, à observer sans perturber. C\'est aussi réaliser que chaque plongeur a une responsabilité : celle de témoigner de ce qu\'il voit, et d\'agir.',
          ]}
        />

        <QuoteSection
          gradientClass=""
          quotes={[
            {
              text: "Un récif en bonne santé, c'est des centaines d'espèces. Un récif étouffé sous les filets, c'est le silence.",
              author: "Enzo Schneider",
              title: "plongeur niveau 2 FFESSM",
            },
          ]}
        />
      </div>

      {/* === DEEP ZONE === */}
      <div className="relative ocean-gradient-deep">
        <DecorationLayer variant="deep" />
        <Bubbles />

        <ArticleSection
          gradientClass=""
          title="Ce que les chiffres cachent"
          subtitle={`On parle de millions de tonnes de déchets dans les océans. Mais derrière ces chiffres, il y a des endroits précis — des spots de plongée que j'ai fréquentés — où la réalité est visible à l'œil nu.`}
          paragraphs={[
            'Des plastiques fragmentés, des cannettes enfouies dans le sable, des filets enchevêtrés dans les gorgones. Ce n\'est pas une catastrophe abstraite : c\'est ce que l\'on voit à cinq mètres de profondeur, à quelques kilomètres des côtes.',
            'En tant que plongeur, on devient malgré soi un témoin. Et témoigner, c\'est la première étape pour que les choses changent. Ce carnet de plongée, c\'est ma façon de partager ce que j\'ai vu.',
          ]}
        />

        <ScrollRevealText className="text-xl md:text-3xl lg:text-4xl text-foreground font-light italic">
          Sous l'eau, rien ne disparaît vraiment. Tout se fragmente, se dilue, se propage.
        </ScrollRevealText>

        <ArticleSection
          gradientClass=""
          title=""
          paragraphs={[
            'Ce qui me frappe le plus, c\'est que les déchets ne tombent pas du ciel. Ils viennent de nous — de nos habitudes, de notre consommation, de notre négligence. L\'océan ne pollue pas l\'océan.',
            'La plongée m\'a appris l\'humilité face à la nature. Elle m\'a aussi donné une conviction : si on peut descendre voir la beauté de ces fonds, on peut aussi descendre voir les dégâts — et en parler franchement.',
            'Ce carnet n\'a pas la prétention de changer le monde. Mais si une personne, après l\'avoir lu, regarde l\'océan différemment, c\'est déjà quelque chose.',
          ]}
        />
      </div>

      {/* === ABYSS ZONE - Making use of ghost gear === */}
      <div className="relative ocean-gradient-abyss overflow-hidden">
        <DecorationLayer variant="abyss" />
        <Bubbles />

        <ArticleSection
          gradientClass=""
          title="Agir à son échelle"
          subtitle="Entre deux plongées, j'ai commencé à m'interroger sur ce que je pouvais faire concrètement. La réponse n'est pas forcément spectaculaire."
          paragraphs={[
            'Ramasser un déchet en remontant. Signaler un filet abandonné. Participer à des plongées de nettoyage organisées par des clubs ou des associations. Ce sont des gestes simples, mais qui comptent quand ils sont multipliés.',
            'Des initiatives comme Healthy Seas montrent qu\'il est possible d\'aller plus loin : transformer les filets récupérés en matière première, fermer la boucle entre la pollution et la création. C\'est le genre de démarche qui donne envie de s\'impliquer davantage.',
          ]}
        />

        <QuoteSection
          gradientClass=""
          quotes={[
            {
              text: "La mer m'a tout appris : la patience, l'observation, le respect. Elle m'a aussi appris que rien n'est acquis.",
              author: "Enzo Schneider",
              title: "plongeur niveau 2 FFESSM",
            },
          ]}
        />

        <ArticleSection
          gradientClass=""
          title="Pourquoi ce carnet"
          subtitle="Ce projet est né d'une envie simple : partager ce que la plongée m'apporte, et ce qu'elle m'oblige à voir."
          paragraphs={[
            'Chaque spot a son histoire. Ses couleurs, ses habitants, ses odeurs même — oui, sous l\'eau on perçoit des choses que les photos ne retransmettent pas. Ce carnet est une tentative de mettre des mots et des images sur des expériences qui méritent d\'être partagées.',
            'Mais c\'est aussi un espace pour parler honnêtement de l\'état de nos fonds marins. Pas pour culpabiliser, mais pour sensibiliser. Parce que ce qu\'on ne connaît pas, on ne le protège pas.',
          ]}
        />

        <QuoteSection
          gradientClass=""
          quotes={[
            {
              text: "Protéger l'océan, ce n'est pas renoncer à le fréquenter. C'est apprendre à y être avec respect.",
              author: "Enzo Schneider",
              title: "plongeur niveau 2 FFESSM",
            },
          ]}
        />
      </div>

      {/* === FOOTER - Hyundai & Healthy Seas (deepest) === */}
      <div className="relative">
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
            Fin de cette plongée, mais pas de l'aventure
          </h2>
          <p className="font-body text-foreground/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
           merci d'avoir exploré les profondeurs avec moi à travers ce carnet de plongée digital. J'espère que vous avez apprécié découvrir les différentes plongées, les espèces fascinantes que j'ai rencontrées et les anecdotes qui les accompagnent. N'hésitez pas à revenir régulièrement pour voir mes nouvelles aventures sous-marines et partager vos propres expériences de plongée !
          </p>
          <p className="font-body text-foreground/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Enzo SCHNEIDER
          </p>
        </div>

        {/* Bottom — foreground + footer coral par-dessus */}
        <div className="relative z-20">
          <img
            src="/images/Footer-foreground_1.webp"
            alt=""
            className="w-full object-cover object-top"
          />
          <img
            src="/images/footer-coral.webp"
            alt=""
            className="absolute bottom-0 left-0 w-full object-cover object-bottom pointer-events-none"
            style={{ filter: 'brightness(0.08)' }}
          />
          {/* 5 poissons sombres au-dessus du corail */}
          <img src="/images/fish-1.webp" alt="" className="absolute pointer-events-none select-none" style={{ bottom: '18%', left: '8%', width: '70px', filter: 'brightness(0.09)', transform: 'scaleX(-1) rotate(-25deg)', zIndex: 30 }} />
          <img src="/images/fish-4.webp" alt="" className="absolute pointer-events-none select-none" style={{ bottom: '22%', left: '22%', width: '55px', filter: 'brightness(0.09)', transform: 'scaleX(-1) rotate(8deg)', zIndex: 30 }} />
          <img src="/images/fish-2.webp" alt="" className="absolute pointer-events-none select-none" style={{ bottom: '15%', left: '45%', width: '65px', filter: 'brightness(0.09)', transform: 'scaleX(-1) rotate(-14deg)', zIndex: 30 }} />
          <img src="/images/fish-3.webp" alt="" className="absolute pointer-events-none select-none" style={{ bottom: '20%', right: '22%', width: '50px', filter: 'brightness(0.09)', transform: 'scaleX(1) rotate(-6deg)', zIndex: 30 }} />
          <img src="/images/fish-4.webp" alt="" className="absolute pointer-events-none select-none" style={{ bottom: '16%', right: '7%', width: '60px', filter: 'brightness(0.09)', transform: 'scaleX(1) rotate(-23deg)', zIndex: 30 }} />
        </div>
      </div>
    </div>
  );
};

export default Index;
