const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const question = document.getElementById('question');

// 拒绝按钮随机移动
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 同意按钮点击效果
yesBtn.addEventListener('click', () => {
    question.innerText = "!!!喜欢你!! ( >_<)°";
    noBtn.style.display = 'none';
    yesBtn.innerText = "在一起！";
});
