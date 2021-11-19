class ShowQuote extends HTMLElement {
 
   set results(results) {
       this._results = results
       this.render()
   }
 
   renderError(message) {
       this.innerHTML += `<h2 class="placeholder">${message}</h2>`
    }
 
   render() {
        this.innerHTML = `
        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-yellow-500 opacity-25"></div>    
        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><i class="fas fa-tags fa-sm text-yellow-700 mr-2"></i>${this._results.tags}</p>
        <p class="pt-6 text-sm flex items-center justify-center">" ${this._results.content} "</p>    
        <p class="pt-6 text-gray-700 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><i class="fas fa-user text-yellow-700 mr-2 lg:ml-1"></i>${this._results.author}</p>
        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-yellow-500 opacity-25"></div>
    `}
}
 
customElements.define('show-quote', ShowQuote)