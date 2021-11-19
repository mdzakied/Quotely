import '../component/show-quote.js'
import '../component/tippy.js'

function main() {

    const baseUrl = 'https://api.quotable.io'

    const getQuote = async () => {
        try {
            const response = await fetch(`${baseUrl}/random`)
            const responseJson = await response.json()
            if(responseJson.error) {
                showResponseMessage(responseJson.message)
            } else {
                renderAllresults(responseJson)
            }
        } catch(error) {
            showResponseMessage(error)
        }
    }

    const getFamousquote = async () => {
        try {
            const response = await fetch(`${baseUrl}/random?tags=famous-quotes`)
            const responseJson = await response.json()
            if(responseJson.error) {
                showResponseMessage(responseJson.message)
            } else {
                renderAllresults(responseJson)
            }
        } catch(error) {
            showResponseMessage(error)
        }
    }

    const getCategory1quote = async () => {
        try {
            const response = await fetch(`${baseUrl}/random?tags=life|love|friendship|happiness|wisdom`)
            const responseJson = await response.json()
            if(responseJson.error) {
                showResponseMessage(responseJson.message)
            } else {
                renderAllresults(responseJson)
            }
        } catch(error) {
            showResponseMessage(error)
        }
    }

    const getCategory2quote = async () => {
        try {
            const response = await fetch(`${baseUrl}/random?tags=technology|business|education|politics`)
            const responseJson = await response.json()
            if(responseJson.error) {
                showResponseMessage(responseJson.message)
            } else {
                renderAllresults(responseJson)
            }
        } catch(error) {
            showResponseMessage(error)
        }
    }

    const getCategory3quote = async () => {
        try {
            const response = await fetch(`${baseUrl}/random?tags=proverb|literature|inspirational|success`)
            const responseJson = await response.json()
            if(responseJson.error) {
                showResponseMessage(responseJson.message)
            } else {
                renderAllresults(responseJson)
            }
        } catch(error) {
            showResponseMessage(error)
        }
    }

    const getCategory4quote = async () => {
        try {
            const response = await fetch(`${baseUrl}/random?tags=religion|faith`)
            const responseJson = await response.json()
            if(responseJson.error) {
                showResponseMessage(responseJson.message)
            } else {
                renderAllresults(responseJson)
            }
        } catch(error) {
            showResponseMessage(error)
        }
    }

    const getCategory5quote = async () => {
        try {
            const response = await fetch(`${baseUrl}/random?tags=future|history`)
            const responseJson = await response.json()
            if(responseJson.error) {
                showResponseMessage(responseJson.message)
            } else {
                renderAllresults(responseJson)
            }
        } catch(error) {
            showResponseMessage(error)
        }
    }

    const getCategory6quote = async () => {
        try {
            const response = await fetch(`${baseUrl}/random?tags=science|nature`)
            const responseJson = await response.json()
            if(responseJson.error) {
                showResponseMessage(responseJson.message)
            } else {
                renderAllresults(responseJson)
            }
        } catch(error) {
            showResponseMessage(error)
        }
    }
    
    const renderAllresults = (results) => {

        const clubListElement = document.querySelector('show-quote')
        
        clubListElement.results = results

    }

    const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message)
    }

    const buttonGetquote = document.querySelector('#buttonGetquote')
    const buttonGetfamousquote = document.querySelector('#buttonGetfamousquote')
    const buttonGetcategory1quote = document.querySelector('#getCategory1quote')
    const buttonGetcategory2quote = document.querySelector('#getCategory2quote')
    const buttonGetcategory3quote = document.querySelector('#getCategory3quote')
    const buttonGetcategory4quote = document.querySelector('#getCategory4quote')
    const buttonGetcategory5quote = document.querySelector('#getCategory5quote')
    const buttonGetcategory6quote = document.querySelector('#getCategory6quote')

    buttonGetquote.addEventListener('click', function () {
        getQuote()
    })

    buttonGetfamousquote .addEventListener('click', function () {
        getFamousquote()
    })

    buttonGetcategory1quote.addEventListener('click', function () {
        getCategory1quote()
    })

    buttonGetcategory2quote.addEventListener('click', function () {
        getCategory2quote()
    })

    buttonGetcategory3quote.addEventListener('click', function () {
        getCategory3quote()
    })

    buttonGetcategory4quote.addEventListener('click', function () {
        getCategory4quote()
    })

    buttonGetcategory5quote.addEventListener('click', function () {
        getCategory5quote()
    })
    
    buttonGetcategory6quote.addEventListener('click', function () {
        getCategory6quote()
    })
}

export default main