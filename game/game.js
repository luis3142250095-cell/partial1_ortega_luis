"use strict";
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const status = document.getElementById("status");
const keys = new Set();
const platforms = [
    {x: 0, y: 315, w: 800, h: 45},
    {x: 140, y: 245, w: 155, h: 18},
    {x: 365, y: 205, w: 155, h: 18},
    {x: 605, y: 245, w: 125, h: 18}
];
let player, coins, enemy, count, ended, jumpHeld;
let previousTime = 0;
let accumulator = 0;

function reset() {
    player = {x: 32, y: 279, w: 24, h: 36, vy: 0, grounded: true};
    coins = [{x: 212, y: 223, taken: false}, {x: 440, y: 183, taken: false}, {x: 668, y: 223, taken: false}];
    enemy = {x: 530, y: 291, w: 28, h: 24, direction: 1};
    count = 0;
    ended = false;
    jumpHeld = false;
    keys.clear();
    status.textContent = "Monedas: 0 / 3";
}

function overlaps(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function update() {
    if (ended) return;
    const movingLeft = keys.has("arrowleft") || keys.has("a");
    const movingRight = keys.has("arrowright") || keys.has("d");
    const jump = keys.has(" ") || keys.has("arrowup") || keys.has("w");
    player.x += (Number(movingRight) - Number(movingLeft)) * 3.6;
    player.x = Math.max(0, Math.min(800 - player.w, player.x));
    if (jump && !jumpHeld && player.grounded) {
        player.vy = -11;
        player.grounded = false;
    }
    jumpHeld = jump;
    const previousBottom = player.y + player.h;
    player.vy += 0.48;
    player.y += player.vy;
    player.grounded = false;
    for (const platform of platforms) {
        if (player.vy >= 0 && previousBottom <= platform.y && player.y + player.h >= platform.y && player.x + player.w > platform.x && player.x < platform.x + platform.w) {
            player.y = platform.y - player.h;
            player.vy = 0;
            player.grounded = true;
        }
    }
    for (const coin of coins) {
        if (!coin.taken && overlaps(player, {x: coin.x - 10, y: coin.y - 10, w: 20, h: 20})) {
            coin.taken = true;
            count++;
            status.textContent = `Monedas: ${count} / 3`;
        }
    }
    enemy.x += enemy.direction * 1.25;
    if (enemy.x > 595) { enemy.x = 595; enemy.direction = -1; }
    if (enemy.x < 525) { enemy.x = 525; enemy.direction = 1; }
    if (overlaps(player, enemy)) {
        ended = true;
        status.textContent = "Tocaste al enemigo. Pulsa Reiniciar o R para volver a intentar.";
    }
    if (!ended && player.x + player.w >= 765 && count === 3) {
        ended = true;
        status.textContent = "¡Ganaste! Recogiste las 3 monedas y llegaste a la bandera.";
    } else if (!ended && player.x + player.w >= 765 && count < 3) {
        status.textContent = `Monedas: ${count} / 3. Recoge todas antes de llegar a la bandera.`;
    }
}

function rectangle(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function draw() {
    rectangle(0, 0, 800, 360, "#a9dfff");
    for (const x of [60, 290, 580]) {
        rectangle(x, 45, 90, 24, "white");
        rectangle(x + 22, 30, 45, 20, "white");
    }
    for (const platform of platforms) {
        rectangle(platform.x, platform.y, platform.w, platform.h, "#956036");
        rectangle(platform.x, platform.y, platform.w, 6, "#4a9e37");
    }
    for (const coin of coins) {
        if (!coin.taken) {
            ctx.fillStyle = "#ffd42a";
            ctx.beginPath();
            ctx.arc(coin.x, coin.y, 9, 0, Math.PI * 2);
            ctx.fill();
            rectangle(coin.x - 1, coin.y - 5, 2, 10, "#c98c00");
        }
    }
    rectangle(765, 155, 4, 160, "#eeeeee");
    rectangle(769, 158, 25, 25, "#12844b");
    rectangle(enemy.x, enemy.y, enemy.w, enemy.h, "#765036");
    rectangle(enemy.x + 5, enemy.y + 6, 4, 5, "white");
    rectangle(enemy.x + 19, enemy.y + 6, 4, 5, "white");
    rectangle(player.x + 2, player.y, 23, 7, "#c72525");
    rectangle(player.x + 5, player.y + 7, 15, 10, "#efb47e");
    rectangle(player.x, player.y + 17, 24, 8, "#c72525");
    rectangle(player.x + 4, player.y + 22, 16, 10, "#244dbb");
    rectangle(player.x + 2, player.y + 32, 9, 4, "#4d3425");
    rectangle(player.x + 15, player.y + 32, 9, 4, "#4d3425");
}

function frame(time) {
    if (!previousTime) previousTime = time;
    accumulator += Math.min(time - previousTime, 80);
    previousTime = time;
    while (accumulator >= 1000 / 60) {
        update();
        accumulator -= 1000 / 60;
    }
    draw();
    requestAnimationFrame(frame);
}

document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if ([" ", "arrowup", "arrowleft", "arrowright", "w", "a", "d"].includes(key)) {
        event.preventDefault();
        keys.add(key);
    }
    if (key === "r") reset();
});
document.addEventListener("keyup", (event) => keys.delete(event.key.toLowerCase()));
window.addEventListener("blur", () => { keys.clear(); jumpHeld = false; });
for (const [id, key] of [["left", "arrowleft"], ["right", "arrowright"], ["jump", " "]]) {
    const button = document.getElementById(id);
    button.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        button.setPointerCapture(event.pointerId);
        keys.add(key);
    });
    for (const eventName of ["pointerup", "pointercancel", "lostpointercapture"]) {
        button.addEventListener(eventName, () => keys.delete(key));
    }
}
document.getElementById("restart").addEventListener("click", reset);
reset();
requestAnimationFrame(frame);
