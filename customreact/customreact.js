//this is how react see a component after comiling it



function customRender(reactElement,container){

  /*
  const domElement=document.createElement(reactElement.type);
  domElement.innerHTML=reactElement.Children;
  domElement.setAttribute('href',reactElement.props.href)
  domElement.setAttribute('taget',reactElement.props.target)
  container.appendChild(domElement);
  */

  const domElement=document.createElement(reactElement.type);
  domElement.innerHTML=reactElement.children;

  for(const prop in reactElement.props){
    if(prop === 'children')continue;
    domElement.setAttribute(prop,reactElement.props[prop]);
  }
  container.appendChild(domElement);
}
//react function parse into this format

const reactElement={
  type:'a',
  props:{
    href:'https://google.com',
    target:'_blank',
  },
  children:'click me to visit goggle'

}

const mainContainer=document.querySelector('#root')
customRender(reactElement,mainContainer);
