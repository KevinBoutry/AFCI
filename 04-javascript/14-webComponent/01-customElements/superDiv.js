export default class SuperDiv extends HTMLDivElement
{
    constructor()
    {
        super();
        this.#setStyle();
        this.addEventListener("click", this.hide);
    }
    #setStyle()
    {
        // Par défaut, les éléments personnalisés sont traités comme inline
        // this.style.display = "block";
        this.style.overflow = "hidden";
        this.style.backgroundColor = this.getAttribute("bg")??"red";
        this.style.transition = "height 0.3s linear";
        this.sizes = this.getBoundingClientRect();
        this.style.height = this.sizes.height + "px";
    }
    hide()
    {
        if(this.style.height == "1rem")
            this.style.height = this.sizes.height + "px";
        else
            this.style.height = "1rem";
    }
    // Les cycles de vie :
    connectedCallback()
    {
        console.log("Message affiché quand l'élement est ajouté à la page.");
    }
    disconnectedCallback()
    {
        console.log("Message affiché quand l'éléémnet est retiré de la page");
    }
    adoptedCallback()
    {
        console.log("Message affiché quand l'élément change de document");
    }
    attributeChangedCallback(name, old, now)
    {
        console.log(
            `L'attribut "${name}" est passé de :
            "${old}"
            à
            "${now}"
        `);
    }
    static get observedAttributes()
    {
        return ["style"];
    }
}

customElements.define("super-div", SuperDiv, {extends:"div"});