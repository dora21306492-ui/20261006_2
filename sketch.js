// 宣告目前顯示的畫面狀態。
let screen = "home";

// 宣告每次測驗抽出的題目數量。
const quizLength = 5;

// 宣告選項按鈕的主要顏色。
const optionColor = "#073b4c";

// 宣告正確答案的顏色。
const correctColor = "#2baa8b";

// 宣告錯誤答案的顏色。
const wrongColor = "#f94144";

// 宣告彩帶的數量。
const confettiAmount = 90;

// 宣告本次測驗的數學題庫。
const questionBank = [
  // 建立第 1 題。
  { question: "3 + 5 = ?", options: ["6", "7", "8", "9"], answer: 2 },

  // 建立第 2 題。
  { question: "12 - 7 = ?", options: ["4", "5", "6", "7"], answer: 1 },

  // 建立第 3 題。
  { question: "4 × 3 = ?", options: ["7", "10", "12", "14"], answer: 2 },

  // 建立第 4 題。
  { question: "20 ÷ 5 = ?", options: ["3", "4", "5", "6"], answer: 1 },

  // 建立第 5 題。
  { question: "9 + 6 = ?", options: ["13", "14", "15", "16"], answer: 2 },

  // 建立第 6 題。
  { question: "18 - 9 = ?", options: ["7", "8", "9", "10"], answer: 2 },

  // 建立第 7 題。
  { question: "6 × 4 = ?", options: ["20", "24", "28", "32"], answer: 1 },

  // 建立第 8 題。
  { question: "36 ÷ 6 = ?", options: ["5", "6", "7", "8"], answer: 1 },

  // 建立第 9 題。
  { question: "25 + 17 = ?", options: ["40", "41", "42", "43"], answer: 2 },

  // 建立第 10 題。
  { question: "50 - 28 = ?", options: ["20", "21", "22", "23"], answer: 2 },

  // 建立第 11 題。
  { question: "7 × 8 = ?", options: ["54", "56", "58", "64"], answer: 1 },

  // 建立第 12 題。
  { question: "72 ÷ 9 = ?", options: ["6", "7", "8", "9"], answer: 2 },

  // 建立第 13 題。
  { question: "14 + 29 = ?", options: ["41", "42", "43", "44"], answer: 2 },

  // 建立第 14 題。
  { question: "63 - 35 = ?", options: ["26", "27", "28", "29"], answer: 2 },

  // 建立第 15 題。
  { question: "9 × 5 = ?", options: ["40", "45", "50", "55"], answer: 1 },

  // 建立第 16 題。
  { question: "81 ÷ 9 = ?", options: ["7", "8", "9", "10"], answer: 2 },

  // 建立第 17 題。
  { question: "100 - 46 = ?", options: ["52", "53", "54", "55"], answer: 2 },

  // 建立第 18 題。
  { question: "8 × 7 = ?", options: ["48", "54", "56", "64"], answer: 2 },

  // 建立第 19 題。
  { question: "45 ÷ 5 = ?", options: ["7", "8", "9", "10"], answer: 2 },

  // 建立第 20 題。
  { question: "32 + 18 = ?", options: ["48", "49", "50", "51"], answer: 2 },

  // 建立第 21 題。
  { question: "90 - 37 = ?", options: ["51", "52", "53", "54"], answer: 2 },

  // 建立第 22 題。
  { question: "11 × 6 = ?", options: ["60", "66", "72", "76"], answer: 1 },

  // 建立第 23 題。
  { question: "96 ÷ 12 = ?", options: ["6", "7", "8", "9"], answer: 2 },

  // 建立第 24 題。
  { question: "27 + 35 = ?", options: ["60", "61", "62", "63"], answer: 2 },

  // 建立第 25 題。
  { question: "74 - 28 = ?", options: ["44", "45", "46", "47"], answer: 2 },

  // 建立第 26 題。
  { question: "12 × 7 = ?", options: ["72", "84", "96", "108"], answer: 1 },

  // 建立第 27 題。
  { question: "144 ÷ 12 = ?", options: ["10", "11", "12", "13"], answer: 2 },

  // 建立第 28 題。
  {
    question: "一盒彩色筆有 8 枝，5 盒共有幾枝？",
    options: ["35 枝", "40 枝", "45 枝", "50 枝"],
    answer: 1
  },

  // 建立第 29 題。
  {
    question: "小明有 50 元，買文具花 28 元，剩下多少元？",
    options: ["20 元", "21 元", "22 元", "23 元"],
    answer: 2
  },

  // 建立第 30 題。
  {
    question: "一條繩子長 24 公尺，平均分成 6 段，每段幾公尺？",
    options: ["3 公尺", "4 公尺", "5 公尺", "6 公尺"],
    answer: 1
  },

  // 建立第 31 題。
  {
    question: "一個正方形每邊長 5 公分，周長是多少？",
    options: ["10 公分", "15 公分", "20 公分", "25 公分"],
    answer: 2
  },

  // 建立第 32 題。
  {
    question: "長方形長 8 公分、寬 3 公分，面積是多少？",
    options: ["11 平方公分", "22 平方公分", "24 平方公分", "30 平方公分"],
    answer: 2
  },

  // 建立第 33 題。
  {
    question: "1 小時有幾分鐘？",
    options: ["30 分鐘", "45 分鐘", "60 分鐘", "90 分鐘"],
    answer: 2
  },

  // 建立第 34 題。
  {
    question: "半打雞蛋有幾個？",
    options: ["5 個", "6 個", "10 個", "12 個"],
    answer: 1
  },

  // 建立第 35 題。
  {
    question: "一袋米重 5 公斤，4 袋米共重多少公斤？",
    options: ["9 公斤", "15 公斤", "20 公斤", "25 公斤"],
    answer: 2
  },

  // 建立第 36 題。
  {
    question: "數字 472 中，百位數字是多少？",
    options: ["2", "4", "7", "47"],
    answer: 1
  }
];

