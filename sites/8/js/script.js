var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://colorlovers.now.sh/api/palettes");
oReq.send();

function reqListener() {
    const results = JSON.parse(this.responseText);
    results.forEach(function(item) {


        let colorboxMarkup = '';

        var arrayLength = item.colors.length;
        for (var i = 0; i < arrayLength; i++) {
            console.log(item.colors[i]);
            colorboxMarkup += `<div class='mini--box' style="background:#${item.colors[i]};"></div>`
        }


        var d = new Date(item.dateCreated);
        console.log('DATE OBJECT', d.getDate());
        var dateString = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`;

        let markup = `
   <div class='card card-1'>
   <div class='container'>

     ${item.title}
     <span class='end'>

      ${dateString}

     </span>
     <p>
       <span class='big-number'> ${item.numViews} </span> views &nbsp;
       <span class='big-number'> ${item.numVotes} </span> votes &nbsp;
       <span class='big-number'> ${item.numComments} </span> comments &nbsp;
       <span class='big-number'> ${item.numHearts} </span> hearts &nbsp;
     </p>
     </div>
     <div class='box'>
      ${colorboxMarkup}
       </div>
     </div>`;
        document.body.innerHTML += markup;
    })
}
