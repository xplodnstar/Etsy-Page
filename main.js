var itemList = document.querySelector('.grid')
var results = document.querySelector('#results')

var resultText = `
    <div id="results">
        <p><a href="#">All categories</a><strong>
         >  "Star Wars Wedding" </strong>(${items.count} Results)</p>
    </div>
    `

results.innerHTML = resultText

var effThis = items.results.map(item => {
    return {
        title: item.title,
        images: item.Images[0].url_fullxfull,
        shop: item.Shop.shop_name,
        shopURL: item.Shop.url,
        price: item.price,
        rank: item.featured_rank,
        variations: item.has_variations,
        views: item.views,
        url: item.url
    }
})

console.log(effThis)

var itemGrid = effThis.map(item => {
    var title;
    if (item.title.length > 30) {
        title = item.title.substring(0, 30) + '...'
    } else {
        title = item.title
    }

    return `
    <div class="itemList">
        <a href="${item.url}" target="_blank"> 
            <img src="${item.images}" class="pic" /><br>
            <span class="title"><abbr title="${item.title}">${title}</abbr></span>
            </a><br>
        <a href="${item.shopURL}" target="_blank" class="store">${item.shop}</a><br>
        <a href="${item.url}" class="review" target="_blank">
            <img src="./assets/fiveStars.png"><span >(${item.views})</span>
        </a><br>
        <a href="${item.url}" target="_blank">
            <span class="price">$${item.price}</span>
        </a>
    </div>
    `
}).join('')

itemList.innerHTML = itemGrid






