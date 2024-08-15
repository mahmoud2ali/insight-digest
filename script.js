$(document).ready(function () {
    $(window).on('scroll', ()=>{
        if($(this).scrollTop() > 300)
        {
        //     $('header').addClass('header-scrolled');
            $('nav').addClass('nav-scrolled');

        }
        else{
            // $('header').removeClass('header-scrolled');
            $('nav').removeClass('nav-scrolled');    
        }
    })   
});



function openCard(item){
    const detailsElement = item.querySelector(".details").textContent;
    const titleElement = item.querySelector(".title").textContent;

    
    const modal = document.createElement("div");
    modal.innerHTML = `
    <div class="modal" id="myModal">
     <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">${titleElement}</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        ${detailsElement}
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>

        </div>
        </div>
    </div>
    `

    item.appendChild(modal);

};


function display_cards(news){
    const policy_container = document.getElementById("cards-container-policy");
    const political_container = document.getElementById("cards-container-political");
    const sports_container = document.getElementById("cards-container-sports");

    news.forEach(([id, item]) => {
        if(item.category == "sports")
        {
            const card = document.createElement("div");
            if(item.important == "false")
            {
                card.classList.add("col-lg-4");
                card.innerHTML = `
                <div onclick="openCard(this)" class="card_" data-bs-toggle="modal" data-bs-target="#myModal">
                    <div class="details hidden">${item.details}</div>
                    <div><img src="imgs/cards/${item.img}"></div>
                    <div class="title">${item.title}</div>
                    <div class="content">${item.content}</div>
                </div>` 
            }
            else 
            {
                card.classList.add("col-12");
                card.innerHTML = `
                <div onclick="openCard(this)" class="important-card" data-bs-toggle="modal" data-bs-target="#myModal">
                    <div class="important-card-P"> 
                    <div class="details hidden">${item.details}</div>
                        <div class="title">${item.title}</div>
                        <div class="content">${item.content}</div>
                    </div>   
                    <div><img src="imgs/cards/${item.img}"></div>
                </div>` 
            }
            
            sports_container.appendChild(card);
        }
       
        else if(item.category == "political")
        {
            const card = document.createElement("div");
            if(item.important == "false")
            {
                card.classList.add("col-lg-4");
                card.innerHTML = `
                <div onclick="openCard(this)" class="card_" data-bs-toggle="modal" data-bs-target="#myModal">
                    <div class="details hidden">${item.details}</div>
                    <div><img src="imgs/cards/${item.img}"></div>
                    <div class="title">${item.title}</div>
                    <div class="content">${item.content}</div>
                </div>` 
            }
            else 
            {
                card.classList.add("col-12");
                card.innerHTML = `
                <div onclick="openCard(this)" class="important-card" data-bs-toggle="modal" data-bs-target="#myModal">
                    <div class="important-card-P"> 
                    <div class="details hidden">${item.details}</div>
                        <div class="title">${item.title}</div>
                        <div class="content">${item.content}</div>
                    </div>   
                    <div><img src="imgs/cards/${item.img}"></div>
                </div>`  
            }
            
            political_container.appendChild(card);
        }
        else if(item.category == "policy")
        {
            const card = document.createElement("div");
            if(item.important == "false")
            {
                card.classList.add("col-lg-4");
                card.innerHTML = `
                  <div onclick="openCard(this)" class="card_" data-bs-toggle="modal" data-bs-target="#myModal">
                    <div class="details hidden">${item.details}</div>
                    <div><img src="imgs/cards/${item.img}"></div>
                    <div class="title">${item.title}</div>
                    <div class="content">${item.content}</div>
                </div>`  
            }
            else 
            {
                card.classList.add("col-12");
                card.innerHTML = `
                <div onclick="openCard(this)" class="important-card" data-bs-toggle="modal" data-bs-target="#myModal">
                    <div class="important-card-P"> 
                    <div class="details hidden">${item.details}</div>
                        <div class="title">${item.title}</div>
                        <div class="content">${item.content}</div>
                    </div>   
                    <div><img src="imgs/cards/${item.img}"></div>
                </div>` 
            }
            
            policy_container.appendChild(card);
        }
    }) 
}

// function openTakerCard(item)
// {
//     const detailsElement = item.querySelector(".details").textContent;
//     const titleElement = item.querySelector(".title").textContent;

//     const modal = document.createElement("div");
//     modal.innerHTML = `
//         <div>${detailsElement}</div>
//         <div>${detailsElement}</div> 
//     `
//     if(detailsElement)
//     {
//         detailsElement.classList.toggle("hidden")
//         detailsElement.classList.toggle("popup_taker")

//     }

// }

function dispaly_page_takers(news){
    news.forEach(([id,item])=>{
        const taker_row = document.getElementById("taker-content");
        const taker = document.createElement("div");
        taker.classList.add("taker-home")
        if(item.taker == "true" && item.important == "true")
        {
            taker.innerHTML =`
            <a onclick="openCard(this)" data-bs-toggle="modal" data-bs-target="#myModal">
            <div class="details hidden">${item.details}</div>
            <div class="title hidden">${item.title}</div>
            <div class="content">${item.content}</div>
            <div><img src="./imgs/cards/${item.img}"/></div>
            </a>
            `
        }
        taker_row.appendChild(taker);
    })
}


function display_header_takers(news){
    
    const headerTaker = document.getElementById("header-taker");
    const taker_list = []

    news.forEach(([id,item])=>{        
        if(item.taker == "true")
        {
            const item_content = `${item.content}`
            taker_list.push(item_content);
        }
    });

    let i = 0;
    function takers() {
        const new_taker = document.createElement("p")
        if(taker_list.length > 0)
        {
             new_taker.innerHTML = `
            <a href="#">${taker_list[i]}</a>`
        

            if(headerTaker.firstChild)
            {
                headerTaker.removeChild(headerTaker.firstChild);
            }

            headerTaker.appendChild(new_taker);
            i= (i + 1) % taker_list.length;
        }
       
    }
    takers();
    setInterval(takers, 3000);
}

url = "./data.json"
let i = 0;


let news = []

fetch(url)
.then(res => res.json())
.then(data => {
    news = Array.from(Object.entries(data));  

    display_cards(news);
    dispaly_page_takers(news);
    display_header_takers(news);

})
.catch(error => console.log(error));




function search(){

    let input = document.getElementById("searchInput").value.trim();

    const page2_container = document.createElement("div");
    if(input == "")
    {
        alert("serch input is empty! 😊");
        return;
    }

    // let regex = `/^${input}^/i`;
    // console.log(regex);

 
    let regex = new RegExp(`\\b${input}\\b`, 'gi');
    console.log(regex)

    const titles = []
    const contents = []

    news.forEach(([id,item])=>{ 
        const content = `${item.content}`;
        // console.log("type of content: ", typeof(content))
        // console.log("content: ", content)

        if(typeof(content) == "string"){
            // const match = regex.match(content);
            let match = content.match(regex)
            

            if(match)
            {
            
                const new_item = document.createElement("div");

                new_item.innerHTML = `
                <div class="card">   
                    <div class="card-title">${item.title}</div>
                    <div class="card-text">${content}</div>
                </div>
                `

                titles.push(`${item.title}\n`);
                contents.push(`${item.content}\n`);


                page2_container.appendChild(new_item)
                // console.log("match found: ", match)
                
            }
        }
        else
        {
            
            console.log("content is undifiend ", content)
        }
 
    });
 

    // localStorage.setItem('userInput', page2_container.textContent);
   
    localStorage.setItem('titles', titles);
    localStorage.setItem('contents', contents);


    window.location.href = './item.html';
}