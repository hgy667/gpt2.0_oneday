/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getBuildConfig } from "./config/build";

const buildConfig = getBuildConfig();

export const metadata = {
  title: "ChatGPT 独众传媒",
  description: "Your personal ChatGPT Chat Bot.",
  appleWebApp: {
    title: "ChatGPT 独众传媒",
    statusBarStyle: "default",
  },
  themeColor: "#fafafa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta
          name="theme-color"
          content="#151515"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="version" content={buildConfig.commitId} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      
          <style>
      .div{position: fixed;
    z-index: 10001;
}
/* 定义折叠块的样式 */
      details {
        margin: 1rem 0;
        padding: 1rem;
        background-color: #f6f8fa;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
      }
      summary {
        font-weight: bold;
        cursor: pointer;

      }
    </style>
  </head>
  <body>
    <div class="div"><details>
      <summary>使用文档</summary>
      <p>
    <details>
      <summary>一.左下角小齿轮:</summary>
      <p><ul>
    <li>1.网站密码：输入你的密码即可使用 ChatGPT</li>
    <li>
      
 2.OpenAIKey：如果你自己拥有的秘钥，可以填写自己的，不填即使用公用的秘钥。
    </li>
    <li>
      
 3.OpenAI模型：现阶段只有 gpt3.5 的模型开放使用了，gpt4 还在内测阶段，一但开放我会第一时间更新！！！
    </li>
    <li>
      4.系统角色指令：会在每次提问时添加开头语。主要用于对 ChatGPT 的语气、口头禅这些进行定制。
    </li>
    <li>
      5.思维发散程度：越高 ChatGPT 思维就越发散，越低 ChatGPT 思维越严谨，根据不同的问题可以调节这个选项。
    </li>
    <li>
      6.开启连续对话：开启会联系上下文回答问题，但是对话次数会减半，视个人需求开启或关闭。
    </li>
    <ul></p>
    </details>
    <details>
      <summary>二.输入框右边的三个按钮:</summary>
      <p></ul>
    <li>
      1.对话生成图片，电脑上是复制到剪贴板，手机上是直接下载。
    </li>
    <li>
      2.对话生成 Markdown，复制到剪贴板。
    </li>
    <li>
      3.清空对话。
    </li>
      <ul></p>
    </details>
    <details>
      <summary>三.消息功能:</summary>
      <p></ul>
  <li>
    1.点击每条消息前的头像可以锁定对话，清空对话时不会清除。
  </li>
  <li>
    2.对于提问，可以修改，重新回答，删除。修改是填入输入框。重新回答和删除会自动删除提问和回答。
  </li>
  <li>
    3.对于回答，可以复制，重新回答，删除。重新回答也会自动删除提问和回答。删除只会删除回答。
  </li>
  <li>
    4.Enter 发送，Shift+Enter 换行。
  </li>
  <li>
    5.空格或者 / 搜索问题预设。
  </li>
  <li>
    6.↑ 将最近的一次提问填到输入框里。
  </li>
  <li>
    7.点击顶部标题滚动到顶部，点击输入框滚动到底部。
  </li>
  <ul></p>
    </details>
        <p></div>
      
      <body>{children}</body>
    </html>
  );
}
