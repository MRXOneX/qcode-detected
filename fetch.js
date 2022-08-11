
import scanner from "./scanner";


function isValidUrl(url) {
    const objRE = new RegExp('qrlabel\.co\/go\/');
    return objRE.test(url);
}


const fetch = async (result) => {
    // https://qrlabel.co/go/8e5ca369-dad3-4aa9-a774-1e96eeea33e9
    if (isValidUrl(result?.data)) {
        await axios.get(result.data + '?sign=123&name=test').then(r => {

            scanner.stop()
            containerVideoElem.style.display = 'none'
            camList.style.display = 'none'
            scanAgain.style.display = 'flex'

            if (r.status === 200) {
                document.querySelector('body').style.backgroundColor = 'green'

                done.style.display = 'block'
            } else {
                document.querySelector('body').style.backgroundColor = 'red'

                error.style.display = 'block'
            }
        })
    }
}

export default fetch