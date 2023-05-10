class AnimateSticky extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.onScrollHandler = this.onScroll.bind(this);

    window.addEventListener('scroll', this.onScrollHandler, false);
    this.onScrollHandler();
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.onScrollHandler);
  }

  onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // if(window.innerWidth > 1500) {
    //   scrollTop += parseFloat($('.product__media-toggle').css('height')) * 1.5;
    // }
    // else {
    //   scrollTop += parseFloat($('.product__media-toggle').css('height')) * 1.8;      
    // }
    // scrollTop += parseFloat($('.product__media-toggle').css('height'))*($('.product__media-toggle').length-1)

    console.log('scroll');
    // if (scrollTop >= this.getOffsetTop(this)) {
    if(scrollTop > 0) {
      requestAnimationFrame(this.reveal.bind(this));
    } else {
      requestAnimationFrame(this.reset.bind(this));
    }
  }

  reveal() {
    this.setAttribute('animate', '');
  }

  reset() {
    this.removeAttribute('animate');
  }

  getOffsetTop(element) {
    let offsetTop = 0;
    while(element) {
      offsetTop += element.offsetTop;
      element = element.offsetParent;
    }
    return offsetTop;
  }
}
customElements.define('animate-sticky', AnimateSticky);
