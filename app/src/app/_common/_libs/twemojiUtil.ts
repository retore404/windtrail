import twemoji from "twemoji";
import sanitizeHtml from "sanitize-html";

export function renderTwemoji(text: string) {
  // まず，入力値をサニタイズ（すべてのタグを認めない）
  const sanitizedInput = sanitizeHtml(text, {
    allowedTags: [], // 何も認めない
    disallowedTagsMode: "escape", // エスケープ処理
  });

  // サニタイズした文字列をtwemojiで文字列parseしてreturnする
  return twemoji.parse(sanitizedInput, {
    folder: "svg",
    ext: ".svg",
  });
}
