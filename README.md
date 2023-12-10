# eCommerceShop

<h2>Cài pnpm bằng npm</h2>
<p>Gõ lệnh sau để cài pnpm ở phạm vi global -> `npm install -g pnpm`</>
<hr />
<i>Đợi cài thành công là xong, có thể dùng pnpm ngay, có thể test thử với lệnh `pnpm -v`</i>
<hr />


<h2>Bước 1</h2>
<ul>
    <li>Cài đặt MongoDB Community: <a href="https://www.mongodb.com/try/download/community" target="_blank">https://www.mongodb.com/try/download/community</a>
    </li>
    <li>MongoDB Compass: <a href="https://www.mongodb.com/try/download/compass" target="_blank">https://www.mongodb.com/try/download/compass</a></li>
    <li>Postman: <a href="https://www.postman.com/downloads/" target="_blank">https://www.postman.com/downloads/</a></li>
</ul>

<h2>Bước 2</h2> 
* Mở 2 terminal (1 cái `cd client` à 1 `cd server` rồi đều gõ lệnh `pnpm install` để cài thư viện)

<h2>Bước 3</h2> 
<p>Mở file .env.example trong thư mục server, sau đó copy toàn bộ, tạo 1 file .env sau đó paste vào.</p>
<img src="https://github.com/phucnguyxn/eCommerceShop/assets/118291240/e10b9c0e-61ef-4b5a-ba0e-897934c34618" />
<img src="https://github.com/phucnguyxn/eCommerceShop/assets/118291240/37ca50ca-4370-449f-ab7a-a70a51edd1ec" />

<h2>Bước 4</h2>
<p>Tạo 1 tài khoản Cloudinary và Mailtrap:</p>
<a href="https://console.cloudinary.com/pm/c-dc9b4ba532b879d721dd18fec0acdf/developer-dashboard" target="_blank">https://console.cloudinary.com/pm/c-dc9b4ba532b879d721dd18fec0acdf/developer-dashboard</a>
<hr />
<a href="https://mailtrap.io/inboxes/2491336/messages" target="_blank">https://mailtrap.io/inboxes/2491336/messages</a>


<h2>Bước 5: Paste id, key và api secret vào file .env </h2>
<img src="https://github.com/phucnguyxn/eCommerceShop/assets/118291240/422ddace-b851-47fe-9ed5-90838be311a5" alt="step-6" />
<hr />
<img src="https://github.com/phucnguyxn/eCommerceShop/assets/118291240/767159bf-3b6c-4551-afa9-e89e11f89116" alt="step-6" />


<h2>Bước 6: Vào Mailtrap, copy username password r paste vào trong file.env</h2>
<img src="https://github.com/phucnguyxn/eCommerceShop/assets/118291240/95d6e5a0-3c31-4acd-aac4-9aeb097e7da9" alt="step-6" />
<hr />
<img src="https://github.com/phucnguyxn/eCommerceShop/assets/118291240/201c53a7-e246-4c1f-b561-cc1b4a63c025" alt="step-6" />

<p>Tiếp tục vào file sendmail.js trong folder utils, copy tên host paste vào.</p>
<img src="https://github.com/phucnguyxn/eCommerceShop/assets/118291240/bcf0b1d5-acbc-4883-8c35-9537b354c5bf" alt="step-6" />
<hr />
<img src="https://github.com/phucnguyxn/eCommerceShop/assets/118291240/46a3684e-5df2-46f0-bc54-a8a9e3055839" alt="step-6" />


<h2>Bước 7: Mở Mongodb compass:</h2>
Copy URI paste vào file .env
<img src="https://github.com/phucnguyxn/eCommerceShop/assets/118291240/5667bf47-eb82-43f2-a98e-79182a47f101" alt="step-7" />


<h2>Bước 8: save file .env và connect vào DB</h2>
<img src="https://github.com/phucnguyxn/eCommerceShop/assets/118291240/16f56a47-0af7-4493-a778-02a311050726" alt="step-7" />


<h2>Bước 9: Run application</h2>
<p> Ở terminal server, run lệnh `pnpm dev` để chạy server</p>
<img src="" alt="pnpm dev"/>
<hr />
<p> Ở terminal client, lệnh `pnpm start` để view UI</p>
<img src="" alt="pnpm start"/>


<h2>Import data trong folder IMPORT</h2>
<img src="https://github.com/phucnguyxn/eCommerceShop/assets/118291240/96f154ac-62fc-4de7-94b5-b94a12d2c596" />
