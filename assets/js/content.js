labels = [
    {
        id: 0,
        icon: "fas fa-medal",
        title: "Conquistas",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quibusdam quo sapiente nesciunt magnam ipsam, aliquid ab tenetur eaque fuga libero incidunt unde odio aut voluptas nemo commodi eveniet eligendi reprehenderit esse porro itaque amet ea. Mollitia, fugit non harum enim temporibus natus beatae culpa quibusdam assumenda neque hic id quaerat eveniet dignissimos nisi qui, consequatur nam ea ipsa quam. Quo deleniti officia delectus numquam nostrum ut veniam placeat tenetur, dolorem distinctio animi soluta porro expedita similique atque architecto neque praesentium. Tempora maiores, praesentium voluptatem reprehenderit non cumque nesciunt molestiae veritatis asperiores exercitationem et obcaecati mollitia iusto quisquam id odit?"
    },
    {
        id: 1,
        icon: "fas fa-ship",
        title: "Template",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quibusdam quo sapiente nesciunt magnam ipsam, aliquid ab tenetur eaque fuga libero incidunt unde odio aut voluptas nemo commodi eveniet eligendi reprehenderit esse porro itaque amet ea. Mollitia, fugit non harum enim temporibus natus beatae culpa quibusdam assumenda neque hic id quaerat eveniet dignissimos nisi qui, consequatur nam ea ipsa quam. Quo deleniti officia delectus numquam nostrum ut veniam placeat tenetur, dolorem distinctio animi soluta porro expedita similique atque architecto neque praesentium. Tempora maiores, praesentium voluptatem reprehenderit non cumque nesciunt molestiae veritatis asperiores exercitationem et obcaecati mollitia iusto quisquam id odit?"
    },
    {
        id: 2,
        icon: "fas fa-trophy",
        title: "Competicoes",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quibusdam quo sapiente nesciunt magnam ipsam, aliquid ab tenetur eaque fuga libero incidunt unde odio aut voluptas nemo commodi eveniet eligendi reprehenderit esse porro itaque amet ea. Mollitia, fugit non harum enim temporibus natus beatae culpa quibusdam assumenda neque hic id quaerat eveniet dignissimos nisi qui, consequatur nam ea ipsa quam. Quo deleniti officia delectus numquam nostrum ut veniam placeat tenetur, dolorem distinctio animi soluta porro expedita similique atque architecto neque praesentium. Tempora maiores, praesentium voluptatem reprehenderit non cumque nesciunt molestiae veritatis asperiores exercitationem et obcaecati mollitia iusto quisquam id odit?"
    }
]

function changeContent(id) {

    div = document.getElementById('main-icon')

    label = labels[id]

    content = 
    `
        <div  class="fade-in-label">
            <i class="${label.icon}"></i>
            <h3>${label.title}</h3>
            <p>${label.text}</p>
        </div>
    `

    div.innerHTML = content
}

function label1() {
    div = document.getElementById('main-icon')

    label = labels[0]

    content = 
    `
        <div class="fade-in-label">
            <i class="${label.icon}"></i>
            <h3>${label.title}</h3>
            <p>${label.text}</p>
        </div>
    `

    div.innerHTML = content
}