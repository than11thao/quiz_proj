const modalBtns = [...document.getElementsByClassName('modal-button')]
const modalBody = document.getElementById('modal-body-confirm')
const startBtn = document.getElementById('start-button')

const url = window.location.href

modalBtns.forEach(modalBtn => modalBtn.addEventListener('click',()=> {
    const pk = modalBtn.getAttribute('data-pk')
    const name = modalBtn.getAttribute('data-quiz')
    const numQuestions = modalBtn.getAttribute('data-question')
    const difficulty = modalBtn.getAttribute('data-difficulty')
    const scroreToPass = modalBtn.getAttribute('data-pass')
    const time = modalBtn.getAttribute('data-time')

    modalBody.innerHTML = `
        <div class="h5 mb-3"> Are you sure want to begin"<b>${name}</b>"?</div>
        <div class = "text-muted">
            <ul>
                <li>difficulty: <b>${difficulty}</b></li>
                <li>number of questions: <b>${numQuestions}</b></li>
                <li>score to pass: <b>${scroreToPass}</b></li>
                <li>time: <b>${time}</b></li>
            </ul>
        </div>
    `
    startBtn.addEventListener('click', ()=>{
        // console.log(window.location.href)
        window.location.href = url + pk
    })
}))
