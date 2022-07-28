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

---

## Menu

[Create mint NFT](https://github.com/techbandorg/LA-Backend/#create-mint-nft)\
[Get all mint NFT](https://github.com/techbandorg/LA-Backend/#get-all-mint-nft)\
[Get user mint NFT by userAddress](https://github.com/techbandorg/LA-Backend/#get-user-mint-nft-by-useraddress)\
[GET user mint NFT by userId and userAddress](https://github.com/techbandorg/LA-Backend/#get-user-mint-nft-by-userid-and-useraddress)\
[Get all NFT](https://github.com/techbandorg/LA-Backend/#get-all-nft)\
[Get user NFT by merchantId and userAddress](https://github.com/techbandorg/LA-Backend/#get-user-nft-by-merchantid-and-useraddress)\
[Get all merchants](https://github.com/techbandorg/LA-Backend/#get-all-merchants)\
[Get all logs](https://github.com/techbandorg/LA-Backend/#get-all-logs)

---

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

## Get user mint NFT by userAddress

_endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/mint-nft/user/?userAddress=0xa080c64e6a2937b327b50b75b408fbd5c739ff2b
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

## GET user mint NFT by userId and userAddress

_endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/mint-nft/user/?userId=1&userAddress=0xa080c64e6a2937b327b50b75b408fbd5c739ff2b
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
      '0x0386c7ed5b7f8db5e263e30e3ae72cd80d5fada5c1a50000883bed4d845a5d1e',
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

## Get user NFT by merchantId and userAddress

_endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/nft/user/?merchantId=1&userAddress=0xa080c64e6a2937b327b50b75b408fbd5c739ff2b
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
    nftId: 1,
    userAddress: '0xa080c64e6a2937b327b50b75b408fbd5c739ff2b',
    userId: 1,
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
