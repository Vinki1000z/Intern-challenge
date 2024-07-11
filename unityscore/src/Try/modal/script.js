document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal-frame');
    const overlay = document.querySelector('.modal-overlay');

    // Remove animation classes after animation ends
    modal.addEventListener('animationend', function(e) {
        if (modal.classList.contains('state-leave')) {
            modal.classList.remove('state-leave');
        }
    });

    // Close modal event
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            overlay.classList.remove('state-show');
            modal.classList.remove('state-appear');
            modal.classList.add('state-leave');
        });
    });

    // Open modal event
    document.querySelectorAll('.open').forEach(openBtn => {
        openBtn.addEventListener('click', function() {
            overlay.classList.add('state-show');
            modal.classList.remove('state-leave');
            modal.classList.add('state-appear');
        });
    });
});
