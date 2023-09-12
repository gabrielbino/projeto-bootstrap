document.addEventListener("DOMContentLoaded", function () {
    const galeria = document.getElementById("galeria");
    const modalImage = document.getElementById("modalImage");

    const photos = [
        {
            src: "../img/html5.png",
            question: "O que é HTML 5? Para que serve?"
        },
        {
            src: "../img/css3.jpg",
            question: "O que é CSS3? Para que serve?"
        },
        {
            src: "../img/js.jpeg",
            question: "O que é Javascript? Para que serve?"
        },
        {
            src: "../img/Bootstrap.png",
            question: "O que é Bootstrap? Para que serve?"
        }

        // Adicione mais objetos conforme necessário
    ];
    
    // Função para adicionar fotos à galeria dinamicamente
    function criarGaleria() {
        photos.forEach((photo, index) => {
            const img = document.createElement("img");
            img.src = photo.src;
            img.classList.add("img-thumbnail");
            img.addEventListener("click", () => {
                modalImage.src = photo.src;
                modalQuestion.textContent = photo.question;
                const photoModal = new bootstrap.Modal(document.getElementById("photoModal"));
                photoModal.show();
            });

            const col = document.createElement("div");
            col.classList.add("col-md-4", "mb-4");
            col.appendChild(img);

            galeria.appendChild(col);
        });
    }
    criarGaleria();
});