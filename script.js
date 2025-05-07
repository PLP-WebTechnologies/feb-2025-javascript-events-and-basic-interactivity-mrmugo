document.addEventListener('DOMContentLoaded', () => {
    const magicButton = document.getElementById('magicButton');
    magicButton.addEventListener('click', () => {
        magicButton.textContent = '✨ Abracadabra! ✨';
        magicButton.style.backgroundColor = '#ff6b6b';
        setTimeout(() => {
            magicButton.textContent = 'Click Me for More Magic!';
            magicButton.style.backgroundColor = '#007bff';
        }, 2000);
    });

    // Hover Effects
    const hoverElement = document.getElementById('hoverElement');
    hoverElement.addEventListener('mouseover', () => {
        hoverElement.style.backgroundColor = '#b2ebf2';
        hoverElement.style.transform = 'scale(1.08)';
    });

    hoverElement.addEventListener('mouseout', () => {
        hoverElement.style.backgroundColor = '#e0f7fa';
        hoverElement.style.transform = 'scale(1)';
    });

    // Keypress Detection
    const keypressDisplay = document.getElementById('keypressDisplay');
    document.addEventListener('keypress', (event) => {
        keypressDisplay.textContent = `Last Key Pressed: ${event.key}`;
    });

    // 🤫 Bonus: Double-Click Secret
    const secretElement = document.getElementById('secretElement');
    secretElement.addEventListener('dblclick', () => {
        alert('🎉 Surprise! You found the secret!');
    });

    magicButton.addEventListener('mouseover', () => {
        magicButton.style.transform = 'scale(1.05)';
    });

    magicButton.addEventListener('mouseout', () => {
        magicButton.style.transform = 'scale(1)';
    });

    // Basic Image Gallery
    const imageGalleryContainer = document.getElementById('imageGallery');
    const nextImageButton = document.getElementById('nextImageButton');
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with your image paths
    let currentIndex = 0;

    function displayImage(index) {
        if (images.length > 0) {
            imageGalleryContainer.innerHTML = `<img src="${images[index]}" alt="Image ${index + 1}">`;
        } else {
            imageGalleryContainer.textContent = 'No images to display.';
        }
    }

    if (nextImageButton) {
        nextImageButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            displayImage(currentIndex);
        });
    }
    displayImage(currentIndex); // Initial display

    // Basic Tabs
    const tab1Button = document.getElementById('tab1Button');
    const tab2Button = document.getElementById('tab2Button');
    const tabContent1 = document.getElementById('tabContent1');
    const tabContent2 = document.getElementById('tabContent2');

    tab1Button.addEventListener('click', () => {
        tabContent1.classList.remove('hidden');
        tabContent2.classList.add('hidden');
        tab1Button.classList.add('active');
        tab2Button.classList.remove('active');
    });

    tab2Button.addEventListener('click', () => {
        tabContent1.classList.add('hidden');
        tabContent2.classList.remove('hidden');
        tab1Button.classList.remove('active');
        tab2Button.classList.add('active');
    });

   
    const fadeElement = document.getElementById('fadeElement');
    setTimeout(() => {
        fadeElement.style.opacity = 1;
    }, 500);

    const formElement = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const passwordStrength = document.getElementById('passwordStrength');

    formElement.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        validateForm();
    });

    function validateForm() {
        let isValid = true;

        // Required field check
        if (nameInput.value.trim() === "") {
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Email format validation
        if (emailInput.value.trim() !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Password rules
        if (passwordInput.value.length < 8) {
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
        }

        if (isValid) {
            alert('Form submitted successfully!');
            formElement.reset(); // Clear the form
        }
    }

  
    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        if (password.length < 8) {
            passwordStrength.textContent = 'Too short!';
            passwordStrength.style.color = 'red';
        } else if (password.length < 12) {
            passwordStrength.textContent = 'Weak';
            passwordStrength.style.color = 'orange';
        } else {
            passwordStrength.textContent = 'Strong';
            passwordStrength.style.color = 'green';
        } else if (password.length === 0) {
            passwordStrength.textContent = '';
        }
    });
});