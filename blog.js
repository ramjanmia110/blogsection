document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalKeyword = document.getElementById("modal-keyword");
    const modalText = document.getElementById("modal-text");
    const span = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.blog-image > img').forEach((img, index) => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImage.src = this.src;
            const parent = this.closest('.blog-content');
            modalTitle.textContent = parent.querySelector('#modal-keyword').textContent;
            modalKeyword.textContent = "#modal-title"; // Update as necessary
            modalText.textContent = parent.querySelector('#modal-text').textContent;
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }
});
