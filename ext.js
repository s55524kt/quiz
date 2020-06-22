let que = document.getElementById("que");
let res = document.getElementById("res");
let kyouryuu = document.getElementById("kyouryuu");
let ichi = document.getElementById("ichi");
let ni = document.getElementById("ni");
let san = document.getElementById("san");
let yon = document.getElementById("yon");
let cnt = 10;
let sco = 0;
let flag = true;
let time = setInterval(() => {
  if (cnt > 0) {
    cnt--;
    res.textContent = "スコア:" + sco + "| 時間: " + cnt + "秒";
  } else {
    res.style.color = "red";
    res.textContent = "スコア: " + sco + "| 終了";
    que.textContent = "時間切れ!";
    flag = false;
    clearInterval(time);
  }
}, 1000);
let num = 0;
let max = 5;
let seikai = new Array(max);
seikai = ["1", "4", "2", "2", "3"];
let senichi = new Array(max);
senichi = ["くま", "とかげ", "チーター", "きりん", "はりねずみ"];
senni = ["わに", "ハムスター", "とら", "さい", "クジラ"];
sensan = ["かめ", "ねこ", "ライオン", "ぞう", "カピバラ"];
senyon = ["へび", "いぬ", "ハイエナ", "しか", "ミーアキャット"];
ichi.addEventListener("click", () => {
  answer("1");
});
ni.addEventListener("click", () => {
  answer("2");
});
san.addEventListener("click", () => {
  answer("3");
});
yon.addEventListener("click", () => {
  answer("4");
});
let answer = (str) => {
  if (flag) {
    if (seikai[num] == str) {
      que.textContent = "問題" + (num + 1) + "正解";
      sco++;
      res.textContent = "スコア:" + sco + "| 時間: " + cnt + "秒";
    } else {
      que.textContent = "問題" + (num + 1) + "不正解";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1) + "この動物の名前は？";
        kyouryuu.src = "mushi/doubutu" + num + ".png";
        ichi.textContent = "1:" + senichi[num];
        ni.textContent = "2:" + senni[num];
        san.textContent = "3:" + sensan[num];
        yon.textContent = "4:" + senyon[num];
      }, 500);
    } else {
      que.textContent = "問題の解答終了!";
      clearInterval(time);
      if (sco == max) {
        que.textContent = "全問正解おめでとう！";
        kyouryuu.src = "img/clear.png";
        ichi.textContent = " ";
        ni.textContent = " ";
        san.textContent = " ";
        yon.textContent = " ";
      }
    }
  }
};
