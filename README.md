# 我的餐廳清單

## 環境建置與需求 (prerequisites)
+ 開發環境：Visual Studio Code
+ 應用程式架構：Express
+ 模板引擎：Express-Handlebars

## 安裝與執行步驟 (installation and execution)
1. 打開 terminal 輸入指令：git clone https://github.com/juju-chu/restaurant_list_remote.git
2. 進入存放此專案的資料夾
3. 用 nvm 指令安裝 Node.js：nvm install <版號>
  - 只要執行 npm install，就會依 package.json 的清單來安裝套件，安裝後會自動建立 /node_modules 資料夾，把相依的套件統一歸類在這個資料夾裡。
4. 執行
  - npm run start → 等於執行 "node app.js"
  - npm run dev → 等於執行 "nodemon app.js"
  - npm run seed → 等於執行 "node models/seeds/restaurantSeeder.js"

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

### 新增餐廳
點擊新增可增加餐廳

### 刪除
點擊刪除可移除餐廳

### 修改
點擊修改可編輯餐廳資訊

### 搜尋功能（維修中）