import jwtDecode from 'jwt-decode';

export const checkUserToken = () => {
  const token = localStorage.getItem('userToken');
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      return false;
    }
    return true;
  }
};

export const calculateVisiblePart = (element) => {
  const scrollTop = window.pageYOffset;
  const scrollBottom = scrollTop + window.innerHeight;
  const elementHeight = element.clientHeight;
  const elementStart = element.offsetTop;
  const elementEnd = elementStart + elementHeight;
  let visiblePart = -1;

  if (elementStart <= scrollTop && elementEnd < scrollBottom) {
    visiblePart = elementEnd - scrollTop;
  } else if (elementEnd >= scrollBottom && elementStart > scrollTop) {
    visiblePart = scrollBottom - elementStart;
  } else {
    visiblePart = elementHeight;
  }

  return visiblePart;
};

export const checkIfOnScreen = (element) => {
  const posTop = element.offsetTop;
  const posBottom = posTop + element.clientHeight;
  const scrollTop = window.pageYOffset;
  const winHeight = window.innerHeight;

  return (
    (posTop >= scrollTop && posTop <= scrollTop + winHeight) ||
    (posBottom >= scrollTop && posBottom < scrollTop + winHeight) ||
    (posTop <= scrollTop && posBottom >= scrollTop + winHeight)
  );
};
