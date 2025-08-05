# Pixiv Mass Unfollow Script

A Tampermonkey userscript that allows you to automatically unfollow multiple users on [Pixiv](https://www.pixiv.net/) across all pages.

🔧 Features

- Auto-detects "Following" buttons and clicks them one-by-one.
- Supports Pixiv’s pagination system.
- Scrolls and unfollows accounts automatically.
- Adjustable delay for safety and to avoid account limitations.
- Works with the latest Pixiv layout (2025 update).

🚀 How to Use

1. Install [Tampermonkey](https://www.tampermonkey.net/) on your browser (Chrome, Firefox, etc).
2. Create a new script and paste the contents of `pixiv-unfollow.user.js` into it.
3. Visit your following list page:  
   `https://www.pixiv.net/users/YOUR_ID/following?p=1`
4. The script will automatically:
   - Unfollow all users on the current page.
   - Move to the next page.
   - Repeat until no accounts are left.

⚠️ Warnings

- Recommended delay is `1000-1500ms` to avoid rate-limiting or temporary bans.
- Do not set delay too low (e.g., 200ms), as Pixiv may detect bot-like behavior.
- Use at your own risk.

#📄 License

MIT License

---

Created by [Hackertrap(SayMaven)]
