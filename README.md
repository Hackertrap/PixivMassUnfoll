Pixiv Mass Unfoll

A Tampermonkey user script that automatically unfollows users on [Pixiv](https://www.pixiv.net), with auto-pagination and customizable speed.

---
🚀 Features

- Automatically unfollows all users on each page
- Navigates to the next page after finishing
- Fully automatic — set once, let it run
- Adjustable delay to avoid rate limits
- Simple and lightweight

---

🧠 How It Works

This script clicks the “Following” buttons on your Pixiv following list one by one, with a safe delay between actions. After finishing one page (20 users), it automatically goes to the next page and continues.

---

📥 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser (Chrome/Firefox/Edge)
2. Go to the [Releases Page](https://github.com/Hackertrap/PixivMassUnfoll/releases)
3. Download and install the latest `.user.js` file
4. Open your Pixiv following list:  
   `https://www.pixiv.net/users/YOUR_USER_ID/following?p=1`
5. The script will start unfollowing automatically

---

⚠️ Usage Notes

- Recommended delay: **1000–1500ms**  
  (Setting too low may trigger Pixiv's rate limiting)
- For large followings (1000+), take breaks between runs
- Use responsibly. You are responsible for your own account.
- Do not open multiple Pixiv tabs while running this script

---

🧾 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Created by [Hackertrap](https://github.com/Hackertrap)
