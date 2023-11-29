const modalTrigger = document.querySelector("#btn-get");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal_close");

const openModal = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
};

const closeModalOverlay = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};

modalTrigger.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
modal.addEventListener("click", closeModalOverlay);

const openModalOnScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollY + windowHeight >= documentHeight) {
        openModal();
        window.removeEventListener("scroll", openModalOnScroll);
    }
};

window.addEventListener("scroll", openModalOnScroll);

setTimeout(() => {
    modalTrigger.click();
}, 10000);