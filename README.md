# le panier

ル パニエのWebサイトです。Next.jsの静的エクスポートをCloudflare Workersで配信します。

## 開発とビルド

Node.js 24を使用します。`.env.example`を参考に、`.env.local`に`MENU_API_URL`を設定してください。
ビルド時に週替わり・日替わりメニューAPIを取得してHTMLへ埋め込むため、APIに接続できる環境が必要です。

```bash
npm ci
npm run dev
```

`npm run build`で`out/`に公開ファイルを出力します。

## デプロイ

- Cloudflareアカウント: `rdlabo`（`57bafd0e2348b266e72e821f03157b41`）
- Worker名: `panier`
- 公開先: `le-panier.net` / `www.le-panier.net`
- 配信ファイル: `out/`（404ページを含むNext.jsの静的エクスポート）

ローカルからは`npm run deploy`でビルドと本番デプロイを実行します。

GitHub Actionsは以下を実行します。

- mainへのpush: 本番デプロイ
- 同一リポジトリ内のPR: `versions upload`で本番を変更せずプレビューを作成。ビルド済みの`out/`も`panier-static`アーティファクトに7日間保存
- 定期実行: 毎週月曜の日本時間00:00、06:00、12:00、18:00にメニューを再取得し、本番へ配信
- 定期実行ワークフローの`workflow_dispatch`: 手動でメニューを更新して配信

本番デプロイと定期デプロイは同じconcurrencyグループで直列実行します。

### GitHub Repository Secrets

| 名前                   | 用途                                                                                                              |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `MENU_API_URL`         | ビルド時に取得するメニューAPIのURL                                                                                |
| `CLOUDFLARE_API_TOKEN` | rdlaboアカウントのWorkersスクリプト編集、およびle-panier.netゾーンの読み取り・Workersルート編集権限を持つトークン |

独自ドメインの配信には、`le-panier.net`をrdlaboアカウントへ追加し、
既存DNSレコードを確認したうえでCloudflare指定のネームサーバーに切り替える必要があります。
Firebase向けのA/CNAMEレコードがWorkerの独自ドメイン設定と競合する場合は、
旧レコードを控えてからWorker用レコードに置き換えてください。
