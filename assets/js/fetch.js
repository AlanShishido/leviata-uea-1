let posts = [
    {
        id: 1,
        img: 'logo.jpg',
        width: "100%",
        description: "agakjhdsgfkajsdhgfkasjhdgfkajsdhgfkasdghfkasdfk"
    },
    {
        id: 1,
        img: 'logo.jpg',
        width: "100%",
        description: "agakjhdsgfkajsdhgfkasjhdgfkajsdhgfkasdghfkasdfk"
    },
    {
        id: 1,
        img: 'logo.jpg',
        width: "100%",
        description: "agakjhdsgfkajsdhgfkasjhdgfkajsdhgfkasdghfkasdfk"
    },
    {
        id: 1,
        img: 'logo.jpg',
        width: "100%",
        description: "agakjhdsgfkajsdhgfkasjhdgfkajsdhgfkasdghfkasdfk"
    },
    {
        id: 1,
        img: 'logo.jpg',
        width: "100%",
        description: "agakjhdsgfkajsdhgfkasjhdgfkajsdhgfkasdghfkasdfk"
    },
    {
        id: 1,
        img: 'logo.jpg',
        width: "100%",
        description: "agakjhdsgfkajsdhgfkasjhdgfkajsdhgfkasdghfkasdfk"
    },
    {
        id: 1,
        img: 'logo.jpg',
        width: "100%",
        description: "agakjhdsgfkajsdhgfkasjhdgfkajsdhgfkasdghfkasdfk"
    },
    {
        id: 1,
        img: 'logo.jpg',
        width: "100%",
        description: "agakjhdsgfkajsdhgfkasjhdgfkajsdhgfkasdghfkasdfk"
    },
    {
        id: 1,
        img: 'logo.jpg',
        width: "100%",
        description: "agakjhdsgfkajsdhgfkasjhdgfkajsdhgfkasdghfkasdfk"
    }
]

async function fetchData() {
    let _id = 1;
    // await fetch('https://www.instagram.com/leviatauea/?__a=1')
    //     .then(response => response.json()
    //         .then(data => {
    //             profile_logo = data.graphql.user.profile_pic_url_hd;
    //             data.graphql.user.edge_owner_to_timeline_media.edges.forEach(element => {
    //                 posts.push({
    //                     id: _id,
    //                     img: element.node.thumbnail_src,
    //                     width: "100%",
    //                     description: element.node.edge_media_to_caption.edges == 0 ? "" : element.node.edge_media_to_caption.edges[0].node.text
    //                 })
    //                 _id++;
    //             });
    //             console.log(data.graphql.user)
    //         }))
    console.log(posts);
    load();
    document.getElementById("cards").style.justifyContent = "center";
}

loaded = 8
id = 0
timer = 300

function load() {
    var myVar = setInterval(() => {
        if (id === loaded) {
            clearInterval(myVar)
        }
        else {
            addCard(posts[id])
            id++;
        }
    }, timer);
}


function addCard(object) {
    const work = document.getElementById('cards');

    const content = `
        <div class="card" id="${object.id}">
            <img src="./assets/imgs/${object.img}" width="${object.width}"/>
        </div>
    `

    work.innerHTML += content;
}

// <div style="text-align: left; font-size: 23px; font-family: 'Comic Neue', cursive; font-weight: 800">
//     <i class="far fa-heart"></i> <span>${object.likes}</span>&nbsp;<i class="far fa-comment"></i> <span>${object.comments}</span>
// </div>

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Obrigado! Logo entraremos em contato.";
    }

    function error() {
      status.innerHTML = "Parece que teve um problema!!";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }