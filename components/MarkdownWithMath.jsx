import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import Markdown from "react-markdown";

// 自定义渲染器，只渲染katex-mathml部分

const MarkdownWithMath = ({ content }) => {
  return (
    <Markdown
      children={content}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    />
  );
};

export default MarkdownWithMath;
