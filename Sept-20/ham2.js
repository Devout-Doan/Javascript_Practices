// Hàm kiểm tra số nguyên tố
function isPrime(number) {
    // Số nhỏ hơn 2 không phải là số nguyên tố
    if (number < 2) return false;

    // Chỉ cần kiểm tra đến căn bậc hai của số
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // Nếu chia hết thì không phải số nguyên tố
        }
    }
    return true; // Nếu không chia hết cho bất kỳ số nào, nó là số nguyên tố
}

// Tìm tất cả các số nguyên tố nhỏ hơn 10.000
function findPrimesBelow10000() {
    const primes = [];
    for (let i = 2; i < 10000; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Chạy hàm và hiển thị kết quả
const primes = findPrimesBelow10000();
console.log("Các số nguyên tố nhỏ hơn 10.000:");
console.log(primes.join(", "));


// Danh sách sản phẩm ban đầu
let products = ["iPhone 15", "Samsung Galaxy S24", "MacBook Pro"];

// Hàm hiển thị danh sách sản phẩm
function renderProducts() {
    const list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach((product, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
          <span>${product}</span>
          <div class="actions">
            <button class="edit-btn" onclick="editProduct(${index})">Sửa</button>
            <button class="delete-btn" onclick="deleteProduct(${index})">Xóa</button>
          </div>
        `;

        list.appendChild(li);
    });
}

// Danh sách sản phẩm ban đầu
let products = ["iPhone 15", "Samsung Galaxy S24", "MacBook Pro"];

// Hiển thị danh sách sản phẩm dưới dạng bảng
function renderProducts() {
    const tableBody = document.getElementById("productTableBody");
    tableBody.innerHTML = "";

    products.forEach((product, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${product}</td>
          <td>
            <button class="edit-btn" onclick="editProduct(${index})">Sửa</button>
            <button class="delete-btn" onclick="deleteProduct(${index})">Xóa</button>
          </td>
        `;

        tableBody.appendChild(row);
    });
}

// Thêm sản phẩm mới
function addProduct() {
    const input = document.getElementById("productInput");
    const newProduct = input.value.trim();

    if (newProduct === "") {
        alert("Vui lòng nhập tên sản phẩm!");
        return;
    }

    products.push(newProduct);
    input.value = "";
    renderProducts();
}

// Sửa sản phẩm
function editProduct(index) {
    const currentName = products[index];
    const newName = prompt("Nhập tên sản phẩm mới:", currentName);

    if (newName !== null && newName.trim() !== "") {
        products[index] = newName.trim();
        renderProducts();
    }
}

// Xóa sản phẩm
function deleteProduct(index) {
    if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
        products.splice(index, 1);
        renderProducts();
    }
}

// Hiển thị bảng sản phẩm ban đầu
renderProducts();