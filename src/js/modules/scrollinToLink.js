const scrollingToLink = (upSelector) => {
  console.log('done');
  const upElem = document.querySelector(upSelector);

  const element = document.documentElement,
    body = document.body;

  const calcScroll = () => {
    upElem.addEventListener('click', function (event) {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);

      if (this.hash !== '') {
        event.preventDefault();
        let hashElement = document.querySelector(this.hash),
          hashElementTop = 0;

        while (hashElement.offsetParent) {
          hashElementTop += hashElement.offsetTop;
          hashElement = hashElement.offsetParent;
        }

        hashElementTop = Math.round(hashElementTop);
        smoothScroll(scrollTop, hashElementTop, this.hash);
      }
    });
  };

  const smoothScroll = (from, to, hash) => {
    let timeInterval = 1,
      prevScrolTop,
      speed;

    if (to > from) {
      speed = 30;
    } else {
      speed = -30;
    }

    let move = setInterval(function () {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);

      if (
        prevScrolTop === scrollTop ||
        (to > from && scrollTop >= to) ||
        (to < from && scrollTop <= to)
      ) {
        clearInterval(move);
        history.replaceState(
          history.state,
          document.title,
          location.href.replace(/#.*$/g, '') + hash,
        );
      } else {
        body.scrollTop += speed;
        element.scrollTop += speed;
        prevScrolTop = scrollTop;
      }
    }, timeInterval);
  };

  calcScroll();
};

export default scrollingToLink;