// 宣告本次測驗抽出的題目。
let quizQuestions = [];

// 宣告目前作答的題目索引。
let currentQuestion = 0;

// 宣告目前答對的題數。
let correctCount = 0;

// 宣告使用者選擇的選項索引。
let selectedOption = -1;

// 宣告目前題目是否已經作答。
let answered = false;

// 宣告錯誤選項開始晃動的時間。
let shakeStartTime = 0;

// 宣告設計畫布的寬度。
const designWidth = 900;

// 宣告設計畫布的高度。
const designHeight = 650;

// 宣告彩帶陣列。
let confetti = [];

// 宣告彩帶顏色。
const confettiColors = [
  "#ef476f",
  "#ffd166",
  "#06d6a0",
  "#118ab2",
  "#8338ec",
  "#fb5607"
];

// 建立 p5.js 畫布。
function setup() {
  // 建立符合瀏覽器視窗大小的畫布。
  createCanvas(windowWidth, windowHeight);

  // 設定文字水平置中。
  textAlign(CENTER, CENTER);

  // 設定矩形以中心點定位。
  rectMode(CENTER);

  // 設定像素密度，降低部分裝置的效能負擔。
  pixelDensity(1);

  // 設定文字字型。
  textFont("Arial, Noto Sans TC, sans-serif");

  // 設定滑鼠游標樣式。
  cursor(ARROW);
}

// 每一幀重新繪製畫面。
function draw() {
  // 以淡灰藍色清除畫面。
  background("#f7f9fc");

  // 計算目前畫面可使用的等比例縮放值。
  const scaleValue = min(width / designWidth, height / designHeight);

  // 計算縮放後內容的實際寬度。
  const scaledWidth = designWidth * scaleValue;

  // 計算縮放後內容的實際高度。
  const scaledHeight = designHeight * scaleValue;

  // 計算內容在畫面中水平置中的位置。
  const offsetX = (width - scaledWidth) / 2;

  // 計算內容在畫面中垂直置中的位置。
  const offsetY = (height - scaledHeight) / 2;

  // 儲存目前繪圖狀態。
  push();

  // 將畫面移動到縮放內容的左上角。
  translate(offsetX, offsetY);

  // 將內容依照視窗大小等比例縮放。
  scale(scaleValue);

  // 判斷目前要繪製哪個畫面。
  if (screen === "home") {
    // 繪製首頁。
    drawHome();
  } else if (screen === "quiz") {
    // 繪製測驗頁面。
    drawQuiz();
  } else {
    // 繪製結果頁面。
    drawResult();
  }

  // 還原繪圖狀態。
  pop();

  // 在所有畫面最上方繪製彩帶。
  drawConfetti();
}

