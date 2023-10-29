const url = 'https://api.quotable.io/random'
const quoteEl = document.getElementById('quote')
const tagsEl = document.getElementById('tags')
const authorEl = document.getElementById('author')
const roll = document.getElementById('roll')
const share = document.getElementById('share')

const rs= {
"_id":"LpBt1VcHO",
"content":"Love is flower like; Friendship is like a sheltering tree.",
"author":"Samuel Taylor Coleridge",
"tags":["Friendship"],
"authorSlug":"samuel-taylor-coleridge",
"length":58,
"dateAdded":"2020-02-27",
"dateModified":"2023-04-14"
}

function getData(){
 return fetch(url)
  .then(res=> res.json())
  .then(res =>  res)
  .catch(err => console.log(err))
}

async function setData(){
  const {content, author, tags} = await getData()
  while (tagsEl.firstChild) {
    tagsEl.removeChild(tagsEl.firstChild);
  }
  quoteEl.textContent = content
  authorEl.textContent = author
  tags.map(
    tag=>{
    const newTag = document.createElement('li')
    newTag.textContent = tag
    tagsEl.append(newTag)

    }
  )
}

setData()

roll.addEventListener('click', setData)


function clip(text){
  navigator.clipboard.writeText(quoteEl.textContent)
  .then(()=>
      alert('✅ copy to clipboard')
    )
    .catch((err)=>
      alert('❌ error to copy')
    )
}

share.addEventListener('click', clip)
