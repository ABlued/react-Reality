const hooks = [];
let currentComponent = -1;

export class Component{

}
export function useState(initValue) {
    const position = currentComponent;
    if(!hooks[position]){
        hooks[position] = initValue;
    }

    return[
        hooks[position],
        (nextValue)=>{
            hooks[position] = nextValue;
        }
    ]
}

function renderRealDOM(vdom) {
    if(typeof vdom === 'string'){
        return document.createTextNode(vdom)
    }
    if(vdom === undefined) return;
    const $el = document.createElement(vdom.tagName);
    vdom.children.map(renderRealDOM).forEach(node => {
        $el.appendChild(node)
    });
    return $el;
}

export const render = (function(){
    let prevVdom = null;
    return function (nextVdom, container) {
        if(prevVdom === null){
            prevVdom = nextVdom;
        }
        container.appendChild(renderRealDOM(nextVdom))
    }
})();

export function createElement(tagName, props, ...children) {
    if(typeof tagName === 'function'){
        if(tagName.prototype instanceof Component){
            // 클래스 컴포넌트
            const instance = new tagName({...props, children})
            return instance.render()
        } else {
            // 일반 함수
            currentComponent++;
            return tagName.apply(null, [props, ...children])
        }
    }
    return {tagName, props, children}
}