// 繪製首頁。
function drawHome() {
  // 設定主標題顏色。
  fill(optionColor);

  // 設定主標題大小。
  textSize(58);

  // 顯示主標題。
  text("Math Quiz", designWidth / 2, 155);

  // 設定副標題顏色。
  fill("#52606d");

  // 設定副標題大小。
  textSize(25);

  // 顯示測驗名稱。
  text("國小簡易數學選擇題測驗", designWidth / 2, 215);

  // 設定題庫說明文字大小。
  textSize(21);

  // 顯示題庫與抽題資訊。
  text("題庫共 36 題，每次隨機抽出 5 題", designWidth / 2, 260);

  // 取得上次成績。
  const lastScore = getLastScore();

  // 設定成績文字顏色。
  fill("#073b4c");

  // 設定成績文字大小。
  textSize(24);

  // 判斷是否有上次成績。
  if (lastScore === null) {
    // 顯示尚無成績的提示。
    text("上次成績：尚無測驗紀錄", designWidth / 2, 320);
  } else {
    // 顯示儲存的上次成績。
    text(`上次成績：${lastScore} / ${quizLength} 題`, designWidth / 2, 320);
  }

  // 繪製開始測驗按鈕。
  drawButton("開始測驗", designWidth / 2, 430, 280, 75, optionColor);

  // 設定操作提示顏色。
  fill("#7b8794");

  // 設定操作提示文字大小。
  textSize(18);

  // 顯示操作提示。
  text("請點擊按鈕開始作答", designWidth / 2, 525);
}

// 繪製測驗作答頁面。
function drawQuiz() {
  // 取得目前題目的資料。
  const current = quizQuestions[currentQuestion];

  // 設定進度文字顏色。
  fill("#52606d");

  // 設定進度文字大小。
  textSize(22);

  // 顯示目前作答進度。
  text(`第 ${currentQuestion + 1} 題 / ${quizLength} 題`, designWidth / 2, 45);

  // 繪製返回首頁按鈕。
  drawButton("返回首頁", 100, 45, 150, 44, optionColor, 18);

  // 設定題目文字顏色。
  fill(optionColor);

  // 設定題目文字大小。
  textSize(30);

  // 顯示目前題目。
  text(current.question, designWidth / 2, 115);

  // 設定選項起始位置。
  const startY = 215;

  // 設定選項之間的垂直間隔。
  const gapY = 75;

  // 逐一繪製四個選項。
  for (let index = 0; index < current.options.length; index++) {
    // 計算目前選項的垂直位置。
    const optionY = startY + index * gapY;

    // 宣告錯誤選項的水平偏移量。
    let shakeOffset = 0;

    // 判斷目前是否為答錯選項。
    if (answered && index === selectedOption && index !== current.answer) {
      // 計算錯誤選項開始晃動後經過的時間。
      const elapsed = millis() - shakeStartTime;

      // 判斷是否仍在晃動時間內。
      if (elapsed < 500) {
        // 使用正弦函數產生左右晃動。
        shakeOffset = sin(elapsed * 0.08) * 12;
      }
    }

    // 設定選項的預設顏色。
    let currentColor = optionColor;

    // 判斷目前選項是否為正確答案。
    if (answered && index === current.answer) {
      // 將正確答案變成綠色。
      currentColor = correctColor;
    }

    // 判斷目前選項是否為答錯選項。
    if (answered && index === selectedOption && index !== current.answer) {
      // 將錯誤選項變成紅色。
      currentColor = wrongColor;
    }

    // 取得響應式選項寬度。
    const buttonWidth = getResponsiveButtonWidth();

    // 取得響應式選項文字大小。
    const optionTextSize = getResponsiveOptionTextSize();

    // 繪製選項按鈕。
    drawButton(
      current.options[index],
      designWidth / 2 + shakeOffset,
      optionY,
      buttonWidth,
      58,
      currentColor,
      optionTextSize
    );

    // 判斷是否需要標示正確答案。
    if (answered && index === current.answer && selectedOption !== current.answer) {
      // 設定正確答案文字顏色。
      fill(correctColor);

      // 設定正確答案文字大小。
      textSize(16);

      // 顯示正確答案標籤。
      text("正確答案", designWidth / 2 + buttonWidth / 2 + 72, optionY);
    }
  }

  // 取得響應式下一題按鈕寬度。
  const nextButtonWidth = getResponsiveNextButtonWidth();

  // 判斷本題是否已作答。
  if (answered) {
    // 繪製下一題或查看結果按鈕。
    drawButton(
      currentQuestion === quizLength - 1 ? "查看結果" : "下一題",
      designWidth / 2,
      575,
      nextButtonWidth,
      55,
      optionColor,
      getResponsiveButtonTextSize()
    );
  } else {
    // 設定提示文字顏色。
    fill("#7b8794");

    // 設定提示文字大小。
    textSize(18);

    // 顯示作答提示。
    text("請點擊一個選項作答", designWidth / 2, 575);
  }
}

