document.getElementById('flipButton').addEventListener('click', function() {
    const button = this;
    const textToCopy = 'play.beecraft.online'; // Текст для копіювання

    // Додаємо клас для обертання кнопки
    button.classList.add('flip');

    // Затримка перед зміною тексту
    setTimeout(() => {
        const newText = 'Скопійовано';
        button.querySelector('.go').textContent = newText;
        
        // Копіюємо текст у буфер обміну
        navigator.clipboard.writeText(textToCopy)
            .then(() => console.log('Text copied to clipboard:', textToCopy))
            .catch(err => console.error('Failed to copy text: ', err));

        // Відновлюємо стилі після обертання
        button.classList.remove('flip'); // Видаляємо клас обертання
    }, 600); // Затримка, відповідна тривалості анімації
});



document.getElementById('borr').addEventListener('click', function () {
    window.location.href = 'https://donatello.to/Hizart';
})