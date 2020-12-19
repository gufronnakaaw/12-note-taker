const btnCreate = document.getElementById('btn-create');
const inputTitle = document.querySelector('#input-title');
const textArea = document.querySelector('#text-area');
const div = document.createElement('div');
div.setAttribute('class', 'row justify-content-center')

btnCreate.addEventListener('click', () => {
    
    if( inputTitle.value == '' ){
        alert('title is empty!');
        return;
    } else if ( textArea.value == '' ){
        alert('note is empty!');
        return;
    }

    const fullString = textArea.value;
    const notFullString = fullString.substring(0, 100);


    let card = `
    <div class="card mt-5 mx-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${inputTitle.value}</h5>
            <p class="card-text">${notFullString}...</p>
            <a href="javascript:void(0)" class="card-link" onClick="readMore('${fullString}', '${inputTitle.value}');">Readmore</a>
        </div>
    </div>`;


    div.insertAdjacentHTML('beforeend', card);
    document.querySelector('.container').append(div);

    inputTitle.value = '';
    textArea.value = '';
});


const readMore = (textArea, inputTitle) => {
  $('#modal-readmore').modal('show');

  document.querySelector('.modal-title').innerHTML = inputTitle;
  document.querySelector('.modal-body p').innerHTML = textArea;
}

