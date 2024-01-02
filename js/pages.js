let currentPage = 1;

function changePage(page) {
    document.querySelector('.page.active').classList.remove('active');
    document.querySelector('.instructions.page:nth-child(' + page + ')').classList.add('active');
    currentPage = page;
}