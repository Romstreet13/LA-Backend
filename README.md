# Liquid Access backend

.env example

```
PORT = 3000

POSTGRES_HOST = ''
POSTGRES_DB = ''
POSTGRES_USER = ''
POSTGRES_PASSWORD = ''

LA_CONTRACT_ADDRESS = ''
MASTER_WALLET_KEY = ''

LA_HEROKU_POSTGRES_DB = ''
LA_HEROKU_POSTGRES_USER = ''
LA_HEROKU_POSTGRES_PASSWORD = ''
LA_HEROKU_POSTGRES_HOST = ''
LA_HEROKU_PORT_DB = 5432
```

## Create mint NFT

_endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/mint-nft/create
```

_request:_

```js
{
    "merchantId": 1,
    "userId": 1,
    "userAddress": "0xa080c64e6a2937b327b50b75b408fbd5c739ff2b"
}
```

_response:_

```js
{
    "id": 1,
    "nftId": 1,
    "userId": 1,
    "userAddress": "0xa080c64e6a2937b327b50b75b408fbd5c739ff2b",
    "status": "success",
    "transactionHash": "0x39d8be137ad456d2affdbc533e5ce445ac712121d5f7d7b453634b71e481335f"
}
```

---

## Get all merchants

_endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/merchants/
```

_response:_

```js
[
  {
    id: 1,
    merchantId: 1,
    merchantName: 'Megogo',
    merchantUrl: 'ipfs://',
  },
];
```

---

## Get all mint NFT

_endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/mint-nft/
```

_response:_

```js
[
  {
    id: 1,
    nftId: 1,
    userAddress: '0xa080c64e6a2937b327b50b75b408fbd5c739ff2b',
    userId: 1,
    transactionHash:
      '0x705f65fc582c122c66b1d7b9d05e8abcb249a45f4db0711420078aa535c7df7f',
    status: 'success',
  },
];
```

---

## Get mint NFT by userAddress

_endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/mint-nft/?userAddress=0xa080c64e6a2937b327b50b75b408fbd5c739ff2b
```

_response:_

```js
[
  {
    id: 1,
    nftId: 42,
    userAddress: '0xa080c64e6a2937b327b50b75b408fbd5c739ff2b',
    userId: 42,
    transactionHash:
      '0x705f65fc582c122c66b1d7b9d05e8abcb249a45f4db0711420078aa535c7df7f',
    status: 'success',
  },
];
```

---

## Get all NFT

_endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/nft/
```

_response:_

```js
[
  {
    id: 1,
    nftId: 1,
    merchantId: 1,
    userAddress: '0xa080c64e6a2937b327b50b75b408fbd5c739ff2b',
    isActivated: true,
  },
];
```

---

## Get NFT by merchantId and userAddress

_endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/nft/?merchantId=1&userAddress=0xa080c64e6a2937b327b50b75b408fbd5c739ff2b
```

_response:_

```js
[
  {
    id: 1,
    nftId: 1,
    merchantId: 1,
    userAddress: '0xa080c64e6a2937b327b50b75b408fbd5c739ff2b',
    isActivated: true,
  },
];
```

---

## Get all logs

_endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/logs/
```

_response:_

```js
[
  {
    id: 1,
    method: 'safeMint',
    nftId: 38,
    userAddress: '0xa080c64e6a2937b327b50b75b408fbd5c739ff2b',
    userId: 38,
    merchantId: 1,
    message: null,
    transactionHash:
      '0x4a5c551ce224712d5729d344be4492f5a688c2f6ef9a5acdfc6a2c7d57bc3060',
    status: 'mint success',
    isActivated: true,
  },
];
```

---
