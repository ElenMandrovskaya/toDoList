const refs = {
    input: document.querySelector('#toDoEl'),
    createBtn: document.querySelector('.addBtn'),
    clearBtn: document.querySelector('.clBtn'),
    list: document.querySelector('#list'),
}

function createItem(e) {
    if (refs.input.value.length > 0){
    const itemEl = document.createElement('li');
    itemEl.classList.add('todo-item');
    itemEl.style.display = 'flex';

    const itemName = document.createElement('p');
        itemName.classList.add('todo-text');
        itemName.textContent = refs.input.value;
        itemName.style.marginRight = '100px'
        itemEl.appendChild(itemName);

    const itemBtnDone = document.createElement('button');
        itemBtnDone.classList.add('done-btn');
        itemBtnDone.textContent = 'done';
        itemBtnDone.style.backgroundColor = 'green';
        itemEl.appendChild(itemBtnDone);

    const itemBtnRmv = document.createElement('button');
        itemBtnRmv.classList.add('rmv-btn');
        itemBtnRmv.textContent = 'remove';
        itemBtnRmv.style.backgroundColor = 'red';
        itemEl.appendChild(itemBtnRmv);

    refs.list.appendChild(itemEl);
        refs.input.value = '';
        onClickBtnRmv(itemBtnRmv)
        onClickBtnDone(itemBtnDone)
    }
}
function clearList(e) {
    refs.list.innerHTML = '';
}
refs.input.addEventListener("keyup", (e) => {
    if (e.code === 'Enter') {
        createItem();
    }
});
 function onClickBtnRmv(el) {
        el.addEventListener("click", (e) => {
            el.parentElement.remove();
            e.stopPropagation();
        });
};
function onClickBtnDone(el) {
    el.addEventListener("click", (e) => {
        if (e.target.classList.contains('done-btn')) {
            el.parentElement.classList.toggle('checked');
            el.remove()
        }
    })
}


refs.createBtn.addEventListener('click', createItem);
refs.clearBtn.addEventListener('click', clearList);
