var SMS = require('./models/SMS');

module.exports = {
    configure: function (app) {

        // router dùng để gửi tien nhắn
        app.post('/sendSMS', function (req, res) {
            // định danh dùng để gửi tin nhắn
            const fromPhone = req.body.fromPhone;
            // số điện thoại muốn gửi tin nhắn đến
            const toPhone = req.body.toPhone;
            // nội dung tin nhắn được gửi
            const content = req.body.content;
            // truyền tham số vào hàm gửi tin nhắn trong model SMS
            SMS.sendSMS(fromPhone, toPhone, content, function (res) {
                console.log(res);
            }, res);
        });
    }
};
