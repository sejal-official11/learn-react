function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href) // konsa att set karna hai or kya value hogi
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const reactElement = {
    type: 'a', // element kis type kaa hai
    props: { // properties kya kya hai props is an object
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const mainContainer = document.getElementById("root")
customRender(reactElement, mainContainer) // (kya inject karu, kahan inject karu)