// 繪製結果頁面。
function drawResult() {
  // 設定結果標題顏色。
  fill(optionColor);

  // 設定結果標題文字大小。
  textSize(52);

  // 顯示測驗完成標題。
  text("測驗完成！", designWidth / 2, 150);

  // 繪製返回首頁按鈕。
  drawButton("返回首頁", 100, 45, 150, 44, optionColor, 18);

  // 設定分數文字顏色。
  fill("#52606d");

  // 設定分數文字大小。
  textSize(31);

  // 顯示測驗分數。
  text(`你答對了 ${correctCount} / ${quizLength} 題`, designWidth / 2, 250);

  // 設定鼓勵文字大小。
  textSize(25);

  // 判斷是否取得滿分。
  if (correctCount === quizLength) {
    // 顯示滿分鼓勵。
    text("太棒了！全部答對！", designWidth / 2, 320);
  } else if (correctCount >= 3) {
    // 顯示中高分鼓勵。
    text("做得很好，繼續加油！", designWidth / 2, 320);
  } else {
    // 顯示繼續練習鼓勵。
    text("再多練習幾次，你一定會進步！", designWidth / 2, 320);
  }

  // 取得響應式重新測驗按鈕寬度。
  const restartButtonWidth = getResponsiveRestartButtonWidth();

  // 繪製重新測驗按鈕。
  drawButton(
    "重新測驗",
    designWidth / 2,
    455,
    restartButtonWidth,
    75,
    optionColor,
    getResponsiveButtonTextSize()
  );
}

// 繪製通用按鈕。
function drawButton(
  label,
  x,
  y,
  buttonWidth,
  buttonHeight,
  buttonFill,
  buttonTextSize = 24
) {
  // 判斷滑鼠是否位於按鈕範圍內。
  const hovering = isInsideButton(x, y, buttonWidth, buttonHeight);

  // 設定按鈕陰影顏色。
  drawingContext.shadowColor = "rgba(7, 59, 76, 0.22)";

  // 設定按鈕陰影模糊程度。
  drawingContext.shadowBlur = hovering ? 15 : 8;

  // 設定按鈕陰影垂直偏移量。
  drawingContext.shadowOffsetY = 4;

  // 設定按鈕顏色。
  fill(buttonFill);

  // 移除按鈕外框。
  noStroke();

  // 繪製圓角按鈕。
  rect(x, y, buttonWidth, buttonHeight, 14);

  // 清除按鈕陰影。
  drawingContext.shadowColor = "transparent";

  // 設定按鈕文字顏色。
  fill("#ffffff");

  // 設定按鈕文字大小。
  textSize(buttonTextSize);

  // 顯示按鈕文字。
  text(label, x, y);
}

// 取得響應式選項按鈕寬度。
function getResponsiveButtonWidth() {
  // 計算設計座標與目前畫面的比例。
  const widthRatio = width / designWidth;

  // 將目前視窗寬度換算為設計座標寬度。
  const availableWidth = widthRatio > 0 ? width / widthRatio : designWidth;

  // 限制按鈕寬度，避免過窄或過寬。
  return constrain(availableWidth - 120, 430, 600);
}

// 取得響應式選項文字大小。
function getResponsiveOptionTextSize() {
  // 判斷目前是否為窄版手機。
  if (width < 500) {
    // 回傳手機適用的文字大小。
    return 19;
  }

  // 判斷目前是否為中型螢幕。
  if (width < 750) {
    // 回傳平板適用的文字大小。
    return 22;
  }

  // 回傳桌機適用的文字大小。
  return 24;
}

// 取得響應式一般按鈕文字大小。
function getResponsiveButtonTextSize() {
  // 判斷目前是否為窄版畫面。
  if (width < 500) {
    // 回傳手機適用的文字大小。
    return 20;
  }

  // 回傳一般按鈕文字大小。
  return 24;
}

// 取得響應式下一題按鈕寬度。
function getResponsiveNextButtonWidth() {
  // 判斷目前是否為手機寬度。
  if (width < 500) {
    // 回傳手機適用的按鈕寬度。
    return 220;
  }

  // 回傳平板與桌機適用的按鈕寬度。
  return 240;
}

