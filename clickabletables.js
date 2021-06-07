[...document.querySelectorAll('table th:first-child')].filter((th) => th.innerText.match(/[1-9]*d[1-9]+/)).forEach((th) => {
    tableId = th.parentNode.parentNode.parentNode.dataset.contentChunkId;
    th.innerHTML = `<a onclick="siiimpleToast.message(getRandomTable('${tableId}').roll());">${th.innerText}</a>`;
});
