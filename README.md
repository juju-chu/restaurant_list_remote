﻿# 我的餐廳清單

## 環境建置與需求 (prerequisites)
+ 開發環境：Visual Studio Code
+ 應用程式架構：Express
+ 模板引擎：Express-Handlebars

## 安裝與執行步驟 (installation and execution)
1. 打開 terminal 輸入指令：git clone https://github.com/juju-chu/restaurant_list_remote.git
2. 進入存放此專案的資料夾
3. 用 nvm 指令安裝 Node.js：nvm install <版號>

只要執行 npm install，就會依 package.json 的清單來安裝套件，安裝後會自動建立 /node_modules 資料夾，把相依的套件統一歸類在這個資料夾裡。


## 功能

### 首頁列出所有餐廳與它們的簡單資料：
+ 餐廳照片
+ 餐廳名稱
+ 餐廳分類
+ 餐廳評分

### 點擊感興趣的餐廳詳細資訊：
+ 類別
+ 地址
+ 電話
+ 描述
+ 圖片

### 尋找餐廳
在尋找餐廳下方欄位輸入餐廳或分類