// 取得響應式重新測驗按鈕寬度。
function getResponsiveRestartButtonWidth() {
  // 判斷目前是否為手機寬度。
  if (width < 500) {
    // 回傳手機適用的按鈕寬度。
    return 240;
  }

  // 回傳平板與桌機適用的按鈕寬度。
  return 280;
}

// 判斷滑鼠是否位於指定按鈕範圍內。
function isInsideButton(x, y, buttonWidth, buttonHeight) {
  // 計算畫面的等比例縮放值。
  const scaleValue = min(width / designWidth, height / designHeight);

  // 計算縮放後畫面的實際寬度。
  const scaledWidth = designWidth * scaleValue;

  // 計算縮放後畫面的實際高度。
  const scaledHeight = designHeight * scaleValue;

  // 計算畫面的水平偏移量。
  const offsetX = (width - scaledWidth) / 2;

  // 計算畫面的垂直偏移量。
  const offsetY = (height - scaledHeight) / 2;

  // 將實際滑鼠座標轉換成設計座標。
  const designMouseX = (mouseX - offsetX) / scaleValue;

  // 將實際滑鼠座標轉換成設計座標。
  const designMouseY = (mouseY - offsetY) / scaleValue;

  // 回傳滑鼠是否位於按鈕矩形內。
  return (
    designMouseX >= x - buttonWidth / 2 &&
    designMouseX <= x + buttonWidth / 2 &&
    designMouseY >= y - buttonHeight / 2 &&
    designMouseY <= y + buttonHeight / 2
  );
}

// 處理滑鼠點擊事件。
function mousePressed() {
  // 判斷目前是否位於首頁。
  if (screen === "home") {
    // 判斷使用者是否點擊開始測驗按鈕。
    if (isInsideButton(designWidth / 2, 430, 280, 75)) {
      // 開始新的測驗。
      startQuiz();
    }

    // 結束首頁的點擊流程。
    return;
  }

  // 判斷使用者是否點擊作答頁面的返回首頁按鈕。
  if (screen === "quiz" && isInsideButton(100, 45, 150, 44)) {
    // 返回首頁。
    goHome();

    // 結束目前的點擊流程。
    return;
  }

  // 判斷使用者是否點擊結果頁面的返回首頁按鈕。
  if (screen === "result" && isInsideButton(100, 45, 150, 44)) {
    // 返回首頁。
    goHome();

    // 結束目前的點擊流程。
    return;
  }

  // 判斷目前是否位於結果頁面。
  if (screen === "result") {
    // 取得重新測驗按鈕寬度。
    const restartButtonWidth = getResponsiveRestartButtonWidth();

    // 判斷是否點擊重新測驗按鈕。
    if (isInsideButton(designWidth / 2, 455, restartButtonWidth, 75)) {
      // 開始新的測驗。
      startQuiz();
    }

    // 結束結果頁面點擊流程。
    return;
  }

  // 判斷目前題目是否尚未作答。
  if (!answered) {
    // 取得目前題目。
    const current = quizQuestions[currentQuestion];

    // 設定選項起始位置。
    const startY = 215;

    // 設定選項垂直間距。
    const gapY = 75;

    // 取得響應式選項按鈕寬度。
    const buttonWidth = getResponsiveButtonWidth();

    // 逐一檢查四個選項。
    for (let index = 0; index < current.options.length; index++) {
      // 計算目前選項的垂直位置。
      const optionY = startY + index * gapY;

      // 判斷使用者是否點擊此選項。
      if (isInsideButton(designWidth / 2, optionY, buttonWidth, 58)) {
        // 記錄使用者選擇的選項。
        selectedOption = index;

        // 設定本題已作答。
        answered = true;

        // 判斷答案是否正確。
        if (index === current.answer) {
          // 增加答對題數。
          correctCount++;

          // 產生答對時的彩帶效果。
          createConfetti();
        } else {
          // 記錄錯誤選項開始晃動的時間。
          shakeStartTime = millis();
        }

        // 停止檢查其他選項。
        break;
      }
    }
  } else {
    // 取得響應式下一題按鈕寬度。
    const nextButtonWidth = getResponsiveNextButtonWidth();

    // 判斷使用者是否點擊下一題按鈕。
    if (isInsideButton(designWidth / 2, 575, nextButtonWidth, 55)) {
      // 判斷是否已經完成最後一題。
      if (currentQuestion === quizLength - 1) {
        // 儲存本次成績。
        saveLastScore(correctCount);

        // 切換到結果頁面。
        screen = "result";
      } else {
        // 前往下一題。
        currentQuestion++;

        // 清除上一題選項紀錄。
        selectedOption = -1;

        // 設定下一題尚未作答。
        answered = false;

        // 清除上一題剩餘彩帶。
        confetti = [];
      }
    }
  }
}

