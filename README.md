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

## Create NFT

_endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/mint-nft/create
```

_request:_

```js
{
    "merchant": "Netflix",
    "userId": 7,
    "subscriptionId": 52,
    "userAddress": "0xa080c64E6a2937B327b50B75B408FBD5C739FFe5"
}
```

_response:_

```js
{
    "nftId": 61,
    "merchant": "Netflix",
    "subscriptionId": 52,
    "userId": 7
}
```

---

## Get all minted NFTs

_endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/mint-nft/
```

_response:_

```js
[
  {
    id: 61,
    nftId: 61,
    subscriptionId: 52,
    userAddress: '0xa080c64E6a2937B327b50B75B408FBD5C739FFe5',
    userId: 7,
    merchant: 'Netflix',
    transactionHash:
      '0x930725afb59ed7d00db9010a467bde7d7e78163ab5eb2bcab5589f77a050b6b7',
    status: 'success',
    createdAt: '2022-07-21T11:14:01.558Z',
    updatedAt: '2022-07-21T11:14:01.558Z',
  },
];
```

---

## Get user NFT by userAddress

_endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/mint-nft/user-nft/?userAddress=0xa080c64E6a2937B327b50B75B408FBD5C739FF2B
```

_request:_

...?userAddress=0xa080c64E6a2937B327b50B75B408FBD5C739FFe5

where:

userAddress = '0xa080c64E6a2937B327b50B75B408FBD5C739FFe5'

_response:_

```js
[
  {
    nftId: 61,
    merchant: 'Netflix',
    subscriptionId: 52,
    userId: 7,
    transactionHash:
      '0x96564f736c08efd9693dd8e55e6d38ed2009acce590b027f68de75c208af81d2',
  },
];
```

---

## Get user NFT by userId, subscriptionId and merchant

_endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/mint-nft/user-nft/?userId=1&subscriptionId=7&merchant=Netflix
```

_request:_

...?userId=1&subscriptionId=7&merchant=Netflix

where:

userId = 1\
subscriptionId = 7\
merchant = 'Netflix'

_response:_

```js
[
  {
    userAddress: '0xa080c64E6a2937B327b50B75B408FBD5C739FFe5',
  },
];
```

---

## Get all NFT IDs

_endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/nft/
```

_response:_

```js
[
  {
    id: 61,
    nftId: 61,
    transactionHash:
      '0x96564f736c08efd9693dd8e55e6d38ed2009acce590b027f68de75c208af81d2',
    userAddress: '0xa080c64E6a2937B327b50B75B408FBD5C739FFe5',
    createdAt: '2022-07-20T14:53:24.536Z',
    updatedAt: '2022-07-20T14:53:24.536Z',
  },
];
```

---

## Get all logs

_endpoint:_

```
http://localhost:8822/api/logs/
```

_response:_

```js
[
  {
    id: 61,
    nftId: 61,
    subscriptionId: 52,
    userAddress: '0xa080c64E6a2937B327b50B75B408FBD5C739FFe5',
    userId: 7,
    merchant: 'Netflix',
    message: null,
    status: 'mint success',
    transactionHash:
      '0x828022218c546f93d7d73c7901e20ed2d154de8593d68b827718b7eaee5cef22',
    createdAt: '2022-07-25T09:05:41.135Z',
    updatedAt: '2022-07-25T09:06:25.985Z',
  },
];
```

---
