function defaultRequest(type, request, sending, callback) {
  const xhr = new window.XMLHttpRequest();
  xhr.open(type, request);
  if (type=='POST') {
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(sending));
  } else {
    xhr.send();
  }
  xhr.onload = (event) => {
    switch (event.target.status) {
      case 200:
        callback(event.target.responseText);
        break;
      default:
        window.alert('Ошибка ' + event.target.responseText);
    }
  };
}

const server = {
  auth: {
    signUp: (data, callback) => {
      defaultRequest('POST', '/api/auth/signup', data, callback);
    },
    logIn: (data, callback) => {
      defaultRequest('POST', '/api/auth/login', data, callback);
    },
    logOut: (callback) => {
      defaultRequest('GET', '/api/auth/logout', null, callback);
    },
    getUser: (callback) => {
      defaultRequest('GET', '/api/auth/user', null, callback);
    },
  },
  action: {
    getSeats: (callback) => {
      defaultRequest('GET', '/api/action/reserv', null, callback);
    },
    setReserv: (data, callback) => {
      defaultRequest('POST', '/api/action/reserv', data, callback);
    },
    resetAll: (callback) => {
      defaultRequest('GET', '/api/action/resetAll', null, callback);
    },
  },
};

export default server;
