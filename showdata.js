//1. getData ( fetch ,url )
//2. appendData (data , tocation )

//elect, jewel ( url will vary)

async function getData(url) {

    try {
    
    let res = await fetch(url)

    let data = await res.json()

    return data

    }

    catch (err) {
        console.log('err:',err)
    }
}

function appendData(data,location) {

    data.forEach((el) =>{

        let div = document.createElement('div')

        let p = document.createElement('p')

        let img = document.createElement('img')

        img.src = el.image

        p.innerText = el.title

        div.append(img, p)

        location.append(div)
    })

}

export {getData,appendData}