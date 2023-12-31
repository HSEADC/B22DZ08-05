import './index.css'

var form = document.getElementById('my-form')

async function handleSubmit(event) {
  event.preventDefault()
  var status = document.getElementById('my-form-status')
  var data = new FormData(event.target)
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = 'Спасибо за подписку!'
        form.reset()
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data['errors']
              .map((error) => error['message'])
              .join(', ')
          } else {
            status.innerHTML = 'Возникли проблемы с отправкой почты.'
          }
        })
      }
    })
    .catch((error) => {
      status.innerHTML = 'Возникли проблемы с отправкой почты.'
    })
}

form.addEventListener('submit', handleSubmit)

const scene_1 = document.getElementById('scene_1')
const scene_2 = document.getElementById('scene_2')
const scene_3 = document.getElementById('scene_3')
const parallaxInstance = new Parallax(scene_1)
const parallaxInstance2 = new Parallax(scene_2)
const parallaxInstance3 = new Parallax(scene_3)
