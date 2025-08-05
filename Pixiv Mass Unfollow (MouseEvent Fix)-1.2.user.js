// ==UserScript==
// @name         Pixiv Mass Unfollow (MouseEvent Fix)
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Unfollow all followed users on Pixiv (bypass React/Vue restrictions)
// @author       You
// @match        https://www.pixiv.net/users/*/following*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const delay = 1500; // jeda antar klik agar tidak dianggap spam

    function dispatchMouseEvent(element) {
        const event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        element.dispatchEvent(event);
    }

    function scrollToBottom(callback) {
        let totalHeight = 0;
        const distance = 800;
        const timer = setInterval(() => {
            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= document.body.scrollHeight) {
                clearInterval(timer);
                if (callback) callback();
            }
        }, 800);
    }

    function unfollowAll() {
        const buttons = [...document.querySelectorAll('button')].filter(btn =>
            btn.innerText.includes("フォロー中")
        );

        if (buttons.length === 0) {
            alert("❌ Tidak ada tombol 'フォロー中' yang ditemukan. Pastikan halaman sudah dimuat.");
            return;
        }

        console.log(`🔍 Ditemukan ${buttons.length} akun untuk di-unfollow.`);

        let index = 0;

        function clickNext() {
            if (index >= buttons.length) {
                alert("✅ Unfollow selesai.");
                return;
            }

            const btn = buttons[index];
            console.log(`⛔ Unfollow #${index + 1}`, btn);
            dispatchMouseEvent(btn);
            index++;
            setTimeout(clickNext, delay);
        }

        clickNext();
    }

    // Jalankan otomatis setelah halaman dimuat dan scroll selesai
    setTimeout(() => {
        scrollToBottom(() => {
            setTimeout(unfollowAll, 2000);
        });
    }, 3000);
})();
