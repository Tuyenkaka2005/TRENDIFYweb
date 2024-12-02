// Lấy tất cả các nút tham gia
const joinButtons = document.querySelectorAll("#joinButton");

// Thêm sự kiện click cho từng nút
joinButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Chuyển đến trang thử thách tương ứng
    window.location.href = `challenge${index + 1}.html`; // Giả sử các trang thử thách là challenge1.html, challenge2.html, ...
  });
});
