// Panggil fungsi sapaan saat halaman dimuat
welcomeSpeech();

// Panggil fungsi jam saat halaman dimuat
updateTime();
// Atur agar fungsi jam diupdate setiap detik
setInterval(updateTime, 1000);


function welcomeSpeech() {
    /// Show prompt to ask for user's name
    let name = prompt("Enter your name:");

    // Greet the user with their name, atau 'Guest' jika kosong
    if (name) {
        document.getElementById('greet-name').innerHTML = `Hi ${name}, `;
    } else {
        document.getElementById('greet-name').innerHTML = 'Hi Guest, ';
    }
}

// Fungsi untuk update jam digital
function updateTime() {
    const now = new Date();
    // Format tanggal dan waktu agar lebih mudah dibaca
    const formattedTime = now.toLocaleString('en-GB', { 
        dateStyle: 'full', 
        timeStyle: 'medium' 
    });
    document.getElementById('current-time').innerHTML = formattedTime;
}

// --- Form Handling Baru ---

// 1. Dapatkan referensi ke form
const contactForm = document.getElementById('contact-form');

// 2. Tambahkan 'event listener' untuk event 'submit'
contactForm.addEventListener('submit', function(event) {
    // 3. Mencegah perilaku default form (reload halaman)
    event.preventDefault();
    
    // 4. Panggil fungsi untuk validasi dan tampilkan data
    validateAndDisplay();
});

/// Function to validate form inputs and display them
function validateAndDisplay() {
    /// Get form input values
    const name = document.getElementById('name-input').value;
    const dob = document.getElementById('dob-input').value;
    const message = document.getElementById('message-input').value;

    /// Get selected gender
    let gender = "";
    const maleRadio = document.getElementById('gender-male');
    const femaleRadio = document.getElementById('gender-female');

    if (maleRadio.checked) {
        gender = maleRadio.value;
    } else if (femaleRadio.checked) {
        gender = femaleRadio.value;
    }

    /// Check if any field is empty
    if (name === "" || dob === "" || gender === "" || message === "") {
        /// Show alert if any field is empty
        alert("Semua field wajib diisi!");
    } else {
        /// Tampilkan output di kolom kanan
        document.getElementById('output-name').innerHTML = name;
        document.getElementById('output-dob').innerHTML = dob;
        document.getElementById('output-gender').innerHTML = gender;
        document.getElementById('output-message').innerHTML = message;
        
        // Opsional: Kosongkan form setelah submit
        // contactForm.reset();
    }
}