export default class Liker {
  constructor() {
    this.button = document.querySelector('.lik-btn');
  }

  events() {
    this.button.addEventListener('click', () => {
      console.log('hi');
    });
  }
}
