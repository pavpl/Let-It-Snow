// Таймер обратного отсчёта до Нового Года
function updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1); // 1 января следующего года

    // Если уже новый год, показываем 0
    if (now >= newYear) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const diff = newYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Обновляем каждую секунду
setInterval(updateCountdown, 1000);
updateCountdown();

// Создание снежинок
function createSnowflake() {
    const container = document.getElementById('snowflakes-container');
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';

    // Случайный символ снежинки
    const symbols = ['❄', '❅', '❆', '✻', '✼', '❋'];
    snowflake.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    // Случайные параметры
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = (Math.random() * 1.5 + 0.5) + 'rem';
    snowflake.style.opacity = Math.random() * 0.5 + 0.3;
    snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';
    snowflake.style.animationDelay = Math.random() * 2 + 's';

    container.appendChild(snowflake);

    // Удаляем снежинку после анимации
    setTimeout(() => {
        snowflake.remove();
    }, 12000);
}

// Создаём снежинки постоянно
setInterval(createSnowflake, 300);

// Создаём начальные снежинки
for (let i = 0; i < 20; i++) {
    setTimeout(createSnowflake, i * 100);
}

// Конфетти
function createConfetti() {
    const colors = ['#ff6b6b', '#ffd700', '#4ecdc4', '#44a4ff', '#ff69b4', '#98fb98', '#ff1493'];

    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';

            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 4000);
        }, i * 20);
    }
}

document.getElementById('confettiBtn').addEventListener('click', createConfetti);

// Больше снега
document.getElementById('snowBtn').addEventListener('click', () => {
    for (let i = 0; i < 30; i++) {
        setTimeout(createSnowflake, i * 50);
    }
});

// Новогодние пожелания
const wishes = [
    "Пусть новый год принесёт много радости и счастья! 🎉",
    "Желаю крепкого здоровья и исполнения всех желаний! ✨",
    "Пусть каждый день нового года будет наполнен любовью! ❤️",
    "Желаю успехов во всех начинаниях и финансового благополучия! 💰",
    "Пусть мечты сбываются, а сердце будет полно счастья! 🌟",
    "Желаю тёплых встреч, добрых друзей и ярких впечатлений! 🎊",
    "Пусть новый год будет самым лучшим в твоей жизни! 🎄",
    "Желаю гармонии, удачи и позитивных эмоций! 🌈",
    "Пусть все неприятности останутся в прошлом году! 🍀",
    "Желаю волшебства в каждом дне нового года! ✨",
    "Пусть рядом будут только те, кто делает тебя счастливым! 💫",
    "Желаю найти своё призвание и дело по душе! 🚀"
];

document.getElementById('wishBtn').addEventListener('click', () => {
    const wishElement = document.getElementById('wish');
    wishElement.style.opacity = '0';

    setTimeout(() => {
        const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
        wishElement.textContent = randomWish;
        wishElement.style.opacity = '1';
    }, 300);
});

// Плавное изменение opacity для пожеланий
document.querySelector('.wish').style.transition = 'opacity 0.3s ease';

// Клик по экрану - создание частиц
const emojis = ['⭐', '✨', '❄️', '🎄', '🎁', '🎅', '⛄', '🦌', '🎉', '💫'];

document.addEventListener('click', (e) => {
    // Не создаём частицы при клике на кнопки
    if (e.target.closest('button')) return;

    const container = document.getElementById('particles-container');

    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        const angle = (Math.PI * 2 / 8) * i;
        const distance = 100 + Math.random() * 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');

        container.appendChild(particle);

        setTimeout(() => particle.remove(), 1000);
    }
});

// Аудио контроль
const audioBtn = document.getElementById('audioBtn');
const bgMusic = document.getElementById('bgMusic');

// Используем локальный файл с музыкой
bgMusic.src = 'Let It Snow!.mp3';

let isPlaying = false;

audioBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        audioBtn.textContent = '🔇 Включить музыку';
        audioBtn.classList.remove('playing');
    } else {
        bgMusic.play().catch(e => {
            console.log('Автовоспроизведение заблокировано браузером');
        });
        audioBtn.textContent = '🔊 Выключить музыку';
        audioBtn.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// Устанавливаем громкость
bgMusic.volume = 0.5;

// Анимация при наведении на блоки таймера
document.querySelectorAll('.time-block').forEach(block => {
    block.addEventListener('mouseenter', () => {
        block.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
});

// Эффект параллакса для декораций
document.addEventListener('mousemove', (e) => {
    const decorations = document.querySelectorAll('.decoration');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    decorations.forEach((dec, index) => {
        const speed = (index + 1) * 10;
        const moveX = (x - 0.5) * speed;
        const moveY = (y - 0.5) * speed;
        dec.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

console.log('🎄 С наступающим Новым Годом! 🎄');
