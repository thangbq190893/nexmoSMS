Bước 1: Đăng ký tài khoản trên trang
https://dashboard.nexmo.com/sign-up
Sẽ được free 2 euro để sử dụng.
Bước 2: Vào Getting started để lấy Key và Secret kết nối Nexmo, điền vào
const nexmo = new Nexmo({
    apiKey: '0e******',
    apiSecret: 'yr**************',
});
trong model SMS.js
Bước 3: Login vào https://dashboard.nexmo.com/
Muốn gửi cho số điện thoại nào thì vào
UserName -> Test numbers
để đăng ký số điện thoại dùng để test nhận tin nhắn
Bước 4: run app
Bước 5: vào postman chạy thử
method: Post
body: {
      	"fromPhone": "ABCXYZ",
        "toPhone": "số điện thoại đã đăng ký",
        "content": "Nội dung cần gửi"
      }
OK xong!
