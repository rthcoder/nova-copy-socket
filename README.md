## nova-copy-socket

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&logoColor=white)


## Description
nova - socket.io section

## Installation

1. **Repository** ni klonlash:
2.  ```sh
    git clone https://github.com/tohirdavrsmart/nova-copy-socket.git
    cd nova-copy-socket
    ```

2. **Dependencies** ni o'rnatish:

    ```sh
    npm install
    ```

3. **Environment Variables** faylini yaratish (`.env`):

    ```plaintext
    PORT=
    ```

## Usage

1. **Server** ni ishga tushirish:

    ```sh
    npm start
    ```


## Base URL
`http://localhost:8000`

## Panel
- **Endpoint**: `/api/socket/panel`
- **Method**: POST
- **Response**:
```json
{
    status: 200,
    message: 'success'
}
```

## Stats
- **Endpoint**: `/api/socket/stats`
- **Method**: POST

- **Response**:

```json
{
    status: 200,
    message: 'success'
}
```

