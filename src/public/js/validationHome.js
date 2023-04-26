//event click button at home page
//su kien click vao button join chat
document.querySelector(".btn").addEventListener("click", function(e){
    //function click button
    checkValidInput(e);
    
});
//check invalid input 
//ham kiem tra xem nguoi dung da nhap vao input hay chua neu chua thi k cho vao room
function checkValidInput(e) {

    e.preventDefault();
    const username = document.getElementById("username");
    const room = document.getElementById("room");
    let valid = true;
    const userInput_username =  username.value; // Chuỗi đầu vào từ người dùng
    const regex = /^[a-zA-Z]+\s+[a-zA-Z]+$/; // Chuỗi chỉ cho phép một chữ cái, sau đó là một hoặc nhiều khoảng trắng, cuối cùng là một hoặc nhiều chữ cái
    const isValid = regex.test(userInput_username);
    if (userInput_username.indexOf('  ') !== -1) {
    // Nếu chuỗi đầu vào chứa khoảng trắng
        alert('Bạn không được phép nhập vào trên 2 khoảng trắng');
    }
    else if(userInput_username === ' '){
        alert('Vui lòng nhập vào form input');
    }
    else if(!userInput_username){
        alert('Vui lòng nhập vào form input');
    }
    else {
    // Nếu chuỗi đầu vào không chứa khoảng trắng
    // Tiếp tục xử lý (ví dụ: gửi dữ liệu đăng nhập lên server)
        console.log(document.join_page_chat.username.value); // lay du lieu tu form input
        console.log(document.join_page_chat.room.value);
        window.location.href=`/chat?username=${document.join_page_chat.username.value}&&room=${document.join_page_chat.room.value}`;
    }

    return valid;
}












