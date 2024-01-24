Svelteプロジェクトを構築するための`create-svelte`を使った手順をご説明します。

### プロジェクトの作成

以下のコマンドを使って、新しいSvelteプロジェクトを作成できます。

bashCopy code

`# 現在のディレクトリに新しいプロジェクトを作成 npm create svelte@latest  # my-appという名前の新しいプロジェクトを作成 npm create svelte@latest my-app`

### 開発

プロジェクトを作成し、`npm install`（または`pnpm install`や`yarn`）で依存関係をインストールしたら、開発サーバーを起動します。

bashCopy code

`npm run dev  # サーバーを起動し、新しいブラウザタブでアプリを開く npm run dev -- --open`

### ビルド

アプリの本番バージョンを作成するには：

bashCopy code

`npm run build`

本番ビルドをプレビューするには`npm run preview`を使用します。

> アプリをデプロイするには、対象環境用の[アダプタ](https://kit.svelte.dev/docs/adapters)をインストールする必要がある場合があります。# playcanvas-sveltekit
