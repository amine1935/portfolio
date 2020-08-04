console.log("Amine");

let btnProjet = document.getElementsByClassName("btn btn-secondary")

for (var i=0; btnProjet.length > i; i++)
{
    btnProjet[i].addEventListener('click', function ()
    {
        let page = this.dataset.page
        console.log(page)
        setPage(page)
    })
}

function setPage(page) {
    if(page == 'one'){
        //Image 1
        document.getElementById('one').href = "img/3.png"
        document.getElementById('one2').src = "img/3.png"
        document.getElementById('one3').innerText = "Solution web permettant le gestion de fiches de frais (CRUD) en 3 versions (classique - MVC - CodeIgniter)."
        //Image 2
        document.getElementById('two').href = "img/1.png"
        document.getElementById('two2').src = "img/1.png"
        document.getElementById('two3').innerText = "Application JavaFX permettant la gestion du personnel à travers une base de donnée MySQL et de la librairie JDBC."
        //Image 3
        document.getElementById('three').href = "img/2.png"
        document.getElementById('three2').src = "img/2.png"
        document.getElementById('three3').innerText = "Site vitrine pour une agence de marketing digital construit sur du HTML/CSS/PHP basique."
        //Image 4
        document.getElementById('four').href = "img/4.png"
        document.getElementById('four2').src = "img/4.png"
        document.getElementById('four3').innerText = "Plateforme de streaming musical en ligne permettant la lecture de musique via le site et selon le type d'abonnement choisit."
        //Image 5
        document.getElementById('five').href = "img/5.png"
        document.getElementById('five2').src = "img/5.png"
        document.getElementById('five3').innerText = "Application de streaming musical mobile permettant d'écouter de la musique stockée sur un serveur (style Spotify). Crée en Flutter."
        //Image 6
        document.getElementById('six').href = "img/bis.jpg"
        document.getElementById('six2').src = "img/bis.jpg"
        document.getElementById('six3').innerText = "Boutique en ligne d'une marque de streetwear crée à partir du framework Symfony 5."
    }
    if(page == 'two'){
        //Image 1
        document.getElementById('one').href = "img/bis.jpg"
        document.getElementById('one2').src = "img/bis.jpg"
        document.getElementById('one3').innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor magna eu pellentesque blandit."
        //Image 2
        document.getElementById('two').href = "img/bis.jpg"
        document.getElementById('two2').src = "img/bis.jpg"
        document.getElementById('two3').innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor magna eu pellentesque blandit."
        //Image 3
        document.getElementById('three').href = "img/bis.jpg"
        document.getElementById('three2').src = "img/bis.jpg"
        document.getElementById('three3').innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor magna eu pellentesque blandit."
        //Image 4
        document.getElementById('four').href = "img/bis.jpg"
        document.getElementById('four2').src = "img/bis.jpg"
        document.getElementById('four3').innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor magna eu pellentesque blandit."
        //Image 5
        document.getElementById('five').href = "img/bis.jpg"
        document.getElementById('five2').src = "img/bis.jpg"
        document.getElementById('five3').innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor magna eu pellentesque blandit."
        //Image 6
        document.getElementById('six').href = "img/bis.jpg"
        document.getElementById('six2').src = "img/bis.jpg"
        document.getElementById('six3').innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor magna eu pellentesque blandit."
    }
}