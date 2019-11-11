export function scrollTo(element) {

    let height = element.offsetTop-50;
    console.log(height);
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: height
    });
   
  }