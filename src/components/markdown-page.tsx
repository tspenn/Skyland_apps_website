import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownPage({
  title,
  intro,
  content,
}: {
  title?: string;
  intro?: string;
  content: string;
}) {
  return (
    <main className="container-narrow py-12 md:py-16">
      {title && (
        <h1 className="text-4xl md:text-5xl mb-3 text-[color:var(--color-gold)]">
          {title}
        </h1>
      )}
      {intro && (
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">{intro}</p>
      )}
      <article className="prose-sky">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </main>
  );
}
