import ScrollRevealText from './ScrollRevealText';

interface QuoteSectionProps {
  quotes: { text: string; author?: string; title?: string }[];
  gradientClass?: string;
}

const QuoteSection = ({ quotes, gradientClass = 'ocean-gradient-mid' }: QuoteSectionProps) => {
  return (
    <div className={`relative ${gradientClass}`}>
      {quotes.map((quote, i) => (
        <div key={i}>
          <ScrollRevealText className="text-2xl md:text-4xl lg:text-5xl text-foreground font-light italic leading-tight">
            "{quote.text}"
          </ScrollRevealText>
          {quote.author && (
            <div className="text-center -mt-20 mb-20">
              <p className="font-display text-lg md:text-xl text-foreground/80 font-semibold">
                {quote.author}
              </p>
              {quote.title && (
                <p className="font-body text-sm text-foreground/50 mt-1">
                  {quote.title}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuoteSection;
