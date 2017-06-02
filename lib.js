class add extends HTMLElement{
  constructor(){
    super();
    this._a=0
    this._b=0
    this._value=0

  }
  handleEvent (evt){
    this.func()
  }
  func (){
    var a = parseFloat(this._a)
    var b = parseFloat(this._b)
    if(Number.isNaN(a)) a = parseFloat(window[this._a].value)
    if(Number.isNaN(b)) b = parseFloat(window[this._b].value)
    this._value=a+b
    this.innerHTML=this._value
  }
  static get observedAttributes(){return ["a","b"]}

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue && name === 'a') {
      this.a = newValue;
      this.func()
    }
    if (newValue !== oldValue && name === 'b') {
      this.b = newValue;
      this.func()
    }
  }
  set a(val) {
    this._a = val;
    var a = parseFloat(this._a)
    if(Number.isNaN(a)){
      window[this._a].addEventListener("keyup",this)
    }
    this.func()
  }
  set b(val) {
    this._b = val;
    var b = parseFloat(this._b)
    if(Number.isNaN(b)){
      window[this._b].addEventListener("keyup",this)
    }
    this.func()
  }
  get a() {
    return this._a;
  }
  get b() {
    return this._b;
  }
  get value(){
    return this._value
  }
}

class variable extends HTMLElement{
  constructor(){
    super();
    this._value=0

  }

  static get observedAttributes(){return ["value"]}
  attributeChangedCallback(name, oldValue, newValue) {
      this[name]= newValue;
  }
  set value(val) {
    this._value = val;
  }

  get value(){
    return this._value
  }
}




window.customElements.define('lib-add', add);
window.customElements.define('lib-var', variable);
