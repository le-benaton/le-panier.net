## Commands

```bash
npm run dev      # 開発サーバー起動 (localhost:3000)
npm run build    # 静的エクスポートビルド (out/ ディレクトリに出力)
npm run lint     # ESLint
```

デプロイは Firebase Hosting（サイト名: `benaton-panier`）へ `out/` ディレクトリを公開する。

```bash
firebase deploy --only hosting
```

`npm run dev` は常に実行済みとしてください。

## アーキテクチャ

Next.js 15 + React 19 の静的サイト（`output: "export"`）。サーバーサイドレンダリングなし。

### ファイル構成

```
src/app/
  layout.tsx        # ルートレイアウト（メタデータ、フォント設定）
  page.tsx          # メインページ（唯一のページ）
  logo.tsx          # ロゴコンポーネント
  select-dialog.tsx # 名刺QRコード用ダイアログ（?from=card で表示）
  globals.css       # グローバルスタイル
public/
  images/           # 店舗写真・SVGイラスト
  favicon/          # ファビコン各種
out/                # ビルド出力（Firebase Hosting の公開ディレクトリ）
```

### SelectDialog の動作

`select-dialog.tsx` は `?from=card` クエリパラメータが存在するときのみ開く。名刺のQRコードから来たユーザー向けに、Google Map・Instagram・LINE公式アカウントへのリンクを提示する。

### スタイリング

Tailwind CSS v3。ダークモードは CSS クラスベース（`dark:` プレフィックス）。UI コンポーネントは Headless UI v2 を使用。

## 開発手法

YAGNIの原則に従い、Baby stepsでペアプロを行ってください。

- YAGNI原則: 今必要のない機能は実装しない
- Baby steps: 小さく確実に進む、一度に多くを変更しない
- 可読性優先: 最初は動作する汚い状態でOK、抽象化は後回し
