Tutsus | Elysian Store

Elysian Store is a small store that the designer always create something new for their own shirt with diffrence photos on the shirt.
Elysian Store created in 1st Sep 2023 by Rithy.

Follow the steps below on how to deploy a vite react app:

01. Create a vite react app
npm create vite@latest

3. Create a new repository on GitHub and initialize GIT
git init 
git add . 
git commit -m "add: initial files" 
git branch -M main 
git remote add origin https://github.com/[USER]/[REPO_NAME] 
git push -u origin main

5. Setup base on vite.config
base: "/[REPO_NAME]/"

7. Create ./github/workflows/deploy.yml and add the code bellow
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: 16

      - name: Install dependencies
        uses: bahmutov/npm-install@v1

      - name: Build project
        run: npm run build

      - name: Upload production-ready build files
        uses: actions/upload-artifact@v2
        with:
          name: production-files
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v2
        with:
          name: production-files
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          
05. Push
git add . 
git commit -m "add: deploy workflow" 
git push

7. Active workflow
Config -> Actions -> General -> Workflow permissions -> Read and Write permissions 
Actions -> failed deploy -> re-run-job failed jobs 
Pages -> gh-pages -> save

06. For code changes
git add . 
git commit -m "fix: some bug" 
git push
