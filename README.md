1. tính năng đăng nhập
    fetch('.../user/login) method: POST, dữ liệu truyền đi trong body kiểu JSON bao gồm 2 key "email" và "password".
2. tính năng đăng ký
    fetch('.../user/create-user-api) method: POST, dữ liệu truyền đi trong body kiểu JSON bao gồm 3 key "email", "password" và "displayName".
3. tính năng thay đổi mật khẩu
    fetch('.../user/update-user-password-api/:user_id) method: PUT, dữ liệu truyền đi trong body kiểu JSON bao gồm 1 key mật khẩu mới: password.
    Lưu ý: user_id: là id của user trên thanh url, đây là biến động. Khi fetch API thì BE sẽ nhận :user_id là tham số và truy quét dữ liệu rồi cập nhật mật khẩu mới của user. Ví dụ url:'.../user/update-user-password-api/17110039' thì 17110039 sẽ là :user_id.
4. Tính năng thay đổi thông tin user.
    fetch('.../user/update-user-information-api/:user_id) method: PUT, dữ liệu truyền đi trong body kiểu JSON bao gồm 8 keys: firstname, lastname, address, phone, img, dateOfBirth, country, gender. 
    Lưu ý: /:user_id giống mục 3.
5. Tính năng liệt kê tất cả xe
    fetch('.../order/list-all-cars) method: GET (*khi GET thì ko truyền data vào BODY), (created_date: ngày khởi tạo xe, updated_date: ngày cập nhật lại thông tin xe, type_car: số chỗ ngồi trên xe, available: 1 (có sẵn) || 0 (không có sẵn)).
6. Tính năng liệt kê theo hãng
    fetch('.../order/list-all-cars-by-brand/:idBrand) method: GET (*khi GET thì ko truyền data vào BODY), khi sắp xếp theo brand thì endpoint của url khi fetch phải là tên brand được kí hiệu trong url là :idBrand. Ví dụ muốn lấy thông tin xe hãng SUV thì url phải là 'localhost:8080/order-list-all-cars-by-brand/SUV'. fetch ở đâu thì data trở về ở đó bằng: fetch(...).then('đây là chỗ dữ liệu trả về dạng JSON').
7. Tính năng thuê xe
    fetch('.../order/:idUser&:idCar) method: POST. Trong body sẽ truyển vào các thông tin: 
        pick_location, pick_up_date, drop_off_date, age_driver
    *Note: age_driver sẽ là true hoặc false tức là người lái xe đã đủ điều kiện lái xe hay chưa (ở đây mình cho 18+).
            userId và carId sẽ truyền vào param trên url và ko cần bỏ vào trong phần body.
8. Tính năng xem các xe đã thuê
    fetch('.../order/get-car-ordered-by-user/:userId) method: GET. Dữ liệu trả về JSON chứa các orders được book theo userId hiện tại.
9. Hủy đơn hàng
    fetch('.../order/:orderId) method: DELETE. Khi click button hủy thì fetch API. Kết quả trả ra trạng thái "SUCCESS" tức là hủy đơn hàng thành công.
10. Sửa thông tin đơn đặt hàng
    fetch('.../order/:orderId) method: PUT. Khi cập nhật lại thì truyền BODY một số thuộc tính: pick_location, pick_up_date, drop_off_date. Đây là những thuộc tính sẽ được quyền sửa.



    