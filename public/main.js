
console.log(`我是 main.js`);
let n = 1
getPAGE.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `/page${n+1}.json`)
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4) {
            if(xhr.status >=200 & xhr.status < 300) {
                const array = JSON.parse(xhr.response)
                const request = array.map(item=>`<li>${item.id}</li>`).join('')
                document.querySelector('ul').innerHTML += request
            } else {
                
            }
            n++;
            if(n===4) {
                getPAGE.disabled = true
            }
        }
    }
    xhr.send()
}
getJSON.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/5.json')
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            if(xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.response);
                console.log(typeof xhr.response);
                const obj = JSON.parse(xhr.response)
                console.log(obj);
                console.log(typeof obj);
            }
            else {
                console.log('出错了');
        } 
        }
    }
    xhr.send()
}
getXML.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '4.xml')
    xhr.onreadystatechange = () => {
        // console.log(xhr.readyState);
        if(xhr.readyState === 4) {
            if(xhr.status >= 200 && xhr.status < 300) {
                const dom = xhr.responseXML
                const text = dom.querySelector('message').textContent.trim()
                console.log(text);
            } else {
                console.log('出错了');
            }
        }
    }
    xhr.send()
}
getHTML.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/3.html')
    xhr.onload = () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = xhr.response
    }
    xhr.onerror = () => {

    }
    xhr.send()
}
getJS.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/2.js' )
    xhr.onload = () => {
        const script = document.createElement('script')
        document.body.appendChild(script)
        script.innerHTML = xhr.response
    }
    xhr.onerror = () => {
            console.log('error');
    }
    xhr.send()
}
getCSS.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/style.css')
    xhr.send()
    xhr.onload = () => {
        // console.log(xhr.response);
        const style = document.createElement('style')
        document.head.appendChild(style)
        style.innerHTML = xhr.response
    }
    xhr.onerror = () => {
        console.log('error');
    }

}