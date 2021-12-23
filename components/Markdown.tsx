import ReactMarkdown from 'react-markdown';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { FunctionComponent } from 'react';

interface IProps {
  content: string;
}

const Markdown: FunctionComponent<IProps> = ({ content }) => {
  const components: Partial<any & any> = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');

      return !inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          PreTag='div'
          language={match[1]}
          showLineNumbers={true}
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className ? className : ''} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <article className='prose prose-invert'>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
};

export default Markdown;