// 開始新的測驗。
function startQuiz() {
  // 複製題庫，避免修改原始題庫。
  const shuffledBank = shuffle(questionBank.slice());

  // 從打亂後的題庫抽出五題。
  quizQuestions = shuffledBank.slice(0, quizLength);

  // 將目前題目設定為第一題。
  currentQuestion = 0;

  // 將答對題數歸零。
  correctCount = 0;

  // 清除選項選擇紀錄。
  selectedOption = -1;

  // 設定目前題目尚未作答。
  answered = false;

  // 清除畫面上的彩帶。
  confetti = [];

  // 切換到測驗畫面。
  screen = "quiz";
}

// 返回首頁。
function goHome() {
  // 切換至首頁。
  screen = "home";

  // 清除目前的測驗題目。
  quizQuestions = [];

  // 清除選項選擇紀錄。
  selectedOption = -1;

  // 設定尚未作答。
  answered = false;

  // 清除彩帶。
  confetti = [];
}

// 取得上次儲存的成績。
function getLastScore() {
  // 從瀏覽器的 localStorage 讀取上次成績。
  const storedScore = localStorage.getItem("mathQuizLastScore");

  // 判斷是否沒有儲存過成績。
  if (storedScore === null) {
    // 回傳空值表示尚無紀錄。
    return null;
  }

  // 將文字格式的成績轉換成數字。
  return Number(storedScore);
}

// 儲存本次測驗成績。
function saveLastScore(score) {
  // 將成績轉成文字並儲存到瀏覽器。
  localStorage.setItem("mathQuizLastScore", String(score));
}

// 建立彩帶效果。
function createConfetti() {
  // 清除前一次可能尚未消失的彩帶。
  confetti = [];

  // 重複建立指定數量的彩帶。
  for (let index = 0; index < confettiAmount; index++) {
    // 建立一個彩帶物件並加入陣列。
    confetti.push({
      // 設定彩帶的隨機水平位置。
      x: random(width),

      // 設定彩帶從畫面上方開始。
      y: random(-height * 0.4, -20),

      // 設定彩帶的水平速度。
      speedX: random(-2, 2),

      // 設定彩帶的垂直速度。
      speedY: random(2, 6),

      // 設定彩帶的旋轉角度。
      angle: random(TWO_PI),

      // 設定彩帶的旋轉速度。
      rotationSpeed: random(-0.15, 0.15),

      // 設定彩帶寬度。
      width: random(6, 12),

      // 設定彩帶高度。
      height: random(12, 24),

      // 從彩帶顏色陣列隨機選擇顏色。
      color: random(confettiColors)
    });
  }
}

// 繪製彩帶效果。
function drawConfetti() {
  // 判斷目前是否有彩帶。
  if (confetti.length === 0) {
    // 沒有彩帶時直接結束函式。
    return;
  }

  // 儲存目前的繪圖狀態。
  push();

  // 逐一處理所有彩帶。
  for (let index = confetti.length - 1; index >= 0; index--) {
    // 取得目前彩帶。
    const piece = confetti[index];

    // 更新彩帶的水平位置。
    piece.x += piece.speedX;

    // 更新彩帶的垂直位置。
    piece.y += piece.speedY;

    // 增加垂直速度，模擬重力。
    piece.speedY += 0.04;

    // 更新彩帶旋轉角度。
    piece.angle += piece.rotationSpeed;

    // 儲存目前彩帶的繪圖狀態。
    push();

    // 移動到彩帶位置。
    translate(piece.x, piece.y);

    // 旋轉彩帶。
    rotate(piece.angle);

    // 設定彩帶顏色。
    fill(piece.color);

    // 移除彩帶外框。
    noStroke();

    // 繪製彩帶矩形。
    rect(0, 0, piece.width, piece.height, 2);

    // 還原目前彩帶的繪圖狀態。
    pop();

    // 判斷彩帶是否已經離開畫面。
    if (piece.y > height + 40) {
      // 移除已經離開畫面的彩帶。
      confetti.splice(index, 1);
    }
  }

  // 還原整體彩帶繪圖狀態。
  pop();
}

// 當瀏覽器視窗大小改變時執行。
function windowResized() {
  // 重新調整畫布大小。
  resizeCanvas(windowWidth, windowHeight);

  // 視窗改變時清除彩帶，避免位置失真。
  confetti = [];
}