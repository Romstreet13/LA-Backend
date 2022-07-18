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

### Create NFT

_send a request to an endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/mint-nft/create
```

_which includes such an object:_

```
{
    "merchant": "Netflix",
    "userId": 2,
    "subscriptionId": 51,
    "userAddress": "0xa080c64E6a2937B327b50B75B408FBD5C739FF2B"
}
```

### Get all minted NFTs

_send a request to an endpoint:_

```
https://liqiudaccess-backend.herokuapp.com/api/mint-nft/
```

### Get user NFT by userId and merchantId

_send a request to an endpoint:_

```
http://localhost:8822/api/mint-nft/user-nft/?userAddress=0xa080c64E6a2937B327b50B75B408FBD5C739FF2B
```

where:

...?userAddress=0xa080c64E6a2937B327b50B75B408FBD5C739FFe5

userAddress = '0xa080c64E6a2937B327b50B75B408FBD5C739FFe5'
